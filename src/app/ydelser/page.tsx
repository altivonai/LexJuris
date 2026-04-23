import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ydelser – Juridisk rådgivning til private',
  description:
    'LexJuris tilbyder juridisk rådgivning inden for boligkøb, testamente, ægtepagt, fremtidsfuldmagt, skilsmisse og dødsbo. Faste priser og gratis indledende samtale.',
};

export default function YdelserPage() {
  return (
    <>
      <Hero
        title="Vores ydelser"
        subtitle="Vi tilbyder kompetent juridisk rådgivning til private, uanset om du har brug for hjælp til boligkøb, testamente, skilsmisse eller andet. Faste lave priser og gratis indledende samtale."
        compact
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BentoGrid large />
        </div>
      </section>
    </>
  );
}
