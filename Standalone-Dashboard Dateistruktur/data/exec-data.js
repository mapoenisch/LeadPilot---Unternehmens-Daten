// Inhaltsdaten für die Kategorie "Übersicht". Reine Werte/Text — keine Darstellungslogik.

export const HERO = {
  name: 'LeadPilot',
  legalSuffix: 'GmbH',
  sub: 'KI-gestütztes Sales-CRM für Lead-Management und Vertriebsautomatisierung im deutschen B2B-Mittelstand. Jeder Lead bekommt automatisch seinen nächsten fälligen Schritt — damit keiner mehr vergessen wird.',
  claim: '„Kein Lead bleibt zurück."',
  meta: [
    { label: 'Rechtsform', value: 'GmbH' },
    { label: 'Gegründet', value: '21. Juli 2022' },
    { label: 'Launch', value: 'Q1 2024' },
    { label: 'Sitz', value: 'Leipzig, Sachsen' },
    { label: 'Branche', value: 'B2B SaaS' },
    { label: 'Mitarbeitende', value: '10 FTE' },
    { label: 'ARR 2025', value: '411.840 €' },
    { label: 'Kunden', value: '66' },
  ],
};

export const EXEC_KPIS_1 = [
  { label: 'ARR zum 31.12.2025', value: '411,8', unit: 'Tsd. €', delta: '▲ +98 %', deltaDir: 'up', note: 'ggü. 207,8 Tsd. €' },
  { label: 'MRR Dezember 2025', value: '34,3', unit: 'Tsd. €', delta: '▲ +98 %', deltaDir: 'up', note: 'ggü. Vorjahr' },
  { label: 'Aktive Kunden', value: '66', unit: '', delta: '+30 netto', deltaDir: 'up', note: '47 neu, 17 Kündigungen', highlight: true },
  { label: 'Account-Churn', value: '2,8', unit: '% / Mon.', delta: '✕ verfehlt', deltaDir: 'down', note: 'Ziel < 2,0 %' },
  { label: 'Net Promoter Score', value: '34', unit: '', delta: '✕ verfehlt', deltaDir: 'down', note: 'Ziel 40', highlight: true },
  { label: 'Bruttomarge', value: '64,0', unit: '%', note: '215 Tsd. € Bruttogewinn' },
];

export const EXEC_KPIS_2 = [
  { label: 'Umsatzerlöse', value: '336', unit: 'Tsd. €', delta: '▲ +105 %', deltaDir: 'up', note: 'ggü. 164 Tsd. €' },
  { label: 'Jahresfehlbetrag', value: '−334', unit: 'Tsd. €', note: 'planmäßiger Verlust in der Wachstumsphase' },
  { label: 'Mitarbeitende', value: '10', unit: 'FTE', delta: '+2', deltaDir: 'up', note: 'von 8 auf 10', highlight: true },
  { label: 'Burn Rate', value: '25,8', unit: 'Tsd. €/Mon.', delta: '✕ verfehlt', deltaDir: 'down', note: 'Ziel 22,0 Tsd. €' },
  { label: 'LTV : CAC', value: '2,7', unit: ': 1', delta: '✕ verfehlt', deltaDir: 'down', note: 'Benchmark > 3 : 1' },
  { label: 'Runway', value: '14', unit: 'Mon.', note: '363 Tsd. € liquide Mittel', highlight: true },
];

const Q = ['Q1', 'Q2', 'Q3', 'Q4'];
const M = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];

export const CHART_ARR = {
  type: 'line',
  labels: Q,
  datasets: [{ label: 'ARR Run-Rate', data: [248472, 294588, 348840, 411840], color: '#00D9C6', fill: true }],
};

export const CHART_MRR = {
  type: 'bar',
  labels: M,
  datasets: [{ label: 'MRR', data: [18346, 19507, 20706, 21824, 22908, 24549, 25704, 27378, 29070, 30780, 32508, 34320], color: '#00D9C6', highlightLastColor: '#FF7A3D' }],
};

export const CHART_QUARTAL = {
  type: 'bar',
  labels: Q,
  datasets: [
    { label: 'Umsatzerlöse', data: [63559, 75981, 90152, 106308], color: '#00D9C6' },
    { label: 'Bruttogewinn', data: [40559, 48581, 57752, 68108], color: '#7CEFE6' },
  ],
};

export const CHART_TIER = {
  type: 'doughnut',
  labels: ['Growth', 'Starter', 'Pro'],
  datasets: [{ data: [234960, 120540, 56340], colors: ['#00D9C6', '#FF7A3D', '#7CEFE6'] }],
};

export const NOTE_EXEC = {
  title: 'Das Jahr in drei Sätzen',
  variant: 'info',
  paragraphs: [
    'LeadPilot hat den ARR im zweiten vollen Marktjahr nahezu verdoppelt — von 207.792 € auf 411.840 € bei 66 aktiven Kunden. Das Wachstumsziel von 480.000 € wurde damit verfehlt, das Fundament trägt aber.',
    'Der Engpass liegt vollständig in der Kundenbindung: 17 Kündigungen bei einem monatlichen Account-Churn von 2,8 % — rechnerisch 29 % Kundenverlust pro Jahr. Die gekündigten Accounts hatten im Schnitt 129 € MRR gegenüber 520 € im Gesamtdurchschnitt; es kündigen also fast ausschließlich Kleinstkunden, die das ICP bereits heute als Negative-Fit ausweist.',
    'Daraus folgt die Priorität für 2026: ICP-Schärfung und geführter Trial-Flow wirken gleichzeitig auf Churn, Trial-to-Paid und Deckungsbeitrag — und sind Voraussetzung dafür, dass die Anschlussfinanzierung bei 14 Monaten Runway zu vernünftigen Konditionen gelingt.',
  ],
};

export const PROFILE_ROWS = [
  ['Firma', 'LeadPilot GmbH'],
  ['Rechtsform', 'GmbH, Amtsgericht Leipzig'],
  ['Gegründet', '21. Juli 2022 (Beurkundung des Gesellschaftsvertrags)'],
  ['Produkt-Launch (GA)', 'Q1 2024 — GJ 2025 ist damit das zweite volle Marktjahr'],
  ['Sitz', 'Augustusplatz 9, 04109 Leipzig, Sachsen (angemietete Büroflächen)'],
  ['Geschäftsführung', 'Marc Pönisch (CEO), Tobias Heine (CTO), jeweils einzelvertretungsberechtigt'],
  ['Stammkapital', '31.250 € (ursprünglich 25.000 €, Kapitalerhöhung Q1 2024)'],
  ['Mitarbeitende', '10 FTE zum 31.12.2025 · Ziel 12 FTE'],
  ['Branche', 'B2B SaaS — Lead-Management & Vertriebsautomatisierung'],
  ['Geschäftsjahr', 'Kalenderjahr (1. Januar bis 31. Dezember)'],
  ['Finanzierung', 'Seed-Runde Q1 2024 über 950.000 € (TGFS Sachsen als Lead, High-Tech Gründerfonds)'],
  ['ARR 31.12.2025', '411.840 €'],
  ['Aktive Kunden', '66 Accounts, davon 61 in Deutschland, 3 in Österreich, 2 in der Schweiz'],
  ['Claim', '„Kein Lead bleibt zurück.“'],
];

export const NOTE_PROFIL = {
  title: 'Einordnung der Unternehmensphase',
  variant: 'info',
  paragraphs: [
    'LeadPilot befindet sich am Übergang von der Seed- zur Wachstumsphase: Produkt und erste Marktvalidierung stehen, das Geschäftsmodell trägt sich aber noch nicht selbst.',
    'Für alle Aufgabenstellungen gilt daher das Profil eines Early-Stage-SaaS-Unternehmens — nicht das eines etablierten Anbieters.',
  ],
};

export const HIGHLIGHTS_GOOD_ROWS = [
  ['Wachstum', 'ARR von 207.792 € auf 411.840 € nahezu verdoppelt', '47 Neukunden, Kundenbasis von 36 auf 66 gewachsen'],
  ['Produkt', 'KI-Scoring v1.5 im Mai 2025 live, Trefferquote 71 %', 'Erstes echtes Differenzierungsmerkmal gegenüber Pipedrive'],
  ['Produkt', 'Integration von Microsoft 365 und Google Workspace (August)', 'E-Mail- und Kalenderdaten fließen automatisch in die Nachverfolgung'],
  ['Produkt', 'Überfälligkeits-Dashboard für die Vertriebsleitung (November)', 'Direkte Einzahlung auf das Kernversprechen des Produkts'],
  ['Team', 'Headcount von 8 auf 10 FTE, Customer Success verdoppelt', 'Zwei Engineering-Stellen bleiben unbesetzt'],
  ['Markt', 'Erste Kunden in Österreich (3) und der Schweiz (2)', 'Machbarkeit des DACH-Marktes belegt, noch keine Marktabdeckung'],
];

export const HIGHLIGHTS_BAD_ROWS = [
  ['Kundenbindung', '17 Kündigungen, Account-Churn 2,8 % pro Monat', 'Wichtigstes Thema für 2026'],
  ['Aktivierung', 'Trial-to-Paid 18 % statt geplanter 25 %', 'Kein geführter Trial-Flow vorhanden'],
  ['Onboarding', 'Abschlussquote 74 %, Time-to-Value 11 Tage', '26 % der Neukunden werden nie produktiv'],
  ['Unit Economics', 'LTV : CAC bei 2,7 : 1 statt über 3 : 1', 'Akquise amortisiert sich zu langsam'],
  ['Team', 'Fluktuation 22 % (2 Abgänge im Engineering)', 'Roadmap-Tempo gebremst'],
];

export const NOTE_HIGHLIGHTS = {
  title: 'Ehrliche Bilanz',
  variant: 'warning',
  paragraphs: [
    '2025 war kein Jahr der Rekorde, sondern ein Jahr der Diagnose. Das Wachstum stimmt, die Bindung nicht.',
    'Wer aus diesem Jahr die richtige Lehre zieht, arbeitet 2026 nicht härter an der Akquise, sondern an der Frage, welche Kunden überhaupt gewonnen werden sollen.',
  ],
};

export const BRIDGES_ROWS = [
  ['1', 'MRR → ARR', '34.320 € × 12 Monate', '411.840 €', '✅'],
  ['2', 'MRR-Brücke', '17.316 + 16.797 (neu) + 2.400 (Expansion) − 2.193 (Churn)', '34.320 €', '✅'],
  ['3', 'Kundenbasis → MRR', '66 Accounts × 520 € ARPA', '34.320 €', '✅'],
  ['4', 'Monats-MRR → Abo-Umsatz', 'Summe der zwölf Monatswerte', '307.600 €', '✅'],
  ['5', 'EBITDA → Burn Rate', '309.000 € ÷ 12 Monate', '25.750 €/Mon.', '✅'],
  ['6', 'Liquidität → Runway', '363.000 € ÷ 25.750 €', '14,1 Monate', '✅'],
];

export const SOURCES_ROWS = [
  ['LeadPilot Faktenblatt v1.1', 'Verbindliche Stammdaten — Single Source of Truth'],
  ['Geschäftsbericht 2025 (xlsx)', 'Dashboard, Finanzen, Kunden & Vertrieb, Produkt, Personal, Markt'],
  ['Jahresabschluss 2025 (xlsx)', 'Bilanz, GuV, Kennzahlen — vollständig formelbasiert'],
  ['Unternehmens-Check-up 2025', 'Analyse, Diagnose und Maßnahmenplan'],
  ['LeadPilot CRM (xlsx)', 'Aktive Pipeline zum Stand Juli 2026'],
  ['Ideal Customer Profile, Buyer Persona, Business Model Canvas', 'Qualitative Grundlagen, unverändert gültig'],
  ['Satzung, Gesellschafterliste, Handelsregisteranmeldung', 'Gründungs- und Gesellschafterdaten'],
];

export const NOTE_DATEN = {
  title: 'Hinweis zur Fiktion',
  variant: 'info',
  paragraphs: [
    'LeadPilot ist ein fiktives Schulungsunternehmen im Rahmen der Weiterbildung zum Digital Sales Manager (DBA).',
    'Alle Unternehmenszahlen sind exemplarisch und orientieren sich an realen Größenordnungen deutscher B2B-SaaS-Unternehmen in der Seed-Phase.',
    'Marktdaten, Wettbewerbsanteile und Förderinstrumente sind dagegen recherchierte Realdaten.',
  ],
};
