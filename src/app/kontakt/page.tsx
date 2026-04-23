import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import Hero from '@/components/Hero';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontakt LexJuris Advokatfirma i Viborg. Telefon 70 70 71 22, email info@lexjuris.dk. Gravene 2, 8800 Viborg. Book gratis samtale.',
};

export default function KontaktPage() {
  return (
    <>
      <Hero
        title="Kontakt os"
        subtitle="Vi er klar til at hjælpe. Ring, skriv eller book en gratis indledende samtale."
        compact
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Contact info + hours */}
            <div className="space-y-6">
              <AnimateOnScroll>
                <div className="bg-slate-50 rounded-2xl p-7 sm:p-8">
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-slate-900 mb-6">
                    Kontaktoplysninger
                  </h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Adresse</p>
                        <p className="text-sm text-slate-500">Gravene 2, 8800 Viborg</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Telefon</p>
                        <a href="tel:70707122" className="text-sm text-slate-500 hover:text-cyan-600 transition-colors">
                          70 70 71 22
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">E-mail</p>
                        <a href="mailto:info@lexjuris.dk" className="text-sm text-slate-500 hover:text-cyan-600 transition-colors">
                          info@lexjuris.dk
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.08}>
                <div className="bg-slate-50 rounded-2xl p-7 sm:p-8">
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-cyan-600" />
                    Åbningstider
                  </h2>
                  <div className="space-y-3">
                    {[
                      { day: 'Mandag – Fredag', hours: 'Efter aftale' },
                      { day: 'Lørdag – Søndag', hours: 'Lukket' },
                    ].map((row) => (
                      <div key={row.day} className="flex justify-between text-sm">
                        <span className="text-slate-600">{row.day}</span>
                        <span className="text-slate-900 font-medium">{row.hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm text-slate-500 leading-relaxed">
                    Vi tilbyder også online møder, så du kan få juridisk hjælp uanset hvor i landet du befinder dig.
                  </p>
                </div>
              </AnimateOnScroll>

              <div className="grid grid-cols-2 gap-4">
                <AnimateOnScroll delay={0.16}>
                  <a
                    href="https://www.google.dk/maps/place/Gravene+2,+8800+Viborg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-slate-50 rounded-2xl p-6 hover:bg-cyan-50 transition-all h-full flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors">
                        Find os
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">Gravene 2, Viborg</p>
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-cyan-600">
                      Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.24}>
                  <Link
                    href="/gratis-samtale"
                    className="group bg-cyan-500 rounded-2xl p-6 hover:bg-cyan-400 transition-all h-full flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-white">
                        Book samtale
                      </h3>
                      <p className="mt-1 text-xs text-white/70">Gratis & uforpligtende</p>
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-white">
                      Book nu <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </AnimateOnScroll>
              </div>
            </div>

            {/* Right: Map */}
            <AnimateOnScroll delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2218.5!2d9.4031!3d56.4532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c85e8dd3c9e69%3A0x2f6e0e1a7f3a2b5c!2sGravene%202%2C%208800%20Viborg!5e0!3m2!1sda!2sdk!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LexJuris Advokatfirma, Gravene 2, 8800 Viborg"
                  className="w-full h-full"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
