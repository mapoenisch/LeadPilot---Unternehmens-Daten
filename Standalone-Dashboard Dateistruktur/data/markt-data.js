export const MARKT = {
  kpis: [
    { label: 'Europa Cloud-CRM-Markt 2026', value: '14,23', unit: 'Mrd. USD', note: 'CAGR 5,23 % → 18,36 Mrd. bis 2031' },
    { label: 'Europa CRM SaaS gesamt', value: '14,5', unit: '% CAGR', note: '2025–2033, KI-getriebenes Wachstum', highlight: true },
    { label: 'Marktanteil Deutschland', value: '24,4', unit: '%', note: 'größter CRM-Einzelmarkt Europas (2025)' },
    { label: 'KI-Lead-Generation', value: '+31', unit: '% CAGR', note: 'stark steigende Nachfrage, v. a. DSGVO-konforme Angebote', highlight: true },
  ],
  treiber: { title: 'Markttreiber', items: [
    'Viele KMU arbeiten aktuell noch mit Excel-Listen oder gar keinem CRM — großer, ungenutzter Markt',
    'Nur etwa 24 % der Unternehmen mit 10–49 Beschäftigten nutzen überhaupt ein CRM-System',
    'Bis zu 70 % aller Marketing-Leads werden nie kontaktiert',
    'Nur rund 27 % der Arbeitszeit im deutschen Vertrieb fließt in echte Kundeninteraktion (Salesforce State of Sales 2024)',
    'Wachsendes Interesse an KI-gestützten Vertriebstools im Mittelstand',
    'EU-Förderungen für KI und Digitalisierung',
  ]},
  trends: { title: 'Google-Trends-Befunde (Content-Recherche)', items: [
    'Stärkste ähnliche Suchanfragen zu „CRM": ai crm (Index 100), crm system (85), hubspot crm (82), crm software (81), hubspot (77)',
    'Verwandte Themen: Customer-Relationship-Management (100), Preis/Wirtschaft (15), Künstliche Intelligenz (8)',
    '„Leadmanagement" hat geringes Suchvolumen (stärkste Region NRW) → in Titeln lieber Alltagssprache wie „Leads verlieren" verwenden',
    '„Lead Management CRM": höchstes Interesse in Hessen, Berlin, Bayern → relevant für die LinkedIn-Aussteuerung',
  ]},
};

export const WETTBEWERB = {
  chart: { type: 'bar', labels: ['Brevo','Zendesk','HubSpot','Salesforce','Pipedrive','LeadPilot'], datasets: [{ data: [29.4,23.5,11.3,8.5,1.6,0.1], colors: ['#A7B0BA','#A7B0BA','#A7B0BA','#A7B0BA','#7CEFE6','#FF7A3D'] }] },
  headers: ['Anbieter','Marktanteil','Fokus','Schwachstelle aus LeadPilot-Sicht','Bedrohung'],
  rows: [
    ['Brevo','29,4 %','E-Mail-Marketing-CRM','Kein B2B-Pipeline-Fokus','niedrig'],
    ['Zendesk','23,5 %','Support und Service','Kein Sales-Automation-Fokus','niedrig'],
    ['HubSpot','11,3 %','All-in-One, Marketing','Zu komplex und zu teuer für reinen B2B-Vertrieb im Mittelstand','hoch'],
    ['Salesforce','8,5 %','Enterprise-Standard','Zu teuer und komplex für KMU, langes Einführungsprojekt','niedrig'],
    ['Pipedrive','1,6 %','Pipeline-Management B2B','Kein natives KI-Scoring als Kernfunktion','sehr hoch'],
    ['LeadPilot','< 0,1 %','KI-Scoring und Schnelligkeit','Markenbekanntheit fehlt vollständig','—'],
  ],
  note: { title: 'Der gefährlichste Wettbewerber ist der kleinste', variant: 'warning', paragraphs: [
    'Nicht Salesforce, sondern Pipedrive ist die reale Bedrohung: gleiche Zielgruppe, ähnliche Preislage, ähnliches Versprechen einer aktivitätsgetriebenen Methodik.',
    'Der einzige belastbare Unterschied ist das native KI-Scoring — und genau das nutzen bislang nur 47 % der eigenen Kunden.',
    'Sobald Pipedrive oder HubSpot KI-Scoring als Standardfunktion ausrollen, verliert LeadPilot sein Alleinstellungsmerkmal.',
  ]},
};

export const SWOT = {
  quadrants: [
    { title: 'Stärken', items: [
      'Fokussiertes Produkt mit klarem, in einem Satz erklärbarem Nutzenversprechen',
      'DSGVO-native Architektur mit europäischem Hosting als Vertrauensargument',
      'Schnelle Einführung ohne IT-Projekt beim Kunden',
      'Solide Seed-Finanzierung, Eigenkapitalquote 71,8 %, kaum Fremdkapital',
      'ARR im zweiten Marktjahr nahezu verdoppelt',
      'Growth- und Pro-Kunden kündigen praktisch nicht',
    ]},
    { title: 'Schwächen', items: [
      'Account-Churn von 2,8 % pro Monat, weit über dem Benchmark von 2,0 %',
      'Onboarding zu langsam, Time-to-Value bei 11 Tagen',
      'Kernfeature KI-Scoring nur von 47 % der Kunden genutzt',
      'LTV : CAC bei 2,7 : 1 unter dem Benchmark von 3 : 1',
      'CTO als Single Point of Failure für die Scoring-Engine',
      'Markenbekanntheit praktisch nicht vorhanden, Marktanteil unter 0,1 %',
    ]},
    { title: 'Chancen', items: [
      'ICP-Schärfung hebt Churn, CAC-Effizienz und Deckungsbeitrag gleichzeitig',
      'Product-Led Growth über einen geführten Trial-Flow',
      'Partnerkanal mit dem niedrigsten CAC (0,6×) ist kaum ausgebaut',
      'Deutscher CRM-Markt wächst KI-getrieben zweistellig',
      'Upselling der 41 Starter-Kunden auf Growth',
      'DSGVO-Anforderungen im Mittelstand steigen weiter',
    ]},
    { title: 'Risiken', items: [
      'Anschlussfinanzierung bei nur 14 Monaten Runway',
      'KI-Funktionen von Pipedrive und HubSpot werden zum Standard',
      'Steigende KI-API-Kosten drücken die Bruttomarge',
      'Fachkräftemangel im Engineering, zwei Stellen unbesetzt',
      'Abhängigkeit von wenigen größeren Bestandskunden',
      'Wirtschaftliche Eintrübung führt zu Budget-Freezes im Mittelstand',
    ]},
  ],
  compareHeaders: ['Annahme 2022','Stand 2025','Bewertung'],
  compareRows: [
    ['Attraktiver Preis zwischen einfachen Tools und teuren Enterprise-CRMs','49–89 €/Nutzer/Monat, keine nennenswerten Rabattdiskussionen','bestätigt'],
    ['Noch keine Referenzkunden oder Erfolgsgeschichten','66 Kunden, Corvion Software GmbH als benannter Referenzkunde','überholt — Schwäche entfällt'],
    ['Einfachheit als Differenzierung gegenüber CRM-Suiten','Trifft zu, reicht aber nicht: KI-Scoring ist das eigentliche Unterscheidungsmerkmal','teilweise bestätigt'],
    ['Partnerschaften mit Verbänden, IHKs und CRM-Beratungen als Kanal','Partnerkanal liefert 18 % der Neukunden bei niedrigstem CAC, wird aber nicht systematisch bearbeitet','Potenzial unausgeschöpft'],
    ['Pipedrive als ähnlichster Wettbewerber','Bestätigt und heute die größte Bedrohung','bestätigt'],
  ],
};
