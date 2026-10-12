// Navigation-Struktur des Dashboards. status 'live' = Inhalte vorhanden, 'planned' = folgt in späterer Ausbaustufe.
export const NAV = [
  { id: 'uebersicht', label: 'Übersicht', status: 'live', items: [
    { id: 's-exec', label: 'Executive Dashboard' },
    { id: 's-profil', label: 'Unternehmenssteckbrief' },
    { id: 's-highlights', label: 'Jahres-Highlights 2025' },
    { id: 's-daten', label: 'Datenbasis & Konsistenz' },
  ]},
  { id: 'unternehmen', label: 'Unternehmen', status: 'live', items: [
    { id: 's-idee', label: 'Geschäftsidee' },
    { id: 's-value', label: 'Value Proposition & Positionierung' },
    { id: 's-historie', label: 'Gründung & Entwicklung' },
    { id: 's-standort', label: 'Sitz & Räumlichkeiten' },
  ]},
  { id: 'produkt', label: 'Produkt', status: 'live', items: [
    { id: 's-funktion', label: 'Produkt & Funktionsweise' },
    { id: 's-pricing', label: 'Pakete & Preismodell' },
    { id: 's-perf', label: 'Produkt-Performance 2025' },
    { id: 's-roadmap', label: 'Releases & Roadmap' },
    { id: 's-integr', label: 'Integrationen & Technologie' },
  ]},
  { id: 'markt', label: 'Markt & Wettbewerb', status: 'live', items: [
    { id: 's-markt', label: 'Marktlage' },
    { id: 's-wettbewerb', label: 'Wettbewerbslandschaft DACH' },
    { id: 's-swot', label: 'SWOT-Analyse' },
  ]},
  { id: 'kunden', label: 'Kunden', status: 'live', items: [
    { id: 's-icp', label: 'Ideal Customer Profile' },
    { id: 's-persona', label: 'Buyer Persona „Volker"' },
    { id: 's-empathy', label: 'Empathy Map & Hero Statement' },
    { id: 's-segmente', label: 'Kundensegmente' },
    { id: 's-top10', label: 'Top-10-Kunden' },
    { id: 's-cs', label: 'Customer Success & Retention' },
  ]},
  { id: 'geschaeftsmodell', label: 'Geschäftsmodell', status: 'live', items: [
    { id: 's-bmc', label: 'Business Model Canvas' },
    { id: 's-logik', label: 'Geschäftliche Logik' },
  ]},
  { id: 'vertrieb', label: 'Vertrieb & Marketing', status: 'live', items: [
    { id: 's-funnel', label: 'Sales Funnel 2025' },
    { id: 's-sla', label: 'SLA Marketing & Sales' },
    { id: 's-kanaele', label: 'Kanalperformance' },
    { id: 's-mbudget', label: 'Marketing-Budget & ROI' },
    { id: 's-brand', label: 'Brand & Digital Presence' },
    { id: 's-content', label: 'Content-Strategie' },
    { id: 's-tools', label: 'Digitale Tools im Vertrieb' },
    { id: 's-planung', label: 'Marketingplanung H2 2026' },
    { id: 's-kampagne', label: 'Kampagne: LeadPilot Connect' },
  ]},
  { id: 'finanzen', label: 'Finanzen', status: 'live', items: [
    { id: 's-guv', label: 'Gewinn- und Verlustrechnung' },
    { id: 's-bilanz', label: 'Bilanz- & SaaS-Kennzahlen' },
    { id: 's-unit', label: 'Unit Economics 2026' },
    { id: 's-budget', label: 'Budget- & Kostenplan 2026' },
  ]},
  { id: 'organisation', label: 'Organisation', status: 'live', items: [
    { id: 's-headcount', label: 'Headcount-Entwicklung' },
    { id: 's-hr', label: 'HR-Kennzahlen' },
    { id: 's-team', label: 'Teamstruktur & Engpässe' },
  ]},
  { id: 'strategie', label: 'Strategie 2026+', status: 'live', items: [
    { id: 's-okr', label: 'Strategische Ziele & OKRs' },
    { id: 's-bsc', label: 'Balanced Scorecard' },
    { id: 's-massnahmen', label: 'Maßnahmenportfolio' },
    { id: 's-treiber', label: 'Wachstumstreiber' },
    { id: 's-risiko', label: 'Risikoregister' },
  ]},
  { id: 'recht', label: 'Recht & Gründung', status: 'live', items: [
    { id: 's-satzung', label: 'Satzung' },
    { id: 's-gesellschafter', label: 'Gesellschafterliste' },
    { id: 's-handelsregister', label: 'Handelsregisteranmeldung' },
    { id: 's-gf', label: 'Geschäftsführervertrag' },
    { id: 's-mietvertrag', label: 'Mietvertrag' },
  ]},
  { id: 'projektkontext', label: 'Projektkontext', status: 'live', items: [
    { id: 's-projekt', label: 'Projektkontext & Task Sheets' },
    { id: 's-quellen', label: 'Quellen & Methodik' },
  ]},
];
