import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import AnimateOnScroll from '@/components/AnimateOnScroll';

import { cities } from '@/data/cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Byer vi dækker',
  description:
    'LexJuris dækker hele landet med juridisk rådgivning. Find din lokale advokat i Viborg, Aarhus, Aalborg, Silkeborg, Herning og mange flere byer.',
};

export default function ByerPage() {
  return (
    <>
      <Hero
        title="Byer vi dækker"
        subtitle="Hovedkontor i Viborg, men vi betjener klienter i hele Danmark. Find din lokale advokat."
        backgroundImage="/images/hero/family.jpg"
        compact
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city, i) => (
              <AnimateOnScroll key={city.slug} delay={i * 0.05}>
                <Link
                  href={`/byer/${city.slug}`}
                  className="group bg-white rounded-xl p-5 border border-slate-200 hover:border-amber-300 transition-all hover:shadow-lg hover:shadow-amber-500/5 hover:-translate-y-0.5 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-amber-50 flex items-center justify-center shrink-0 transition-colors">
                    <MapPin className="w-4 h-4 text-slate-500 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {city.name}
                      {city.slug === 'viborg' && (
                        <span className="ml-2 text-xs text-amber-700 font-normal">★ Hovedkontor</span>
                      )}
                    </h2>
                    <p className="text-xs text-slate-400">Testamente & Boligadvokat</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-slate-900 mb-4">
                Sådan fungerer det
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Alle sider er målrettet din by og dækker både testamente-udarbejdelse og
                  boligadvokat-bistand. Priserne er gennemskuelige med fast pris, og der er
                  ingen binding.
                </p>
                <p>
                  Vi tilbyder professionel juridisk rådgivning i hele landet, og det betyder,
                  at du kun er få klik fra tryg og kompetent juridisk bistand, uanset hvor du bor.
                  Vores hovedkontor ligger i Viborg, men vi betjener klienter overalt i Danmark.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
