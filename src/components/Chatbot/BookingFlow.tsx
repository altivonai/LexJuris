'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, FileText, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import type { BookingStep, BookingData } from './types';

const SERVICES = [
  { id: 'koeberraadgivning', label: 'Køberrådgivning' },
  { id: 'testamente', label: 'Testamente & Arv' },
  { id: 'aegtepagt', label: 'Ægtepagt & Særeje' },
  { id: 'fremtidsfuldmagt', label: 'Fremtidsfuldmagt' },
  { id: 'skilsmisse', label: 'Skilsmisse & Bodeling' },
  { id: 'doedsbobehandling', label: 'Dødsbobehandling' },
];

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
];

interface BookingFlowProps {
  onComplete: (data: BookingData) => void;
  onCancel: () => void;
  isSubmitting: boolean;
}

export default function BookingFlow({ onComplete, onCancel, isSubmitting }: BookingFlowProps) {
  const [step, setStep] = useState<BookingStep>('select-service');
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [data, setData] = useState<BookingData>({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BookingData, string>>>({});

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[\d\s+()-]{8,}$/.test(phone);

  const getMinDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    // Skip weekends
    while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const minDateStr = getMinDate();

  const calendarDays = useMemo(() => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    // Monday-based: 0=Mon, 6=Sun
    const startOffset = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days: (number | null)[] = [];
    for (let i = 0; i < startOffset; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);
    return days;
  }, [calendarMonth]);

  const isDateSelectable = (day: number) => {
    const d = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), day);
    const dow = d.getDay();
    if (dow === 0 || dow === 6) return false;
    const dateStr = d.toISOString().split('T')[0];
    return dateStr >= minDateStr;
  };

  const getDayDateStr = (day: number) => {
    const d = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), day);
    return d.toISOString().split('T')[0];
  };

  const canGoPrev = () => {
    const today = new Date();
    return calendarMonth.getFullYear() > today.getFullYear() || 
           (calendarMonth.getFullYear() === today.getFullYear() && calendarMonth.getMonth() > today.getMonth());
  };

  const monthLabel = calendarMonth.toLocaleDateString('da-DK', { month: 'long', year: 'numeric' });

  const handleNext = () => {
    if (step === 'select-service' && data.service) setStep('select-date');
    else if (step === 'select-date' && data.date && data.time) setStep('enter-details');
    else if (step === 'enter-details') {
      const newErrors: Partial<Record<keyof BookingData, string>> = {};
      if (!data.name.trim()) newErrors.name = 'Navn er påkrævet';
      if (!validateEmail(data.email)) newErrors.email = 'Ugyldig e-mail';
      if (!validatePhone(data.phone)) newErrors.phone = 'Ugyldigt telefonnummer';
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setErrors({});
      setStep('confirm');
    }
  };

  const handleBack = () => {
    if (step === 'select-date') setStep('select-service');
    else if (step === 'enter-details') setStep('select-date');
    else if (step === 'confirm') setStep('enter-details');
  };

  const handleConfirm = () => {
    onComplete(data);
  };

  const getServiceLabel = () => SERVICES.find(s => s.id === data.service)?.label || '';

  const formatDate = (d: string) => {
    if (!d) return '';
    return new Date(d).toLocaleDateString('da-DK', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  const stepIndicator = (
    <div className="flex items-center gap-1 px-4 pt-3 pb-1">
      {['select-service', 'select-date', 'enter-details', 'confirm'].map((s, i) => (
        <div key={s} className="flex items-center gap-1 flex-1">
          <div className={`h-1.5 rounded-full flex-1 transition-colors ${
            ['select-service', 'select-date', 'enter-details', 'confirm'].indexOf(step) >= i
              ? 'bg-amber-600' : 'bg-slate-200'
          }`} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col h-full min-h-0">
      {/* Back / Cancel header */}
      <div className="flex items-center gap-2 px-4 pt-3 pb-1 flex-shrink-0">
        {step !== 'select-service' ? (
          <button onClick={handleBack} className="flex items-center gap-1 text-sm text-slate-600 hover:text-amber-700 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Tilbage
          </button>
        ) : (
          <button onClick={onCancel} className="flex items-center gap-1 text-sm text-slate-600 hover:text-amber-700 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Tilbage til chat
          </button>
        )}
      </div>

      {stepIndicator}

      {/* Step content */}
      <div className="flex-1 min-h-0 overflow-y-auto px-4 pb-4" style={{ scrollbarWidth: 'thin', scrollbarColor: '#d97706 #f1f5f9' }}>
        <AnimatePresence mode="wait">
          {step === 'select-service' && (
            <motion.div key="service" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="mt-3">
              <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-slate-900 mb-1">Vælg ydelse</h4>
              <p className="text-xs text-slate-500 mb-3">Hvad har du brug for hjælp med?</p>
              <div className="flex flex-col gap-2">
                {SERVICES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setData(d => ({ ...d, service: s.id }))}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all text-sm ${
                      data.service === s.id
                        ? 'border-amber-600 bg-amber-50 ring-1 ring-amber-600'
                        : 'border-slate-200 hover:border-amber-400'
                    }`}
                  >
                    <span className="font-medium text-slate-800">{s.label}</span>
                    <span className="text-xs text-green-600 font-medium">Gratis intro</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'select-date' && (
            <motion.div key="date" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="mt-3">
              <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-slate-900 mb-1">Vælg dato & tid</h4>
              <p className="text-xs text-slate-500 mb-3">{getServiceLabel()}</p>

              {/* Custom calendar */}
              <div className="border border-slate-200 rounded-xl overflow-hidden mb-4">
                {/* Month navigation */}
                <div className="flex items-center justify-between bg-slate-50 px-3 py-2.5 border-b border-slate-200">
                  <button
                    onClick={() => canGoPrev() && setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1))}
                    className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors ${canGoPrev() ? 'hover:bg-slate-200 text-slate-700' : 'text-slate-300 cursor-not-allowed'}`}
                    disabled={!canGoPrev()}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-semibold text-slate-800 capitalize">{monthLabel}</span>
                  <button
                    onClick={() => setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1))}
                    className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-200">
                  {['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'].map(d => (
                    <div key={d} className="text-center text-[10px] font-semibold text-slate-400 uppercase py-1.5">{d}</div>
                  ))}
                </div>

                {/* Day grid */}
                <div className="grid grid-cols-7 p-1.5 gap-0.5">
                  {calendarDays.map((day, i) => {
                    if (day === null) return <div key={`empty-${i}`} />;
                    const selectable = isDateSelectable(day);
                    const dateStr = getDayDateStr(day);
                    const isSelected = data.date === dateStr;
                    const isToday = dateStr === new Date().toISOString().split('T')[0];
                    return (
                      <button
                        key={day}
                        disabled={!selectable}
                        onClick={() => setData(d => ({ ...d, date: dateStr }))}
                        className={`relative h-8 rounded-lg text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-amber-600 text-white shadow-sm'
                            : selectable
                              ? 'text-slate-700 hover:bg-amber-50 hover:text-amber-700'
                              : 'text-slate-300 cursor-not-allowed'
                        }`}
                      >
                        {day}
                        {isToday && !isSelected && (
                          <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected date display */}
              {data.date && (
                <div className="flex items-center gap-2 mb-4 px-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-xs font-medium text-slate-700">
                    {new Date(data.date).toLocaleDateString('da-DK', { weekday: 'long', day: 'numeric', month: 'long' })}
                  </span>
                </div>
              )}

              <label className="flex items-center gap-2 text-sm text-slate-700 mb-2">
                <Clock className="w-4 h-4 text-amber-600" /> Tidspunkt
              </label>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.map(t => (
                  <button
                    key={t}
                    onClick={() => setData(d => ({ ...d, time: t }))}
                    className={`py-2 rounded-lg border text-sm font-medium transition-all ${
                      data.time === t
                        ? 'border-amber-600 bg-amber-600 text-white'
                        : 'border-slate-200 text-slate-700 hover:border-amber-400'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'enter-details' && (
            <motion.div key="details" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="mt-3">
              <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-slate-900 mb-1">Dine oplysninger</h4>
              <p className="text-xs text-slate-500 mb-3">Vi sender en bekræftelse til din e-mail</p>

              <div className="flex flex-col gap-3">
                <div>
                  <label className="flex items-center gap-1.5 text-sm text-slate-700 mb-1">
                    <User className="w-3.5 h-3.5 text-amber-600" /> Fulde navn *
                  </label>
                  <input
                    type="text"
                    value={data.name}
                    onChange={e => { setData(d => ({ ...d, name: e.target.value })); setErrors(er => ({ ...er, name: undefined })); }}
                    placeholder="Anders Jensen"
                    className={`w-full border rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent ${errors.name ? 'border-red-400' : 'border-slate-300'}`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-0.5">{errors.name}</p>}
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-sm text-slate-700 mb-1">
                    <Mail className="w-3.5 h-3.5 text-amber-600" /> E-mail *
                  </label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={e => { setData(d => ({ ...d, email: e.target.value })); setErrors(er => ({ ...er, email: undefined })); }}
                    placeholder="anders@email.dk"
                    className={`w-full border rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent ${errors.email ? 'border-red-400' : 'border-slate-300'}`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-0.5">{errors.email}</p>}
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-sm text-slate-700 mb-1">
                    <Phone className="w-3.5 h-3.5 text-amber-600" /> Telefon *
                  </label>
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={e => { setData(d => ({ ...d, phone: e.target.value })); setErrors(er => ({ ...er, phone: undefined })); }}
                    placeholder="+45 12 34 56 78"
                    className={`w-full border rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent ${errors.phone ? 'border-red-400' : 'border-slate-300'}`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-sm text-slate-700 mb-1">
                    <FileText className="w-3.5 h-3.5 text-amber-600" /> Bemærkninger (valgfrit)
                  </label>
                  <textarea
                    value={data.notes}
                    onChange={e => setData(d => ({ ...d, notes: e.target.value }))}
                    placeholder="Fortæl lidt om din sag..."
                    rows={2}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent resize-none"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 'confirm' && (
            <motion.div key="confirm" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="mt-3">
              <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-slate-900 mb-1">Bekræft booking</h4>
              <p className="text-xs text-slate-500 mb-3">Gennemgå dine oplysninger</p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Ydelse</p>
                    <p className="text-sm font-semibold text-slate-900">{getServiceLabel()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Pris</p>
                    <p className="text-sm font-semibold text-green-600">Gratis</p>
                  </div>
                </div>

                <div className="border-t border-amber-200 pt-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Dato & tid</p>
                  <p className="text-sm font-medium text-slate-900">{formatDate(data.date)} kl. {data.time}</p>
                </div>

                <div className="border-t border-amber-200 pt-3 space-y-1">
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Kontaktoplysninger</p>
                  <p className="text-sm text-slate-800">{data.name}</p>
                  <p className="text-sm text-slate-600">{data.email}</p>
                  <p className="text-sm text-slate-600">{data.phone}</p>
                  {data.notes && <p className="text-sm text-slate-500 italic mt-1">&quot;{data.notes}&quot;</p>}
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-3 text-center">
                En bekræftelse sendes til {data.email}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action button */}
      <div className="px-4 pb-4 pt-2 border-t border-slate-100">
        {step === 'confirm' ? (
          <button
            onClick={handleConfirm}
            disabled={isSubmitting}
            className="w-full bg-amber-600 hover:bg-amber-500 disabled:bg-amber-400 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <motion.div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
            ) : (
              <>
                <Check className="w-5 h-5" /> Bekræft booking
              </>
            )}
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={
              (step === 'select-service' && !data.service) ||
              (step === 'select-date' && (!data.date || !data.time))
            }
            className="w-full bg-amber-600 hover:bg-amber-500 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Næste
          </button>
        )}
      </div>
    </div>
  );
}
