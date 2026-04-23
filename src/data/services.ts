import {
  Home,
  FileText,
  Heart,
  Shield,
  Scale,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  title: string;
  slug: string;
  shortDescription: string;
  icon: LucideIcon;
  heroTitle: string;
  heroSubtitle: string;
  content: {
    intro: string;
    sections: { heading: string; text: string }[];
    pricing?: { item: string; description: string; price: string }[];
    faq: { question: string; answer: string }[];
    blogLinks: { title: string; url: string }[];
  };
}

export const services: Service[] = [
  {
    title: 'Køberrådgivning',
    slug: 'koeberraadgivning',
    shortDescription:
      'Tryg juridisk rådgivning gennem hele dit boligkøb. Vi gennemgår købsaftale, skøde, servitutter og sikrer dine interesser.',
    icon: Home,
    heroTitle: 'Køberrådgivning for boligkøb',
    heroSubtitle:
      'Undgå dyre fejl — få en erfaren boligadvokat ved din side fra købsaftale til nøgleoverlevering.',
    content: {
      intro:
        'Skal du købe bolig og har brug for køberrådgivning? Hos LexJuris hjælper vi dig sikkert igennem dit boligkøb med juridisk rådgivning, der er til at forstå. Du får ærlig rådgivning, fast pris, hurtig respons — og vi arbejder kun for dig.',
      sections: [
        {
          heading: 'Hvad gør en boligadvokat?',
          text: 'En boligadvokat repræsenterer udelukkende købers interesser. Vi gennemgår købsaftalen, forhandler med mægler, udarbejder og tinglyser skøde, laver refusionsopgørelse og rådgiver om finansiering. Hele vejen fra underskrift til nøgleoverlevering.',
        },
        {
          heading: 'Forløbet i dit boligkøb',
          text: 'Advokatforbeholdet indsættes i købsaftalen, så handlen først er bindende når vi har godkendt den. Vi gennemgår alle dokumenter, indhenter bankens godkendelse, skriver rådgiverbemærkninger og har en samtale med dig om betingelser for endelig godkendelse. Vi påser at sælgers hæftelser slettes før købesummen frigives.',
        },
        {
          heading: 'Hvorfor vælge LexJuris?',
          text: 'Du undgår dyre fejl og skjulte faldgruber. Du får tryghed og ro i maven hele vejen. Faste lave priser uden overraskelser. Vi gennemgår alle handlens dokumenter grundigt — og du ringer ikke til en stor organisation, men direkte til advokaten.',
        },
      ],
      pricing: [
        { item: 'Køberrådgivning', description: 'Enfamiliehus / Sommerhus / Lejlighed', price: '5.800,-' },
        { item: 'Køberrådgivning', description: 'Grund', price: '3.500,-' },
        { item: 'Selvsalg', description: 'Enfamiliehus / Sommerhus / Lejlighed', price: '8.600,-' },
        { item: 'Overdragelseserklæring', description: 'Ved skilsmisse / samlivsophør', price: '4.500,-' },
        { item: 'Familieoverdragelse', description: 'Enfamiliehus / Sommerhus / Lejlighed', price: '5.500,-' },
      ],
      faq: [
        {
          question: 'Hvad er forskellen på en boligadvokat og en ejendomsmægler?',
          answer: 'En boligadvokat repræsenterer udelukkende købers interesser og yder juridisk rådgivning. En ejendomsmægler arbejder for sælgeren og har til opgave at opnå den bedst mulige pris for sælgeren.',
        },
        {
          question: 'Hvornår bør jeg kontakte en køberrådgiver?',
          answer: 'Det anbefales at kontakte en køberrådgiver allerede inden underskrivelse af købsaftalen. Så kan du få rådgivning om forbehold og sikre dine interesser fra start.',
        },
        {
          question: 'Hvad indebærer tinglysning af skøde?',
          answer: 'Tinglysning af skøde er den juridiske registrering af ejerskiftet i tingbogen. Det sikrer din ret til ejendommen. LexJuris sørger for korrekt tinglysning som del af køberrådgivningen.',
        },
        {
          question: 'Kan hele forløbet klares digitalt?',
          answer: 'Ja. Hos LexJuris kan hele rådgivningsforløbet klares digitalt via mail, telefon og sikre dokumentplatforme. Du kan få juridisk hjælp uanset, hvor i landet du befinder dig.',
        },
      ],
      blogLinks: [
        { title: 'Alt om tinglysning af skøde ved boligkøb', url: 'https://lexjuris.dk/bolighandel/alt-om-tinglysning-af-skoede-ved-boligkoeb/' },
        { title: 'Hvad kan en advokat hjælpe med ved boligkøb', url: 'https://lexjuris.dk/bolighandel/hvad-kan-en-advokat-hjaelpe-med-ved-boligkoeb/' },
        { title: 'Advokatforbehold ved boligkøb — er det vigtigt?', url: 'https://lexjuris.dk/bolighandel/advokatforbehold-naar-du-koeber-bolig-er-det-vigtigt/' },
        { title: 'Boligkøbsguiden — 5 trin', url: 'https://lexjuris.dk/bolighandel/boligkoebsguiden/' },
      ],
    },
  },
  {
    title: 'Testamente & Arv',
    slug: 'testamente',
    shortDescription:
      'Få styr på arven og sikr dine efterladte. Vi opretter testamente, rådgiver om tvangsarv og arverækkefølge.',
    icon: FileText,
    heroTitle: 'Testamente & Arveret',
    heroSubtitle:
      'Sikr dine efterladte og dine ønsker — med et professionelt testamente, der er juridisk korrekt.',
    content: {
      intro:
        'Hos LexJuris får du hjælp til at oprette et testamente, der sikrer dine efterladte og dine ønsker. Vi rådgiver om arv og tvangsarv, særeje, ægtefællebeskyttelse og børnetestamenter. Fast pris fra 2.495 kr. inkl. moms.',
      sections: [
        {
          heading: 'Hvorfor oprette testamente?',
          text: 'Uden testamente bestemmer arveloven, hvem der arver dig. Kun personer i arveklasserne arver — ønsker du at tilgodese andre, kræver det et testamente. For samlevende er testamente helt afgørende, da I ellers ikke arver hinanden.',
        },
        {
          heading: 'Den mest udbredte misforståelse',
          text: '"Når man har boet sammen i 2 år, er man stillet som gift." Det er forkert — medmindre I opretter testamente. Mange tror fejlagtigt at samlevende automatisk arver hinanden. Det gør I ikke uden testamente.',
        },
        {
          heading: 'Hvad rådgiver vi om?',
          text: 'Arverækkefølge og arveklasser, tvangsarv, uskiftet bo med særbørn, udvidet samlevertestamente, ægtefællebeskyttelse, og hvordan pensionsordninger spiller ind i arvefordelingen.',
        },
      ],
      faq: [
        {
          question: 'Hvad koster det at oprette testamente?',
          answer: 'Vi tilbyder testamente fra fast pris 2.495 kr. inkl. moms. Kontakt os for et konkret tilbud.',
        },
        {
          question: 'Kan et barn gøres arveløs?',
          answer: 'Nej, livsarvinger (børn) har altid krav på tvangsarv — uanset kontakt eller ej. Tvangsarven er en fjerdedel af den legale arv.',
        },
        {
          question: 'Arver samlevende hinanden?',
          answer: 'Nej, ikke uden testamente. Samlevende skal oprette testamente for at arve hinanden. Uden testamente arver I intet efter hinanden.',
        },
      ],
      blogLinks: [
        { title: 'Arverækkefølgen — hvem modtager arv efter dig?', url: 'https://lexjuris.dk/testamente/arveraekkefoelgen/' },
        { title: 'Den mest udbredte misforståelse i arveret', url: 'https://lexjuris.dk/testamente/det-er-den-mest-udbredte-misforstaelse/' },
        { title: 'Testamente til særbørn og uskiftet bo', url: 'https://lexjuris.dk/testamente/testamente-til-saerboern/' },
        { title: 'Få styr på pensionsordningen', url: 'https://lexjuris.dk/testamente/faa-styr-paa-pensionsordningen/' },
      ],
    },
  },
  {
    title: 'Ægtepagt & Særeje',
    slug: 'aegtepagt',
    shortDescription:
      'Beskyt dine værdier med en ægtepagt. Vi rådgiver om særeje, fælleseje og de økonomiske konsekvenser.',
    icon: Heart,
    heroTitle: 'Ægtepagt & Særeje',
    heroSubtitle:
      'Sikr jeres økonomi med en ægtepagt — uanset om I er nygifte eller har været gift i mange år.',
    content: {
      intro:
        'En ægtepagt er en aftale mellem ægtefæller om, at visse værdier skal være særeje. Det kan beskytte dig økonomisk ved skilsmisse eller dødsfald. Hos LexJuris hjælper vi med at udfærdige og tinglyse din ægtepagt.',
      sections: [
        {
          heading: 'Hvad er en ægtepagt?',
          text: 'En ægtepagt er en juridisk aftale mellem ægtefæller, der bestemmer at visse aktiver holdes uden for fællesboet. Uden ægtepagt er alt fælleseje og deles ligeligt ved skilsmisse.',
        },
        {
          heading: 'Hvornår bør man oprette ægtepagt?',
          text: 'Det kan være relevant hvis en af jer ejer bolig, virksomhed, har arvet værdier eller har børn fra tidligere forhold. En ægtepagt kan oprettes både før og under ægteskabet.',
        },
        {
          heading: 'Typer af særeje',
          text: 'Fuldstændigt særeje, skilsmissesæreje, kombinationssæreje og sumsæreje. Vi rådgiver om hvilken type der passer til jeres situation og sikrer korrekt tinglysning.',
        },
      ],
      faq: [
        {
          question: 'Kan man oprette ægtepagt efter man er gift?',
          answer: 'Ja, en ægtepagt kan oprettes på ethvert tidspunkt under ægteskabet. Den skal underskrives af begge ægtefæller og tinglyses i Personbogen.',
        },
        {
          question: 'Hvad koster en ægtepagt?',
          answer: 'Kontakt os for en fast pris. Vi tilbyder altid gennemsigtige priser uden skjulte gebyrer.',
        },
      ],
      blogLinks: [],
    },
  },
  {
    title: 'Fremtidsfuldmagt',
    slug: 'fremtidsfuldmagt',
    shortDescription:
      'Bestem selv hvem der skal handle på dine vegne, hvis du bliver syg eller dement. Vi opretter din fremtidsfuldmagt.',
    icon: Shield,
    heroTitle: 'Fremtidsfuldmagt',
    heroSubtitle:
      'Sikr dig selv og din familie — bestem hvem der træffer beslutninger, hvis du ikke længere selv kan.',
    content: {
      intro:
        'En fremtidsfuldmagt sikrer, at du selv bestemmer, hvem der skal handle på dine vegne, hvis du en dag ikke længere kan. Uden fremtidsfuldmagt vil det være Familieretshuset der bestemmer. Hos LexJuris hjælper vi dig med at oprette en juridisk korrekt fremtidsfuldmagt.',
      sections: [
        {
          heading: 'Hvad er en fremtidsfuldmagt?',
          text: 'En fremtidsfuldmagt er et juridisk dokument, der giver en eller flere udpegede personer ret til at træffe beslutninger på dine vegne — typisk om økonomi og personlige forhold — hvis du på grund af sygdom eller svækket mental funktion ikke selv kan.',
        },
        {
          heading: 'Hvornår sættes den i kraft?',
          text: 'Fremtidsfuldmagten sættes i kraft af Familieretshuset, når fuldmagtsgiver ikke længere kan varetage sine forhold. Typisk på grund af demens, alvorlig sygdom eller lignende.',
        },
        {
          heading: 'Uden fuldmagt — ingen ret',
          text: 'Helt enkelt: Uden skriftlig fuldmagt har ingen ret til at foretage dispositioner på dine vegne. Det vil sige, at selv dine nærmeste børn ikke kan handle for dig uden en fuldmagt.',
        },
      ],
      faq: [
        {
          question: 'Hvad koster en fremtidsfuldmagt?',
          answer: 'Vi tilbyder fremtidsfuldmagt til fast pris. Kontakt os for et uforpligtende tilbud.',
        },
        {
          question: 'Hvem kan være fuldmægtig?',
          answer: 'Du kan udpege en eller flere fuldmægtige — typisk ægtefælle, børn eller andre du har tillid til. De skal være myndige.',
        },
        {
          question: 'Skal fremtidsfuldmagten tinglyses?',
          answer: 'Fremtidsfuldmagten skal registreres i Fremtidsfuldmagtsregisteret. Vi sørger for korrekt registrering.',
        },
      ],
      blogLinks: [
        { title: 'Fremtidsfuldmagten — sikrer dig selv og familien', url: 'https://lexjuris.dk/fremtidsfuldmagt/fremtidsfuldmagten-sikr-dig-selv-og-familien-foer-sygdom-og-demens/' },
        { title: 'Når fremtidsfuldmagten sættes i kraft', url: 'https://lexjuris.dk/fremtidsfuldmagt/naar-fremtidsfuldmagten-saettes-i-kraft/' },
      ],
    },
  },
  {
    title: 'Skilsmisse & Bodeling',
    slug: 'skilsmisse',
    shortDescription:
      'Juridisk bistand ved skilsmisse. Vi hjælper med bodeling, bopæl, samvær, ægtefællebidrag og det økonomiske opgør.',
    icon: Scale,
    heroTitle: 'Skilsmisse & Bodeling',
    heroSubtitle:
      'Professionel hjælp til at navigere skilsmissen — så du kan fokusere på fremtiden.',
    content: {
      intro:
        'En skilsmisse er både følelsesmæssigt og juridisk krævende. Hos LexJuris hjælper vi dig med bodeling, forældremyndighed, bopæl, samvær, ægtefællebidrag og det økonomiske opgør. Vi sørger for, at dine rettigheder bliver varetaget.',
      sections: [
        {
          heading: 'Bodeling og det økonomiske opgør',
          text: 'Jeres netto-fællesbo er jeres samlede nettoværdier. Alt skal opgøres — bolig, pension, opsparing, gæld. Vi hjælper med at sikre en retfærdig deling og forklarer reglerne, så du forstår din situation.',
        },
        {
          heading: 'Bopæl og samvær',
          text: 'Forældre med fælles forældremyndighed har automatisk delt bopæl de første 3 måneder. Vi rådgiver om samværsaftaler, bopælsret og hvad der er bedst for barnet — og for dig.',
        },
        {
          heading: 'Ægtefællebidrag',
          text: 'I visse tilfælde kan du have krav på ægtefællebidrag efter skilsmissen. Vi hjælper med at vurdere, om du har krav, hvor længe og hvor stort beløbet kan være.',
        },
      ],
      faq: [
        {
          question: 'Hvem har ret til huset ved skilsmisse?',
          answer: 'Huset er ofte det mest værdifulde aktiv. Hvem der har ret til at overtage det afhænger af flere faktorer. Vi rådgiver om dine muligheder.',
        },
        {
          question: 'Deles pensionsopsparinger?',
          answer: 'Nej, pensionsopsparinger deles ikke automatisk ved skilsmisse. Det er vigtigt at kende reglerne, så du ikke mister rettigheder.',
        },
      ],
      blogLinks: [
        { title: 'Hvem har ret til huset, når I skal skilles?', url: 'https://lexjuris.dk/skilsmisse-2/huset-naar-skal-skilles/' },
        { title: 'Deling af pensionsopsparinger', url: 'https://lexjuris.dk/skilsmisse-2/deling-af-pensionsopsparinger/' },
        { title: 'Har du krav på ægtefællebidrag?', url: 'https://lexjuris.dk/skilsmisse-2/har-du-krav-paa-aegtefaellebidrag/' },
        { title: 'Hvad betyder delt bopæl?', url: 'https://lexjuris.dk/privat/skilsmisse/hvad-betyder-delt-bopael/' },
      ],
    },
  },
  {
    title: 'Dødsbobehandling',
    slug: 'doedsbo',
    shortDescription:
      'Professionel hjælp til behandling af dødsbo. Vi bistår med skifteformen, boopgørelse, arveudlodning og kontakt til skifteretten.',
    icon: BookOpen,
    heroTitle: 'Dødsbobehandling',
    heroSubtitle:
      'Vi hjælper dig trygt og korrekt igennem dødsbobehandlingen — fra skifte til arveudlodning.',
    content: {
      intro:
        'Når et dødsfald rammer familien, er der mange juridiske forhold at tage stilling til. Hos LexJuris bistår vi arvinger og familier med behandling af dødsbo: kontakt til skifteretten, valg af skifteform, boopgørelse og arveudlodning.',
      sections: [
        {
          heading: 'Hvad er et dødsbo?',
          text: 'Når vi afgår ved døden, bliver vi til et "dødsbo". Det sker automatisk i det digitale system. Boet skal derefter skiftes — det vil sige, at formue og gæld skal gøres op og fordeles til arvingerne.',
        },
        {
          heading: 'Skifteformer',
          text: 'Der findes flere skifteformer: boudlæg, uskiftet bo, privat skifte og bobestyrerbo. Vi rådgiver om hvilken form der passer til situationen og guider dig igennem processen.',
        },
        {
          heading: 'Huset ved dødsfald',
          text: 'Boligen er ofte den største værdi. Vi hjælper med at afklare hvem der har ret til at blive boende, om boligen skal sælges, og hvordan værdien indgår i boopgørelsen.',
        },
      ],
      faq: [
        {
          question: 'Hvad koster dødsbobehandling?',
          answer: 'Prisen afhænger af boets kompleksitet. Kontakt os for en uforpligtende vurdering.',
        },
        {
          question: 'Kan jeg sidde i uskiftet bo?',
          answer: 'Ægtefæller har ret til uskiftet bo med fællesbørn. Med særbørn kræver det særbørnenes samtykke. Vi rådgiver om dine muligheder.',
        },
      ],
      blogLinks: [
        { title: 'Hvad sker der med huset ved dødsfald?', url: 'https://lexjuris.dk/doedsbo/hvad-sker-der-med-huset-ved-doedsfald/' },
        { title: 'Forstå skifte af dødsbo', url: 'https://lexjuris.dk/doedsbo/forstaa-skifte-af-doedsbo/' },
        { title: 'Skiftet ved din ægtefælles død', url: 'https://lexjuris.dk/doedsbo/skiftet-ved-din-aegtefaelles-doed/' },
      ],
    },
  },
];
