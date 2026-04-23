import Hero from '@/components/Hero';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Videos',
  description: 'Se vores videoer med juridisk vejledning og råd fra LexJuris Advokatfirma.',
};

const videos = [
  {
    id: 'aa2Prqg0WRo',
    title: 'Juridisk vejledning',
    description: 'Få indsigt i vigtige juridiske emner der kan hjælpe dig videre.',
  },
  {
    id: 'LhFsDbSFeiw',
    title: 'Ekspertvejledning',
    description: 'Praktiske råd og vejledning fra vores erfarne advokater.',
  },
  {
    id: 'HaDYACtc5k8',
    title: 'Juridisk rådgivning',
    description: 'Lær mere om dine muligheder og rettigheder.',
  },
];

export default function VideosPage() {
  return (
    <>
      <Hero
        title="Videoer"
        subtitle="Se vores videoer med juridisk vejledning og praktiske råd fra LexJuris."
        compact
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((video, i) => (
              <AnimateOnScroll key={video.id} delay={i * 0.1}>
                <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-200 transition-all duration-300 hover:-translate-y-1">
                  {/* YouTube embed */}
                  <div className="aspect-video relative bg-slate-900">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  {/* Video info */}
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-slate-900">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Info section */}
          <AnimateOnScroll delay={0.3}>
            <div className="mt-16 bg-slate-50 rounded-2xl p-8 text-center border border-slate-200">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-slate-900">
                Har du spørgsmål?
              </h3>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Hvis du har spørgsmål til noget af det, du har set i vores videoer, er du altid
                velkommen til at kontakte os for en uforpligtende samtale.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:70707122"
                  className="border-2 border-slate-300 text-slate-700 hover:border-amber-600 hover:text-amber-700 font-medium text-sm px-6 py-3 rounded-lg transition-colors"
                >
                  Ring 70 70 71 22
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
