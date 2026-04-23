import { Phone, Mail, CheckCircle } from 'lucide-react';
import Hero from '@/components/Hero';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import StatsStrip from '@/components/StatsStrip';
import ProcessSteps from '@/components/ProcessSteps';
import TestimonialSection from '@/components/TestimonialSection';
import CTABanner from '@/components/CTABanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gratis indledende samtale',
  description:
    'Book en gratis og uforpligtende indledende samtale med advokat Anette Malthe Christiansen. Ring 70 70 71 22 eller send en e-mail.',
};

const benefits = [
  'Vi gennemgår din sag og giver dig et overblik',
  'Du får svar på dine spørgsmål — uden jurasprog',
  'Uforpligtende — du bestemmer selv om du vil gå videre',
  'Faste lave priser — du kender prisen inden vi starter',
  'Online møde muligt — uanset hvor du bor i Danmark',
];

export default function GratisSamtalePage() {
  return (
    <>
      <Hero
        title="Book en gratis indledende samtale"
        highlightWord="gratis"
        subtitle="Tag det første skridt. Vi gennemgår din situation og giver dig et klart overblik over dine muligheder — helt uforpligtende."
        compact
      />

      <StatsStrip />

      {/* How to book */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact options */}
            <AnimateOnScroll>
              <div className="space-y-6">
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-slate-900">
                  Kontakt os direkte
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:70707122"
                    className="flex items-center gap-4 bg-slate-50 rounded-2xl p-5 hover:bg-cyan-50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 group-hover:bg-cyan-100 transition-colors shadow-sm">
                      <Phone className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Ring til os</p>
                      <p className="text-sm text-slate-500">70 70 71 22</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@lexjuris.dk"
                    className="flex items-center gap-4 bg-slate-50 rounded-2xl p-5 hover:bg-cyan-50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 group-hover:bg-cyan-100 transition-colors shadow-sm">
                      <Mail className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Send en e-mail</p>
                      <p className="text-sm text-slate-500">info@lexjuris.dk</p>
                    </div>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Benefits */}
            <AnimateOnScroll delay={0.08}>
              <div className="bg-slate-50 rounded-2xl p-7 sm:p-8 h-full">
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-slate-900 mb-5">
                  Hvad kan du forvente?
                </h2>
                <ul className="space-y-3.5">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-600 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps title="Hvad sker der i den gratis samtale?" />

      {/* Testimonials */}
      <TestimonialSection title="Det siger vores klienter" />

      {/* Bottom CTA */}
      <CTABanner
        title="Tag det første skridt i dag"
        subtitle="Det er en god idé at tage stilling til din og din families juridiske situation. Få rådgivning, så du kan træffe de bedste valg."
      />
    </>
  );
}
