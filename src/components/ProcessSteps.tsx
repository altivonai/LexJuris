'use client';

import AnimateOnScroll from '@/components/AnimateOnScroll';
import { fadeUp } from '@/lib/animations';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title?: string;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    number: '01',
    title: 'Book en samtale',
    description: 'Ring eller skriv til os — vi tilbyder en gratis og uforpligtende indledende samtale.',
  },
  {
    number: '02',
    title: 'Vi rådgiver dig',
    description: 'Vi gennemgår din situation, forklarer dine muligheder og giver et klart overblik.',
  },
  {
    number: '03',
    title: 'Din løsning',
    description: 'Vi håndterer din sag professionelt — til fast pris og med direkte kontakt til advokaten.',
  },
];

export default function ProcessSteps({
  title = 'Sådan arbejder vi',
  steps = defaultSteps,
}: ProcessStepsProps) {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-16">
            {title}
          </h2>
        </AnimateOnScroll>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-7 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-[2px] bg-slate-200" />
          <div className="hidden lg:block absolute top-7 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-[2px] bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i * 0.15} variants={fadeUp}>
                <div className="text-center">
                  {/* Number circle */}
                  <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-950 text-white font-[family-name:var(--font-space-grotesk)] font-bold text-lg mb-6">
                    {step.number}
                    <div className="absolute inset-0 rounded-2xl bg-cyan-500/20 blur-xl" />
                  </div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
