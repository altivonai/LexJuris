export interface Testimonial {
  name: string;
  text: string;
  source: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rafael Sabia Sauerberg',
    text: 'Mit første boligkøb var en succes. Tak til Anette for god kommunikation og sparring. Kæmpe anbefaling herfra.',
    source: 'Trustpilot',
  },
  {
    name: 'Dorte Brandi',
    text: 'Dygtig og effektiv. Vi har anvendt advokat Anette Malthe og kunne vi give 10 stjerner fik hun det. Vi benyttede hendes professionelle advokatbistand ved en bolighandel. Mange tak.',
    source: 'Trustpilot',
  },
  {
    name: 'Filine Jannet Emily Friang',
    text: 'Professionel hjælp ved køb af sommerhus. Som førstegangskøber af et ældre sommerhus med flere udfordringer, havde jeg virkelig brug for at kunne stille spørgsmål til en professionel. Det fik jeg i dén grad opfyldt og det var en optimal ydelse. Jeg vender helt sikkert tilbage.',
    source: 'Trustpilot',
  },
];
