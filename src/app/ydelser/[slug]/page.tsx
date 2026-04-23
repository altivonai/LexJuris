import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, Phone, Mail } from 'lucide-react';
import Hero from '@/components/Hero';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';
import { services } from '@/data/services';
import type { Metadata } from 'next';

interface Params {
  slug: string;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = services.find((s) => s.slug === slug);
    if (!service) return { title: 'Ikke fundet' };
    return {
      title: service.heroTitle,
      description: service.content.intro.slice(0, 160),
    };
  });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Hero
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        ctaText="Book gratis samtale"
        ctaHref="/gratis-samtale"
        secondaryCtaText="Ring: 70 70 71 22"
        secondaryCtaHref="tel:70707122"
        compact
      />

      {/* Main content with sidebar */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-12">
            {/* Main content */}
            <div className="lg:w-2/3 space-y-8">
              {/* Intro */}
              <AnimateOnScroll>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {service.content.intro}
                </p>
              </AnimateOnScroll>

              {/* Content sections */}
              <div className="space-y-6">
                {service.content.sections.map((section, i) => (
                  <AnimateOnScroll key={i}>
                    <div className="bg-slate-50 rounded-2xl p-6 sm:p-8">
                      <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-slate-900 mb-3">
                        {section.heading}
                      </h2>
                      <p className="text-slate-600 leading-relaxed">{section.text}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              {/* Pricing */}
              {service.content.pricing && service.content.pricing.length > 0 && (
                <AnimateOnScroll>
                  <div>
                    <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-slate-900 mb-6">
                      Priser <span className="text-amber-700">(inkl. moms)</span>
                    </h2>
                    {/* Card-based pricing for all sizes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.content.pricing.map((p, i) => (
                        <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                          <p className="font-medium text-slate-900 text-sm">{p.item}</p>
                          <p className="text-xs text-slate-500 mt-1">{p.description}</p>
                          <p className="mt-3 font-[family-name:var(--font-space-grotesk)] font-bold text-amber-700">
                            kr. {p.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              )}
            </div>

            {/* Sticky sidebar */}
            <div className="lg:w-1/3 mt-10 lg:mt-0">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* CTA Card */}
                <AnimateOnScroll>
                  <div className="bg-amber-600 rounded-2xl p-7 text-center">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white mb-2">
                      Klar til at komme i gang?
                    </h3>
                    <p className="text-sm text-white/80 mb-6">
                      Gratis og uforpligtende indledende samtale.
                    </p>
                    <Link
                      href="/gratis-samtale"
                      className="block bg-white hover:bg-slate-50 text-amber-700 font-semibold text-base px-6 py-4 rounded-lg transition-all hover:scale-[1.02] w-full"
                    >
                      Book gratis samtale
                    </Link>
                    <div className="space-y-2">
                      <a
                        href="tel:70707122"
                        className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        70 70 71 22
                      </a>
                      <a
                        href="mailto:info@lexjuris.dk"
                        className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        info@lexjuris.dk
                      </a>
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* Related blog links */}
                {service.content.blogLinks.length > 0 && (
                  <AnimateOnScroll>
                    <div className="bg-slate-50 rounded-2xl p-6">
                      <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-slate-900 mb-4">
                        Relaterede artikler
                      </h4>
                      <div className="space-y-3">
                        {service.content.blogLinks.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-2 text-sm text-slate-600 hover:text-amber-700 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 shrink-0 mt-0.5 text-slate-400 group-hover:text-amber-600" />
                            <span>{link.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </AnimateOnScroll>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.content.faq.length > 0 && (
        <section className="py-20 sm:py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-slate-900 mb-10 text-center">
                Ofte stillede spørgsmål
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <FAQAccordion items={service.content.faq} />
            </AnimateOnScroll>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
