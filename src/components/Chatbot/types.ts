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
