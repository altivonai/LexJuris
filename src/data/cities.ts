export interface City {
  name: string;
  slug: string;
  testamenteUrl?: string;
  boligadvokatUrl?: string;
}

export const cities: City[] = [
  { name: 'Viborg', slug: 'viborg', testamenteUrl: 'https://lexjuris.dk/testamente-advokat-i-viborg', boligadvokatUrl: 'https://lexjuris.dk/privat/koeberraadgivning/boligadvokat-viborg/' },
  { name: 'Aarhus', slug: 'aarhus', testamenteUrl: 'https://lexjuris.dk/testamente-advokat-i-aarhus/', boligadvokatUrl: 'https://lexjuris.dk/boligadvokat-i-aarhus' },
  { name: 'Aalborg', slug: 'aalborg', testamenteUrl: 'https://lexjuris.dk/testamente-advokat-i-aalborg', boligadvokatUrl: 'https://lexjuris.dk/boligadvokat-i-aalborg' },
  { name: 'Silkeborg', slug: 'silkeborg', testamenteUrl: 'https://lexjuris.dk/testamente-advokat-i-silkeborg', boligadvokatUrl: 'https://lexjuris.dk/boligadvokat-i-silkeborg' },
  { name: 'Herning', slug: 'herning', testamenteUrl: 'https://lexjuris.dk/testamente-advokat-i-herning', boligadvokatUrl: 'https://lexjuris.dk/boligadvokat-i-herning' },
  { name: 'Randers', slug: 'randers', testamenteUrl: 'https://lexjuris.dk/testamente-advokat-i-randers', boligadvokatUrl: 'https://lexjuris.dk/boligadvokat-i-randers' },
  { name: 'Hobro', slug: 'hobro', testamenteUrl: 'https://lexjuris.dk/testamente-advokat-i-hobro', boligadvokatUrl: 'https://lexjuris.dk/bolig-advokat-i-hobro/' },
  { name: 'Holstebro', slug: 'holstebro', testamenteUrl: 'https://lexjuris.dk/testamente-advokat-i-holstebro', boligadvokatUrl: 'https://lexjuris.dk/boligadvokat-i-holstebro' },
  { name: 'Skive', slug: 'skive', testamenteUrl: 'https://lexjuris.dk/testamente-i-skive', boligadvokatUrl: 'https://lexjuris.dk/boligadvokat-i-skive' },
  { name: 'Ikast', slug: 'ikast', testamenteUrl: 'https://lexjuris.dk/testamente-advokat-i-ikast', boligadvokatUrl: 'https://lexjuris.dk/boligadvokat-i-ikast' },
  { name: 'Bjerringbro', slug: 'bjerringbro', testamenteUrl: 'https://lexjuris.dk/testamente-advokat-i-bjerringbro', boligadvokatUrl: 'https://lexjuris.dk/boligadvokat-i-bjerringbro' },
  { name: 'Struer', slug: 'struer', testamenteUrl: 'https://lexjuris.dk/testamente-advokat-i-struer', boligadvokatUrl: 'https://lexjuris.dk/boligadvokat-i-struer' },
];
