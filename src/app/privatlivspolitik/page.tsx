import Hero from '@/components/Hero';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie- og privatlivspolitik',
  description:
    'Cookie- og privatlivspolitik for LexJuris Advokatfirma. Læs om hvordan vi indsamler og behandler dine personoplysninger.',
};

export default function PrivatlivspolitikPage() {
  return (
    <>
      <Hero title="Cookie- og privatlivspolitik" compact />

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="prose prose-sm sm:prose-base max-w-none text-slate-600 space-y-8">
              <div className="bg-slate-50 rounded-2xl p-7 sm:p-10 space-y-8">
                <div>
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-slate-900 mb-3">
                    Introduktion
                  </h2>
                  <p className="leading-relaxed">
                    Når du besøger vores website indsamles der oplysninger om dig, som bruges til at
                    tilpasse og forbedre vores indhold og til at øge værdien af de annoncer, der
                    vises på siden. Hvis du ikke ønsker, at der indsamles oplysninger, bør du slette
                    dine cookies og undlade videre brug af websitet.
                  </p>
                </div>

                <div>
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-slate-900 mb-3">
                    Cookies
                  </h2>
                  <p className="leading-relaxed">
                    Websitet anvender &ldquo;cookies&rdquo;, der er en tekstfil, som gemmes på din computer,
                    mobil el. tilsvarende med det formål at genkende den, huske indstillinger, udføre
                    statistik og målrette annoncer. Cookies kan ikke indeholde skadelig kode som
                    f.eks. virus.
                  </p>
                  <p className="mt-3 leading-relaxed">
                    Hvis du sletter eller blokerer cookies vil annoncer kunne blive mindre relevante
                    for dig og optræde hyppigere. Du kan desuden risikere at websitet ikke fungerer
                    optimalt samt at der er indhold, du ikke kan få adgang til.
                  </p>
                </div>

                <div>
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-slate-900 mb-3">
                    Generelt
                  </h2>
                  <p className="leading-relaxed">
                    Personoplysninger er alle slags informationer, der i et eller andet omfang kan
                    henføres til dig. Når du benytter vores website indsamler og behandler vi en
                    række sådanne informationer. Det sker f.eks. ved alm. tilgang af indhold, hvis du
                    tilmelder dig vores nyhedsbrev, eller foretager køb via websitet.
                  </p>
                  <p className="mt-3 leading-relaxed">
                    Vi indsamler og behandler typisk følgende typer af oplysninger: Et unikt ID og
                    tekniske oplysninger om din computer, tablet eller mobiltelefon, dit IP-nummer,
                    geografisk placering, samt hvilke sider du klikker på. I det omfang du selv giver
                    eksplicit samtykke hertil behandles desuden: Navn, telefonnummer, e-mail og adresse.
                  </p>
                </div>

                <div>
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-slate-900 mb-3">
                    Sikkerhed
                  </h2>
                  <p className="leading-relaxed">
                    Vi har truffet tekniske og organisatoriske foranstaltninger mod, at dine
                    oplysninger hændeligt eller ulovligt bliver slettet, offentliggjort, fortabt,
                    forringet eller kommer til uvedkommendes kendskab, misbruges eller i øvrigt
                    behandles i strid med lovgivningen.
                  </p>
                </div>

                <div>
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-slate-900 mb-3">
                    Formål
                  </h2>
                  <p className="leading-relaxed">
                    Oplysningerne bruges til at identificere dig som bruger og vise dig relevante
                    annoncer, at registrere dine køb og betalinger, samt at kunne levere de
                    services, du har efterspurgt. Herudover anvender vi oplysningerne til at
                    optimere vores services og indhold.
                  </p>
                </div>

                <div>
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-slate-900 mb-3">
                    Periode for opbevaring
                  </h2>
                  <p className="leading-relaxed">
                    Oplysningerne opbevares i det tidsrum, der er tilladt i henhold til
                    lovgivningen, og vi sletter dem, når de ikke længere er nødvendige.
                  </p>
                </div>

                <div>
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-slate-900 mb-3">
                    Indsigt og klager
                  </h2>
                  <p className="leading-relaxed">
                    Du har ret til at få oplyst, hvilke personoplysninger vi behandler om dig. Du
                    kan desuden til enhver tid gøre indsigelse mod, at oplysninger anvendes. Du kan
                    også tilbagekalde dit samtykke til, at der bliver behandlet oplysninger om dig.
                    Henvendelse herom kan ske til:{' '}
                    <a href="mailto:info@lexjuris.dk" className="text-cyan-600 hover:text-cyan-500 transition-colors">
                      info@lexjuris.dk
                    </a>
                    . Hvis du vil klage over vores behandling af dine personoplysninger, har du
                    mulighed for at tage kontakt til Datatilsynet.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-slate-900 mb-3">
                    Udgiver
                  </h2>
                  <p className="leading-relaxed">
                    LexJuris Advokatfirma<br />
                    Gravene 2<br />
                    8800 Viborg<br />
                    Telefon:{' '}
                    <a href="tel:70707122" className="text-cyan-600 hover:text-cyan-500 transition-colors">
                      70 70 71 22
                    </a>
                    <br />
                    Email:{' '}
                    <a href="mailto:info@lexjuris.dk" className="text-cyan-600 hover:text-cyan-500 transition-colors">
                      info@lexjuris.dk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
