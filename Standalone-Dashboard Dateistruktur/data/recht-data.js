export const SATZUNG = {
  paragraphs: [
    { title: '§ 1 Firma, Sitz und Geschäftsjahr', text: 'Die Gesellschaft führt die Firma LeadPilot GmbH. Der Sitz der Gesellschaft ist Leipzig. Die Geschäftsanschrift lautet: Augustusplatz 9, 04109 Leipzig. Das Geschäftsjahr ist das Kalenderjahr.' },
    { title: '§ 2 Gegenstand des Unternehmens', text: 'Entwicklung, Vertrieb, Bereitstellung und Betrieb einer cloudbasierten SaaS-Plattform für KI-gestütztes Lead-Management, Vertriebsautomatisierung und CRM-Lösungen.' },
    { title: '§ 3 Stammkapital und Geschäftsanteile', text: 'Das Stammkapital beträgt 25.000,00 EUR. Marc Pönisch und Tobias Heine übernehmen je einen Geschäftsanteil im Nennwert von 12.500,00 EUR. Die Einlagen sind in Geld zu erbringen.' },
    { title: '§ 4 Geschäftsführung und Vertretung', text: 'Zu den ersten Geschäftsführern werden bestellt: Marc Pönisch (CEO) und Tobias Heine (CTO). Sie sind jeweils einzelvertretungsberechtigt und von den Beschränkungen des § 181 BGB befreit.' },
  ],
  signature: 'Leipzig, den 21. Juli 2022 — Marc Pönisch (Geschäftsführer), Tobias Heine (Geschäftsführer)',
};

export const GESELLSCHAFTER = {
  headers: ['Lfd. Nr.','Gesellschafter','Nennbetrag','Anteile','Anteil'],
  rows: [
    ['1','Pönisch, Marc, Leipzig','12.500,00 €','Nr. 1','40,00 %'],
    ['2','Heine, Tobias, Leipzig','12.500,00 €','Nr. 2','40,00 %'],
    ['3','Technologiegründerfonds Sachsen GmbH & Co. KG, Leipzig','3.906,00 €','Nr. 3','12,50 %'],
    ['4','High-Tech Gründerfonds Management GmbH, Bonn','1.563,00 €','Nr. 4','5,00 %'],
    ['5','Business Angels (zwei natürliche Personen)','781,00 €','Nr. 5–6','2,50 %'],
    ['','Gesamt','31.250,00 €','','100,00 %'],
  ],
  note: { title: 'Erläuterungen', variant: 'info', paragraphs: [
    'Das Stammkapital betrug bei Gründung 25.000 €, hälftig übernommen von den beiden Gründern.',
    'Mit Beschluss der Gesellschafterversammlung im Q1 2024 wurde das Stammkapital um 6.250 € auf 31.250 € erhöht.',
    'Die neuen Anteile wurden gegen Bareinlage zuzüglich Aufgeld übernommen; das Gesamtvolumen der Runde beträgt 950.000 €.',
    'Das Wandeldarlehen der Business Angels über 250.000 € aus Mai 2023 wurde im Zuge der Runde gewandelt.',
  ]},
  noteWarn: { title: 'Warum nicht Bayern Kapital', variant: 'warning', paragraphs: [
    'Eine frühere Fassung nannte Bayern Kapital als Investor einer Series A über 3,5 Mio. €. Das ist nicht haltbar: Bayern Kapital investiert mandatsgebunden nur in Unternehmen mit Sitz in Bayern — LeadPilot sitzt in Leipzig.',
    'Der Technologiegründerfonds Sachsen und der High-Tech Gründerfonds investieren dagegen real in genau dieses Profil, diese Phase und diese Region.',
  ]},
};

export const HANDELSREGISTER = {
  intro: 'Musteranmeldung einer neu errichteten GmbH an das Amtsgericht Leipzig — Registergericht, Bernhard-Göring-Straße 64, 04275 Leipzig.',
  items: [
    'Firma und Sitz: LeadPilot GmbH, Sitz Leipzig, Anschrift Augustusplatz 9, 04109 Leipzig',
    'Gegenstand: SaaS-Plattform für KI-gestütztes Lead-Management, Vertriebsautomatisierung und CRM-Lösungen',
    'Stammkapital: 25.000,00 EUR',
    'Vertretungsbefugnis: Marc Pönisch und Tobias Heine, jeweils einzelvertretungsberechtigt',
    'Geschäftsführer-Versicherung: keine Bestellungshindernisse, Einlagen vollständig bewirkt',
    'Anlagen: Gesellschaftsvertrag vom 21. Juli 2022, Bestellungsurkunde, Gesellschafterliste',
  ],
  signature: 'Leipzig, den 21. Juli 2022 — Marc Pönisch (Geschäftsführer), Tobias Heine (Geschäftsführer)',
};

export const GF_VERTRAG = {
  intro: 'Zwischen der LeadPilot GmbH, Augustusplatz 9, 04109 Leipzig, und Herrn Marc Pönisch, wohnhaft in Leipzig.',
  cards: [
    { title: '§ 1–3 Bestellung, Dienstzeit, Arbeitszeit', items: [
      'Marc Pönisch ist seit 2022 Geschäftsführer (CEO), einzelvertretungsberechtigt und von § 181 BGB befreit.',
      'Dienstverhältnis seit 21. Juli 2022, unbefristet. Kündigungsfrist 6 Monate zum Quartalsende.',
      'Volle Arbeitskraft für die Gesellschaft; Nebentätigkeiten bedürfen der Zustimmung der Gesellschafterversammlung.',
    ]},
    { title: '§ 4–7 Vergütung, Urlaub, Wettbewerbsverbot', items: [
      'Festes Jahresgehalt in zwölf Monatsraten; Tantieme jährlich durch Gesellschafterbeschluss.',
      '30 Arbeitstage bezahlter Urlaub pro Jahr; Lohnfortzahlung 6 Wochen bei Krankheit.',
      'Wettbewerbsverbot während der Vertragsdauer; nachvertragliches Verbot nur gegen Karenzentschädigung.',
    ]},
  ],
  signature: 'Leipzig, den 21. Juli 2022 — LeadPilot GmbH, vertreten durch die Gesellschafterversammlung; Marc Pönisch (Geschäftsführer)',
};

export const MIETVERTRAG = {
  headers: ['Merkmal','Angabe'],
  rows: [
    ['Vermieterin','Augustusplatz Immobilien Leipzig GmbH & Co. KG, Katharinenstraße 5, 04109 Leipzig'],
    ['Mieterin','LeadPilot GmbH, vertreten durch Marc Pönisch (Geschäftsführer)'],
    ['Mietobjekt','Büroflächen, 3. OG, Augustusplatz 9, ca. 210 m², zzgl. 2 Tiefgaragenstellplätze'],
    ['Mietbeginn','01.09.2022'],
    ['Festlaufzeit','5 Jahre, bis 31.08.2027, 2 Optionen à 24 Monate'],
    ['Nettokaltmiete','2.850,00 €/Monat (14,25 €/m²)'],
    ['Nebenkosten','316,67 €/Monat Vorauszahlung'],
    ['Stellplätze','150,00 €/Monat (2 × 75,00 €)'],
    ['Gesamtbelastung','3.316,67 €/Monat = 39.800,00 €/Jahr'],
    ['Kaution','8.550,00 € (3 Nettokaltmieten)'],
  ],
  cards: [
    { title: '§ 1–5 Mietgegenstand, Mietzeit, Miete, Wertsicherung, Kaution', items: [
      'Büroflächen 3. OG, ca. 210 m², plus 2 Tiefgaragenstellplätze.',
      'Mietzeit 01.09.2022 bis 31.08.2027, zweimaliges Optionsrecht auf je 24 Monate.',
      'Nettokaltmiete 2.850,00 €/Monat zzgl. Nebenkosten und Stellplätzen.',
      'Wertsicherung an den Verbraucherpreisindex gekoppelt.',
      'Kaution: drei Nettokaltmieten auf gesondertem Kautionskonto.',
    ]},
    { title: '§ 6–11 Nutzung, Instandhaltung, Versicherung, Schlussbestimmungen', items: [
      'Nutzung ausschließlich zu Bürozwecken; Untervermietung nur mit schriftlicher Zustimmung.',
      'Dach, Fach und Gebäudetechnik: Vermieterin; Schönheitsreparaturen: Mieterin.',
      'Vermieterin: Gebäudeversicherung. Mieterin: Betriebsinhalts- und Betriebshaftpflichtversicherung.',
      'Bauliche Veränderungen bedürfen Zustimmung; Rückgabe besenrein; Gerichtsstand Leipzig.',
    ]},
  ],
  signature: 'Leipzig, den 15. August 2022 — Augustusplatz Immobilien Leipzig GmbH & Co. KG (Vermieterin); LeadPilot GmbH, vertreten durch Marc Pönisch (Mieterin)',
  note: { title: 'Hinweis zur Dokumentenhistorie', variant: 'info', paragraphs: [
    'LeadPilot besitzt keinen Grundbesitz und ist an dieser Adresse Mieterin. Ein zuvor unter diesem Abschnitt geführter Grundbuchauszug wurde entfernt: Er datierte vor der Beurkundung des Gesellschaftsvertrags — eine GmbH kann vor ihrer Errichtung kein Eigentum erwerben.',
    'Dieser Mietvertrag ist die tatsächliche Rechtsgrundlage der Position „Miete, Recht, Buchhaltung, Versicherung" (52.000 €) im Jahresabschluss 2025.',
  ]},
};
