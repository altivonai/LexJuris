import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Home, FileText, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { cities } from '@/data/cities';
import type { Metadata } from 'next';

interface Params {
  city: string;
}

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  return params.then(({ city: slug }) => {
    const city = cities.find((c) => c.slug === slug);
    if (!city) return { title: 'Ikke fundet' };
    return {
      title: `Advokat i ${city.name} – Testamente & Boligadvokat`,
      description: `LexJuris tilbyder juridisk rådgivning i ${city.name}. Testamente fra fast pris 2.495 kr. Køberrådgivning fra 5.800 kr. Gratis indledende samtale.`,
    };
  });
}

export default async function CityPage({ params }: { params: Promise<Params> }) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  return (
    <>
      <Hero
        title={`Advokat i ${city.name}`}
        highlightWord={city.name}
        subtitle={`LexJuris tilbyder professionel juridisk rådgivning i ${city.name}. Testamente, boligadvokat og meget mere, til faste lave priser.`}
        ctaText="Book gratis samtale"
        ctaHref="/gratis-samtale"
        secondaryCtaText="Ring: 70 70 71 22"
        secondaryCtaHref="tel:70707122"
        compact
      />

      {/* Services in this city */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">
              Juridiske ydelser i {city.name}
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Testamente card */}
            <AnimateOnScroll>
              <Link
                href="/ydelser/testamente"
                className="group bg-white rounded-2xl p-7 border border-slate-200 hover:border-amber-300 transition-all hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-amber-50 flex items-center justify-center mb-5 transition-colors">
                  <FileText className="w-5 h-5 text-slate-500 group-hover:text-amber-600 transition-colors" />
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                  Testamente advokat i {city.name}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">
                  Få hjælp til at oprette testamente der sikrer dine efterladte. Vi rådgiver om
                  arv, tvangsarv, ægtefællebeskyttelse og samlevertestamente.
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-amber-700">Fra kr. 2.495,-</span>
                  <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </AnimateOnScroll>

            {/* Boligadvokat card */}
            <AnimateOnScroll delay={0.08}>
              <Link
                href="/ydelser/koeberraadgivning"
                className="group bg-white rounded-2xl p-7 border border-slate-200 hover:border-amber-300 transition-all hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-amber-50 flex items-center justify-center mb-5 transition-colors">
                  <Home className="w-5 h-5 text-slate-500 group-hover:text-amber-600 transition-colors" />
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                  Boligadvokat i {city.name}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">
                  Tryg juridisk rådgivning gennem hele dit boligkøb. Vi gennemgår købsaftale,
                  skøde, servitutter og sikrer dine interesser.
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-amber-700">Fra kr. 5.800,-</span>
                  <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </AnimateOnScroll>
          </div>

          {/* All services link */}
          <AnimateOnScroll>
            <div className="mt-10 text-center">
              <Link
                href="/ydelser"
                className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-600 transition-colors"
              >
                Se alle vores ydelser <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Local info */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-slate-900 mb-4">
                Advokat i {city.name}, lokal ekspertise
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Leder du efter en advokat i {city.name}? LexJuris tilbyder professionel
                  juridisk rådgivning med fokus på privatpersoner. Uanset om du har brug for
                  hjælp til boligkøb, testamente, ægtepagt, fremtidsfuldmagt eller skilsmisse,
                  er vi klar til at hjælpe.
                </p>
                <p>
                  Vores hovedkontor ligger i Viborg, men vi betjener klienter i {city.name} og
                  omegn, både fysisk og via online møder. Du får altid direkte kontakt til
                  advokaten, faste lave priser og en gratis indledende samtale.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
