import Link from 'next/link';
import Image from 'next/image';
import { Phone, Users, BadgeCheck, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTABanner from '@/components/CTABanner';
import StatsStrip from '@/components/StatsStrip';
import ProcessSteps from '@/components/ProcessSteps';
import BentoGrid from '@/components/BentoGrid';
import TestimonialSection from '@/components/TestimonialSection';
import Hero from '@/components/Hero';
import { cities } from '@/data/cities';

const blogPreviews = [
  {
    title: 'Alt om tinglysning af skøde ved boligkøb',
    category: 'Bolighandel',
    url: 'https://lexjuris.dk/bolighandel/alt-om-tinglysning-af-skoede-ved-boligkoeb/',
    image: '/images/blog/tinglysning.png',
  },
  {
    title: 'Hvad kan en advokat hjælpe med ved boligkøb?',
    category: 'Bolighandel',
    url: 'https://lexjuris.dk/bolighandel/hvad-kan-en-advokat-hjaelpe-med-ved-boligkoeb/',
    image: '/images/blog/advokat-boligkoeb.png',
  },
  {
    title: 'Hvad sker der med huset ved dødsfald?',
    category: 'Dødsbo',
    url: 'https://lexjuris.dk/doedsbo/hvad-sker-der-med-huset-ved-doedsfald/',
    image: '/images/blog/huset-doedsfald.png',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Erfaren advokat. Hele landet. Faste priser."
        highlightWord="Faste priser."
        subtitle="Det lille advokatfirma i Viborg, hvor du er i centrum. Direkte kontakt til advokaten, gennemsigtige priser og gratis indledende samtale."
        ctaText="Book gratis samtale"
        ctaHref="/gratis-samtale"
        secondaryCtaText="Ring: 70 70 71 22"
        secondaryCtaHref="tel:70707122"
      />

      {/* Office image with overlapping text */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="flex flex-col lg:flex-row gap-8 items-center px-4 sm:px-6 lg:px-8">
          {/* Text box - 25% width, overlaps on desktop */}
          <div className="w-full lg:w-1/4 relative z-10 lg:-mr-16">
            <div className="bg-white rounded-2xl p-8 shadow-2xl shadow-slate-900/10 border border-slate-100">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-slate-900">
                Velkommen til LexJuris
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                Dit lille advokatfirma i hjertet af Viborg. Vi tror på, at juridisk rådgivning skal være tilgængelig, 
                forståelig og til en fair pris.
              </p>
              <a
                href="/om-os"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-600 hover:text-cyan-500 transition-colors"
              >
                Læs mere <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Image - 75% width */}
          <div className="w-full lg:w-3/4 h-64 sm:h-80 lg:h-96 relative overflow-hidden rounded-2xl bg-slate-100">
            <img
              src="/images/hero/office-entrance.jpg"
              alt="LexJuris kontor, Gravene 2, Viborg"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip />

      {/* Services BentoGrid */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-slate-900">
                Vores specialer
              </h2>
              <p className="mt-3 text-slate-500 max-w-xl mx-auto">
                Juridisk rådgivning til private — skræddersyet til din situation.
              </p>
            </div>
          </AnimateOnScroll>
          <BentoGrid />
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* About the Lawyer */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="bg-slate-50 rounded-3xl overflow-hidden md:flex">
              <div className="md:w-2/5 relative aspect-[4/3] md:aspect-auto min-h-[300px]">
                <Image
                  src="/images/team/anette.jpg"
                  alt="Anette Malthe Christiansen — Advokat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 sm:p-10 md:p-12 md:w-3/5 flex flex-col justify-center">
                <p className="text-sm font-medium text-cyan-600 uppercase tracking-wide mb-2">Mød advokaten</p>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-slate-900">
                  Anette Malthe Christiansen
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Du ringer ikke til en stor organisation, men direkte til mig. Kort sagt: Din tryghed er mit mål.
                  Jeg oversætter det svære og peger på det vigtige, så du ved, hvad du skriver under på.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/gratis-samtale"
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-lg transition-all hover:scale-[1.02]"
                  >
                    Book gratis samtale
                  </Link>
                  <a
                    href="tel:70707122"
                    className="border-2 border-slate-300 text-slate-700 hover:border-cyan-500 hover:text-cyan-600 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Ring: 70 70 71 22
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Cities preview */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-slate-900">
              Vi dækker hele landet
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Hovedkontor i Viborg, men vi betjener klienter overalt i Danmark — fysisk og online.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/byer/${city.slug}`}
                  className="px-4 py-2 rounded-lg bg-slate-100 text-sm font-medium text-slate-700 hover:bg-cyan-50 hover:text-cyan-700 transition-colors"
                >
                  {city.name}
                  {city.slug === 'viborg' && <span className="ml-1 text-cyan-500">★</span>}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/byer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-600 hover:text-cyan-500 transition-colors"
              >
                Se alle byer <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-slate-900">
                Seneste blogindlæg
              </h2>
              <p className="mt-3 text-slate-500">
                Juridisk viden — letforståeligt og gratis.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPreviews.map((post, i) => (
              <AnimateOnScroll key={post.url} delay={i * 0.08}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1 h-full flex flex-col overflow-hidden"
                >
                  <div className="aspect-[16/9] relative bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {post.title}
                    </h3>
                    <span className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-600">
                      Læs på lexjuris.dk <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
