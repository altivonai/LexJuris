import { Star } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { testimonials } from '@/data/testimonials';

interface TestimonialSectionProps {
  title?: string;
}

export default function TestimonialSection({
  title = 'Hvad siger vores klienter',
}: TestimonialSectionProps) {
  return (
    <section className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-slate-900">
              {title}
            </h2>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 0.1}>
              <div className="relative bg-white rounded-2xl p-7 border border-slate-200 h-full flex flex-col hover:shadow-lg hover:shadow-slate-200/50 transition-shadow">
                {/* Large decorative quote mark */}
                <div className="absolute top-5 right-6 text-6xl font-serif text-slate-100 leading-none select-none">
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4 relative z-10">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-sm text-slate-600 leading-relaxed flex-1 relative z-10">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-5 pt-5 border-t border-slate-100 relative z-10">
                  <p className="font-medium text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{t.source}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
