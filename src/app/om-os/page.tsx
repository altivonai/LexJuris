import Image from 'next/image';
import Hero from '@/components/Hero';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import TeamSection from '@/components/TeamSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om os',
  description:
    'LexJuris Advokatfirma i Viborg. Mød Anette Malthe Christiansen og teamet. Juridisk rådgivning i øjenhøjde til private i hele landet.',
};

export default function OmOsPage() {
  return (
    <>
      <Hero
        title="Om LexJuris"
        subtitle="Det lille advokatfirma i Viborg, hvor du er i centrum. Vi gør juraen tilgængelig og forståelig."
        compact
      />

      {/* About */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="flex flex-col lg:flex-row gap-8 items-center px-4 sm:px-6 lg:px-8">
          {/* Text box - 25% width, overlaps on desktop */}
          <div className="w-full lg:w-1/4 relative z-10 lg:-mr-16">
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-8 shadow-2xl shadow-slate-900/10 border border-slate-100">
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Om LexJuris
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Et dansk advokatfirma med base i Viborg, der tilbyder juridisk rådgivning til privatpersoner over hele landet.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
          
          {/* Image - 75% width */}
          <div className="w-full lg:w-3/4 h-64 sm:h-80 lg:h-96 relative overflow-hidden rounded-2xl bg-slate-100">
            <AnimateOnScroll>
              <img
                src="/images/hero/office-entrance.jpg"
                alt="LexJuris kontor"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimateOnScroll>
          </div>
        </div>

        {/* Full text section below */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <AnimateOnScroll>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                LexJuris er et dansk advokatfirma med base i Viborg, der tilbyder juridisk
                rådgivning til privatpersoner over hele landet. Vi fokuserer på at gøre juraen
                tilgængelig og forståelig for &ldquo;Familien Danmark&rdquo;.
              </p>
              <p>
                Vi lægger vægt på at være løsningsorienterede, medmenneskelige og effektive.
                Vi tilbyder gratis indledende samtaler, faste lave priser og mulighed for
                online møder, så klienter kan få hjælp uanset geografisk placering.
              </p>
              <p>
                Hos LexJuris sætter vi dig som klient i centrum. Vi ved, hvor vigtigt det er, at
                du forstår alle aspekter af din sag. Du får altid en dedikeret advokat, der
                holder dig opdateret og som er tilgængelig for sparring under hele processen.
              </p>
              <p className="text-slate-900 font-medium">
                Du ringer ikke til en stor organisation, men direkte til mig. Din tryghed er mit mål.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      {/* Values */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-14">
              Det du kan forvente
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Tryghed', text: 'Vi giver dig ro i maven ved at forklare alt i et sprog du forstår.' },
              { title: 'Faste priser', text: 'Gennemsigtige priser uden overraskelser. Du kender prisen inden vi starter.' },
              { title: 'Direkte kontakt', text: 'Du taler altid direkte med advokaten, ikke en receptionist.' },
              { title: 'Tilgængelighed', text: 'Online møder og digital sagsbehandling, uanset hvor du bor i Danmark.' },
            ].map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 0.08}>
                <div className="bg-slate-50 rounded-2xl p-6 h-full">
                  <div className="w-2 h-2 rounded-full bg-amber-600 mb-4" />
                  <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-slate-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{v.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
