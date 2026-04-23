'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Mail, Calendar, Clock, ArrowLeft } from 'lucide-react';
import type { BookingData } from './types';

const SERVICE_LABELS: Record<string, string> = {
  koeberraadgivning: 'Køberrådgivning',
  testamente: 'Testamente & Arv',
  aegtepagt: 'Ægtepagt & Særeje',
  fremtidsfuldmagt: 'Fremtidsfuldmagt',
  skilsmisse: 'Skilsmisse & Bodeling',
  doedsbobehandling: 'Dødsbobehandling',
};

interface BookingConfirmationProps {
  bookingId: string;
  data: BookingData;
  onBackToChat: () => void;
}

export default function BookingConfirmation({ bookingId, data, onBackToChat }: BookingConfirmationProps) {
  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('da-DK', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-lg text-slate-900 mb-1">
          Booking bekræftet!
        </h3>
        <p className="text-xs text-slate-500 mb-4">Booking #{bookingId}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 mb-4 text-left space-y-2"
      >
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span className="text-sm text-slate-700">{formatDate(data.date)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span className="text-sm text-slate-700">kl. {data.time}</span>
        </div>
        <div className="border-t border-slate-200 pt-2 mt-2">
          <p className="text-sm font-medium text-slate-900">{SERVICE_LABELS[data.service] || data.service}</p>
          <p className="text-xs text-slate-500">{data.name}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 w-full"
      >
        <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
        <p className="text-xs text-slate-700 text-left">
          Bekræftelse sendt til <span className="font-semibold">{data.email}</span>
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        onClick={onBackToChat}
        className="flex items-center gap-2 text-sm text-amber-700 hover:text-amber-600 font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Tilbage til chat
      </motion.button>
    </div>
  );
}
