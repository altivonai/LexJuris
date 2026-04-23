import { Mail, Phone, Smartphone } from 'lucide-react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTABanner from '@/components/CTABanner';
import { team } from '@/data/team';
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
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-14">
              Mød teamet
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden h-full flex flex-col hover:shadow-lg hover:shadow-slate-200/50 transition-all hover:-translate-y-1">
                  {/* Photo */}
                  <div className="aspect-[4/3] relative bg-slate-100 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-cyan-600 font-medium">{member.title}</p>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed flex-1">
                      {member.bio}
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-cyan-600 transition-colors">
                          <Mail className="w-3.5 h-3.5" />
                          {member.email}
                        </a>
                      )}
                      <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-cyan-600 transition-colors">
                        <Phone className="w-3.5 h-3.5" />
                        {member.phone}
                      </a>
                      {member.mobile && (
                        <a href={`tel:${member.mobile.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-cyan-600 transition-colors">
                          <Smartphone className="w-3.5 h-3.5" />
                          {member.mobile}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

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
              { title: 'Direkte kontakt', text: 'Du taler altid direkte med advokaten — ikke en receptionist.' },
              { title: 'Tilgængelighed', text: 'Online møder og digital sagsbehandling, uanset hvor du bor i Danmark.' },
            ].map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 0.08}>
                <div className="bg-slate-50 rounded-2xl p-6 h-full">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mb-4" />
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

      <CTABanner />
    </>
  );
}
