export const HEADCOUNT = {
  chart: { type:'bar', labels:['Jan 25','Apr 25','Jul 25','Okt 25','Dez 25'], datasets:[
    {label:'Engineering / Product',data:[3,3,4,4,4],color:'#0B211F'},
    {label:'Sales',data:[2,2,2,2,2],color:'#00D9C6'},
    {label:'Customer Success',data:[1,1,2,2,2],color:'#7CEFE6'},
    {label:'Marketing',data:[1,1,1,1,1],color:'#FF7A3D'},
    {label:'CEO / Ops',data:[1,1,1,1,1],color:'#FF9A66'},
  ]},
  headers: ['Bereich','Jan 25','Apr 25','Jul 25','Okt 25','Dez 25','Δ','Personalkosten p. a.'],
  rows: [
    ['Engineering / Product','3','3','4','4','4','+1','196.000 €'],
    ['Sales','2','2','2','2','2','0','124.000 €'],
    ['Customer Success','1','1','2','2','2','+1','82.000 €'],
    ['Marketing','1','1','1','1','1','0','55.000 €'],
    ['CEO / Ops','1','1','1','1','1','0','55.000 €'],
    ['Gesamt','8','8','10','10','10','+2','490.000 €'],
  ],
  note: { title: 'Einordnung der Personalkosten', variant: 'info', paragraphs: [
    'Bei einem Ø Personalbestand von 9 FTE ergeben sich durchschnittliche Arbeitgeber-Gesamtkosten von 54.400 € je FTE.',
    'Der Personalaufwand macht 76 % des Gesamtaufwands aus. Das ist für ein SaaS-Unternehmen dieser Größe normal.',
  ]},
};

export const HR = {
  headers: ['Kennzahl','2025','2024','Benchmark','Status'],
  rows: [
    ['Ø Personalbestand','9 FTE','7 FTE','—','—'],
    ['Zugänge','4','3','—','—'],
    ['Abgänge','2','1','—','—'],
    ['Fluktuationsrate','22 %','14 %','< 10 %','🔴'],
    ['Ø Arbeitgeberkosten je FTE','54.400 €','52.000 €','—','—'],
    ['Personalaufwand gesamt','490.000 €','364.000 €','—','—'],
    ['Remote-Anteil','60 %','50 %','flexibel','—'],
    ['Offene Stellen zum Stichtag','2','1','0','🔴'],
    ['Time-to-Hire','68 Tage','54 Tage','< 45 Tage','🔴'],
  ],
  note: { title: 'Fluktuation von 22 % ist bei zehn Personen ein echtes Risiko', variant: 'warning', paragraphs: [
    'Bei einem Team dieser Größe bedeutet jeder Abgang den Verlust eines erheblichen Anteils des Gesamtwissens.',
    'Beide Abgänge 2025 betrafen das Engineering — dieselbe Abteilung, in der zwei Stellen unbesetzt bleiben.',
  ]},
};

export const TEAM = {
  headers: ['Bereich','FTE','Verantwortung','Engpass','Priorität'],
  rows: [
    ['Engineering / Product','4','Plattform, KI-Scoring-Engine, Integrationen','Zwei Stellen unbesetzt','🔴 kritisch'],
    ['Sales','2','Demos, Angebote, Abschluss, Bestandsbetreuung','Kapazität ausgereizt','🟡 hoch'],
    ['Customer Success','2','Onboarding, Aktivierung, Support, Upselling','Abschlussquote 74 %, TTV 11 Tage','🔴 kritisch'],
    ['Marketing','1','Content, LinkedIn, SEO, Webinare, Newsletter','Eine Person für fünf Kanäle','🟡 hoch'],
    ['CEO / Ops','1','Strategie, Finanzen, Recht, Investorenbeziehungen','Anschlussfinanzierung kommt zusätzlich hinzu','🟡 hoch'],
  ],
  note: { title: 'Kritische Abhängigkeit: der CTO', variant: 'warning', paragraphs: [
    'Die KI-Scoring-Engine ist das einzige echte Differenzierungsmerkmal des Produkts. Die Scoring-Logik ist außerhalb des Kopfes des CTO nicht dokumentiert.',
    'Sofortmaßnahme für Q1 2026: strukturierter Wissenstransfer und vollständige technische Dokumentation der Scoring-Logik.',
  ]},
};
