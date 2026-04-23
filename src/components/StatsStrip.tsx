'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Stat {
  value: string;
  label: string;
}

interface StatsStripProps {
  stats?: Stat[];
  dark?: boolean;
}

const defaultStats: Stat[] = [
  { value: '5★', label: 'Trustpilot' },
  { value: '12+', label: 'Byer i Danmark' },
  { value: 'Gratis', label: 'Første samtale' },
  { value: 'Fast pris', label: 'Ingen overraskelser' },
];

function AnimatedStat({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShow(true), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="text-center px-6 py-4"
    >
      <div className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-gradient">
        {stat.value}
      </div>
      <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
    </motion.div>
  );
}

export default function StatsStrip({ stats = defaultStats, dark = false }: StatsStripProps) {
  return (
    <section className={`py-8 sm:py-10 border-y ${
      dark
        ? 'bg-slate-900 border-slate-800'
        : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
