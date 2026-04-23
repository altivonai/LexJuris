export interface TeamMember {
  name: string;
  title: string;
  email?: string;
  phone: string;
  mobile?: string;
  image: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: 'Anette Malthe Christiansen',
    title: 'Advokat',
    email: 'am@lexjuris.dk',
    phone: '70 70 71 22',
    mobile: '26 15 16 04',
    image: '/images/team/anette.jpg',
    bio: 'Anette driver LexJuris Advokatfirma og henvender sig til privatpersoner med juridiske emner som arv, skilsmisse, boligkøb og fremtidsfuldmagter, på en letforståelig måde. Din tryghed er hendes mål.',
  },
  {
    name: 'Bibi Nielsen',
    title: 'Sekretær',
    email: 'bn@lexjuris.dk',
    phone: '70 70 71 22',
    image: '/images/team/bibi.jpg',
    bio: 'Bibi sørger for at alt kører glat i LexJuris. Hun er dit første kontaktpunkt og hjælper med at koordinere din sag.',
  },
  {
    name: 'Sara Veronica Raimondi',
    title: 'Stud.jur.',
    phone: '70 70 71 22',
    image: '/images/team/sara.jpg',
    bio: 'Sara er jurastuderende og assisterer med sagsbehandling og juridisk research hos LexJuris.',
  },
];
