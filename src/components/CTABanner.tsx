import Link from 'next/link';
import Image from 'next/image';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  phoneText?: string;
  inverted?: boolean;
  backgroundImage?: string;
}

export default function CTABanner({
  title = 'Har du brug for juridisk rådgivning?',
  subtitle = 'Book en gratis indledende samtale. Vi hjælper dig videre — uforpligtende og til faste priser.',
  ctaText = 'Book gratis samtale',
  ctaHref = '/gratis-samtale',
  phoneText = 'Eller ring direkte: 70 70 71 22',
  inverted = false,
  backgroundImage,
}: CTABannerProps) {
  const hasImage = !!backgroundImage;

  return (
    <section className={`relative py-20 sm:py-24 overflow-hidden ${
      hasImage ? 'bg-slate-900' : inverted ? 'bg-amber-600' : 'bg-slate-50'
    }`}>
      {/* Background image */}
      {hasImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/80" />
        </>
      )}

      {/* Background accents — only when no image and not inverted */}
      {!hasImage && !inverted && (
        <>
          <div className="absolute top-0 left-1/3 w-72 h-72 bg-amber-100/60 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-amber-50/80 rounded-full blur-3xl" />
        </>
      )}

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold ${
          hasImage ? 'text-white' : inverted ? 'text-slate-950' : 'text-slate-900'
        }`}>
          {title}
        </h2>
        <p className={`mt-4 text-sm sm:text-base leading-relaxed ${
          hasImage ? 'text-slate-300' : inverted ? 'text-slate-800' : 'text-slate-500'
        }`}>
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href={ctaHref}
            className={`font-semibold px-7 py-3.5 rounded-lg transition-all hover:scale-[1.02] text-sm sm:text-base ${
              hasImage
                ? 'bg-amber-600 hover:bg-amber-500 text-white'
                : inverted
                  ? 'bg-slate-950 hover:bg-slate-800 text-white'
                  : 'bg-amber-600 hover:bg-amber-500 text-white'
            }`}
          >
            {ctaText}
          </Link>
          <a
            href="tel:70707122"
            className={`text-sm transition-colors ${
              hasImage
                ? 'text-slate-400 hover:text-amber-400'
                : inverted
                  ? 'text-white hover:text-slate-100'
                  : 'text-slate-400 hover:text-amber-700'
            }`}
          >
            {phoneText}
          </a>
        </div>
      </div>
    </section>
  );
}
