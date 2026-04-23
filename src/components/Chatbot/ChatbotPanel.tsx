'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import type { Message } from './types';

interface ChatbotPanelProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  onSendMessage: (message: string) => void;
}

const TypingIndicator = () => (
  <div className="flex justify-start mb-4">
    <div className="bg-slate-100 rounded-2xl px-4 py-3 flex gap-1">
      <motion.div
        className="w-2 h-2 bg-slate-400 rounded-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="w-2 h-2 bg-slate-400 rounded-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="w-2 h-2 bg-slate-400 rounded-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  </div>
);

export default function ChatbotPanel({
  isOpen,
  onClose,
  messages,
  isLoading,
  error,
  onSendMessage,
}: ChatbotPanelProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current && messagesContainerRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  // Prevent body scroll when panel is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const welcomeMessage = "Hej! Jeg er LexJuris juridisk assistent. Hvordan kan jeg hjælpe dig med juridisk rådgivning i dag?";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
          
          {/* Chat panel */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 bg-white rounded-2xl shadow-2xl flex flex-col
                       lg:bottom-24 lg:right-6 lg:w-[400px] lg:h-[600px]
                       inset-0 lg:inset-auto"
            role="dialog"
            aria-label="Chat med juridisk assistent"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 rounded-t-2xl flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-base">
                    LexJuris Assistent
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-xs text-slate-300">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Luk chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages area */}
            <div
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-4 bg-white"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#d97706 #f1f5f9',
              }}
            >
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <Bot className="w-8 h-8 text-amber-600" />
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                    {welcomeMessage}
                  </p>
                  <div className="mt-6 flex flex-col gap-2 w-full max-w-xs">
                    <button
                      onClick={() => onSendMessage('Hvad koster køberrådgivning?')}
                      className="text-sm text-left px-4 py-2 rounded-lg border border-slate-200 hover:border-amber-600 hover:text-amber-700 transition-colors"
                    >
                      Hvad koster køberrådgivning?
                    </button>
                    <button
                      onClick={() => onSendMessage('Hvordan opretter jeg et testamente?')}
                      className="text-sm text-left px-4 py-2 rounded-lg border border-slate-200 hover:border-amber-600 hover:text-amber-700 transition-colors"
                    >
                      Hvordan opretter jeg et testamente?
                    </button>
                    <button
                      onClick={() => onSendMessage('Hvad er jeres åbningstider?')}
                      className="text-sm text-left px-4 py-2 rounded-lg border border-slate-200 hover:border-amber-600 hover:text-amber-700 transition-colors"
                    >
                      Hvad er jeres åbningstider?
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((message, index) => (
                    <ChatMessage
                      key={message.id}
                      message={message}
                      isLast={index === messages.length - 1 && !isLoading}
                    />
                  ))}
                  {isLoading && <TypingIndicator />}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                      <p className="text-sm text-red-800">{error}</p>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input area */}
            <ChatInput onSend={onSendMessage} disabled={isLoading} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
