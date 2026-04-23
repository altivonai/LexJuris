import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { services } from '@/data/services';

interface BentoGridProps {
  maxItems?: number;
  large?: boolean;
}

export default function BentoGrid({ maxItems, large = false }: BentoGridProps) {
  const items = maxItems ? services.slice(0, maxItems) : services;

  return (
    <div className={`grid gap-4 sm:gap-5 ${
      large
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    }`}>
      {items.map((service, i) => {
        const isLarge = i < 2 && !large;
        return (
          <AnimateOnScroll key={service.slug} delay={i * 0.08}>
            <Link
              href={`/ydelser/${service.slug}`}
              className={`group relative bg-white rounded-2xl border border-slate-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1 flex flex-col h-full overflow-hidden ${
                isLarge && i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className={`${isLarge ? 'p-7 lg:p-8' : 'p-6'}`}>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-cyan-50 flex items-center justify-center mb-5 transition-colors">
                  <service.icon className="w-5 h-5 text-slate-500 group-hover:text-cyan-600 transition-colors" />
                </div>

                {/* Title */}
                <h3 className={`font-[family-name:var(--font-space-grotesk)] font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors ${
                  isLarge ? 'text-xl' : 'text-base'
                }`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm text-slate-500 leading-relaxed flex-1">
                  {service.shortDescription}
                </p>

                {/* Link */}
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-600 group-hover:text-cyan-500 transition-colors">
                  Læs mere <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </AnimateOnScroll>
        );
      })}
    </div>
  );
}
