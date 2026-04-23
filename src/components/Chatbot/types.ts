export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatbotState {
  isOpen: boolean;
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface ChatApiRequest {
  message: string;
  conversationHistory: {
    role: 'user' | 'assistant';
    content: string;
  }[];
}

export interface ChatApiResponse {
  response: string;
  conversationId: string;
  timestamp: string;
}

// Booking types
export type BookingStep = 'select-service' | 'select-date' | 'enter-details' | 'confirm' | 'done';

export interface BookingData {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

export interface BookingApiResponse {
  success: boolean;
  bookingId: string;
  message: string;
  emailSent: boolean;
}
