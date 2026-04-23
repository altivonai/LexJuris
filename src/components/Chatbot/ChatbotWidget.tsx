'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ChatbotPanel from './ChatbotPanel';
import type { Message, ChatApiRequest, ChatApiResponse, BookingData, BookingApiResponse } from './types';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Booking state
  const [bookingMode, setBookingMode] = useState(false);
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<{ bookingId: string; data: BookingData } | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    // Add user message immediately
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Prepare conversation history (last 10 messages for context)
      const conversationHistory = messages
        .slice(-10)
        .map((msg) => ({
          role: msg.role,
          content: msg.content,
        }));

      const requestBody: ChatApiRequest = {
        message: content,
        conversationHistory,
      };

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('For mange forespørgsler. Prøv igen om lidt.');
        } else if (response.status === 500) {
          throw new Error('Der opstod en fejl. Prøv venligst igen.');
        } else {
          throw new Error('Kunne ikke sende beskeden. Prøv igen.');
        }
      }

      const data: ChatApiResponse = await response.json();

      // Add assistant response
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.response,
        timestamp: new Date(data.timestamp),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Der opstod en uventet fejl';
      setError(errorMessage);
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setError(null);
    }
  };

  const handleStartBooking = () => {
    setBookingMode(true);
    setBookingConfirmed(null);
  };

  const handleCancelBooking = () => {
    setBookingMode(false);
  };

  const handleCompleteBooking = useCallback(async (data: BookingData) => {
    setIsBookingSubmitting(true);
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Booking fejlede');
      }

      const result: BookingApiResponse = await response.json();

      if (result.success) {
        setBookingMode(false);
        setBookingConfirmed({ bookingId: result.bookingId, data });

        // Add confirmation message to chat history
        const confirmMsg: Message = {
          id: `booking-${Date.now()}`,
          role: 'assistant',
          content: `Booking bekræftet! (${result.bookingId}). Bekræftelse sendt til ${data.email}.`,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, confirmMsg]);
      } else {
        throw new Error(result.message || 'Booking fejlede');
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Der opstod en fejl med din booking';
      setError(msg);
      setBookingMode(false);
    } finally {
      setIsBookingSubmitting(false);
    }
  }, []);

  const handleBackToChat = () => {
    setBookingConfirmed(null);
  };

  return (
    <>
      {/* Pulse rings behind button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-30 w-14 h-14 pointer-events-none">
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              className="absolute inset-0 rounded-full border-2 border-amber-500/40"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Floating action button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
        className={`chat-fab fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen
            ? 'bg-slate-900 hover:bg-slate-800'
            : 'bg-amber-600 hover:bg-amber-500'
        }`}
        aria-label={isOpen ? 'Luk chat' : 'Åbn chat'}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.div>
      </motion.button>

      {/* Chat panel */}
      <ChatbotPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        isLoading={isLoading}
        error={error}
        onSendMessage={sendMessage}
        bookingMode={bookingMode}
        onStartBooking={handleStartBooking}
        onCancelBooking={handleCancelBooking}
        onCompleteBooking={handleCompleteBooking}
        isBookingSubmitting={isBookingSubmitting}
        bookingConfirmed={bookingConfirmed}
        onBackToChat={handleBackToChat}
      />
    </>
  );
}
