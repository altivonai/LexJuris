'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  highlightWord?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  tertiaryCtaText?: string;
  tertiaryCtaHref?: string;
  compact?: boolean;
  backgroundImage?: string;
}

export default function Hero({
  title,
  highlightWord,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  tertiaryCtaText,
  tertiaryCtaHref,
  compact = false,
  backgroundImage,
}: HeroProps) {
  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(highlightWord);
    if (parts.length < 2) return title;
    return (
      <>
        {parts[0]}
        <span className="text-gradient">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section
      className={`relative overflow-hidden ${
        compact ? 'py-16 sm:py-20' : 'py-16 sm:py-20 lg:py-24'
      } ${backgroundImage ? 'bg-slate-900' : 'bg-slate-50'}`}
    >
      {/* Background image */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-900/30 to-slate-900/50" />
        </>
      )}

      {/* Gradient mesh background — only when no image */}
      {!backgroundImage && (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/60 rounded-full blur-3xl" />
        </div>
      )}

      {/* Subtle grid pattern */}
      {!backgroundImage && (
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0f172a" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
      )}

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />

      <div className={`relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${compact ? 'text-center' : 'text-center sm:text-left'}`}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.1] tracking-tight ${
            backgroundImage ? 'text-white' : 'text-slate-900'
          } ${
            compact
              ? 'text-3xl sm:text-4xl lg:text-5xl'
              : 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'
          }`}
        >
          {renderTitle()}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed ${
              backgroundImage ? 'text-slate-300' : 'text-slate-500'
            } ${
              compact ? 'max-w-2xl mx-auto' : 'max-w-2xl'
            }`}
          >
            {subtitle}
          </motion.p>
        )}

        {(ctaText || secondaryCtaText || tertiaryCtaText) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`mt-8 sm:mt-10 flex flex-col gap-3 ${compact ? 'items-center' : 'items-center sm:items-start'}`}
          >
            <div className={`flex flex-col sm:flex-row gap-3 ${compact ? '' : 'items-center sm:items-start'}`}>
              {ctaText && ctaHref && (
                <Link
                  href={ctaHref}
                  className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:scale-[1.02] text-sm sm:text-base"
                >
                  {ctaText}
                </Link>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <a
                  href={secondaryCtaHref}
                  className={`font-medium px-7 py-3.5 rounded-lg transition-all text-sm sm:text-base border-2 ${
                    backgroundImage
                      ? 'border-white/30 text-white hover:border-amber-400 hover:text-amber-300'
                      : 'border-slate-300 text-slate-700 hover:border-amber-600 hover:text-amber-700'
                  }`}
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>
            {tertiaryCtaText && tertiaryCtaHref && (
              <Link
                href={tertiaryCtaHref}
                className={`font-medium px-7 py-3.5 rounded-lg transition-all text-sm sm:text-base border-2 ${
                  backgroundImage
                    ? 'border-amber-400 text-white hover:bg-amber-400/10'
                    : 'border-amber-600 text-amber-700 hover:bg-amber-50'
                }`}
              >
                {tertiaryCtaText}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
