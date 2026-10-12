export const OKR = {
  chart: { type:'bar', labels:['ARR (T€)','Kunden','T2P (%)','Churn (%)','KI-Scoring (%)','Headcount','LTV:CAC','Burn (T€)'], datasets:[
    {label:'Basiswert 2025',data:[412,66,18,2.8,47,10,2.7,25.75],color:'#7CEFE6'},
    {label:'Zielwert 2026',data:[620,95,26,1.8,65,12,3.5,23],color:'#FF7A3D'},
  ]},
  headers: ['Objective','Key Result','Zielwert 2026','Basis 2025','Priorität','Owner'],
  rows: [
    ['O1 — Wachstum halten','KR1: ARR erreichen','620.000 €','411.840 €','🔴 kritisch','CEO'],
    ['O1 — Wachstum halten','KR2: aktive Kunden','95','66','🔴 kritisch','CEO'],
    ['O2 — Retention reparieren','KR3: Account-Churn pro Monat','< 1,8 %','2,8 %','🔴 kritisch','CS Lead'],
    ['O2 — Retention reparieren','KR4: Time-to-Value','< 7 Tage','11 Tage','🔴 kritisch','CS Lead'],
    ['O3 — Conversion verbessern','KR5: Trial-to-Paid','≥ 26 %','18 %','🟡 hoch','Head of Sales'],
    ['O3 — Conversion verbessern','KR6: LTV : CAC','≥ 3,5 : 1','2,7 : 1','🟡 hoch','CEO'],
    ['O4 — Produkt aktivieren','KR7: Nutzung KI-Scoring','≥ 65 %','47 %','🟡 hoch','CTO'],
    ['O5 — Liquidität sichern','KR8: Burn Rate pro Monat','< 23.000 €','25.750 €','🟡 hoch','CEO / Ops'],
    ['O6 — Team stabilisieren','KR9: Headcount','12 FTE','10 FTE','mittel','CEO'],
  ],
  note: { title: 'Warum die OKRs zusammenhängen', variant: 'success', paragraphs: [
    'KR3 bis KR7 sind keine fünf getrennten Ziele, sondern eine einzige Kausalkette: schnellere Aktivierung (KR4) → höhere Feature-Nutzung (KR7) → geringerer Churn (KR3) → besserer LTV (KR6) → erreichbares ARR-Ziel (KR1).',
    'Wer nur KR1 verfolgt und Akquise zukauft, verschlechtert die Unit Economics weiter.',
  ]},
};

export const BSC = {
  headers: ['Perspektive','Strategisches Ziel','Kennzahl','Ist 2025','Ziel 2026','Maßnahme'],
  rows: [
    ['Finanzen','Wachstum halten','ARR','411.840 €','620.000 €','Alle Initiativen der Maßnahmen-Roadmap'],
    ['Finanzen','Liquidität sichern','Burn Rate / Monat','25.750 €','< 23.000 €','Kostendisziplin, Umschichtung im Marketing'],
    ['Finanzen','Tragfähigkeit belegen','LTV : CAC','2,7 : 1','≥ 3,5 : 1','Churn-Senkung, ICP-Schärfung'],
    ['Kunden','Bindung erhöhen','Account-Churn / Monat','2,8 %','< 1,8 %','ICP-Schärfung, Mindestgröße im Funnel'],
    ['Kunden','Zufriedenheit steigern','Net Promoter Score','34','≥ 45','Support-Lösungszeit unter 24 h'],
    ['Kunden','Basis ausbauen','Aktive Kunden','66','95','Guided Trial, Partnerprogramm'],
    ['Prozesse','Aktivierung beschleunigen','Time-to-Value','11 Tage','< 7 Tage','Geführter Trial-Flow (v2.0)'],
    ['Prozesse','Abschluss verbessern','Trial-to-Paid','18 %','≥ 26 %','Demo-Playbook je Segment'],
    ['Prozesse','Onboarding sichern','Abschlussquote Onboarding','74 %','≥ 90 %','Einrichtungs-Checkliste, Datenimport-Assistent'],
    ['Team & Entwicklung','Engpässe schließen','Headcount','10 FTE','12 FTE','Zwei Engineering-Stellen besetzen'],
    ['Team & Entwicklung','Bindung verbessern','Fluktuationsrate','22 %','< 12 %','Entwicklungspfade, Beteiligungsprogramm'],
    ['Team & Entwicklung','Schlüsselrisiko entschärfen','Dokumentation Scoring-Logik','0 %','100 %','Wissenstransfer CTO, Q1 2026'],
  ],
};

export const MASSNAHMEN = {
  headers: ['#','Initiative','Zeitraum','Budget','Erwartete Wirkung','Owner','Priorität'],
  rows: [
    ['1','Guided-Trial-Onboarding neu aufbauen','Q1','12.000 €','Trial-to-Paid 18 → 26 %, TTV 11 → 7 Tage','Product / CS','🔴 kritisch'],
    ['2','ICP-Schärfung und Demo-Playbook je Segment','Q1–Q2','8.000 €','Win Rate 43 → 48 %, Churn 2,8 → 2,0 %','Head of Sales','🔴 kritisch'],
    ['3','Mindestgröße im Self-Service-Funnel','Q2','3.000 €','Weniger Kleinstkunden, ARPA 520 → 544 €','Marketing / Product','🟡 hoch'],
    ['4','KI-Scoring im Onboarding verpflichtend aktivieren','Q2','6.000 €','Nutzung 47 → 65 %','Product','🟡 hoch'],
    ['5','Partnerprogramm systematisch aufbauen','Q2–Q3','15.000 €','Partneranteil 18 → 28 %','CEO / Marketing','🟡 hoch'],
    ['6','Wissenstransfer KI-Engine dokumentieren','Q1','intern','Schlüsselrisiko CTO entschärft','CTO','🟡 hoch'],
    ['7','Anschlussfinanzierung vorbereiten','ab Q3','intern','Runway über 2027 hinaus gesichert','CEO','🔴 kritisch'],
    ['','Gesamt','','44.000 €','','',''],
  ],
  note: { title: 'Die Reihenfolge ist nicht beliebig', variant: 'success', paragraphs: [
    'Die Initiativen 1 bis 4 zahlen alle auf denselben Engpass ein — die Kundenbindung.',
    'Bei einem Gesamtbudget von 44.000 € entspricht das rund 5 % des Jahresaufwands — gemessen an der erwarteten ARR-Wirkung von über 200.000 € die mit Abstand rentabelste Investition des Jahres.',
  ]},
};

export const TREIBER = {
  chart: { type:'bar', labels:['Trial-to-Paid','Churn','Partnerprogramm','ICP-Schärfung','Upselling'], datasets:[{label:'ARR-Effekt (€)',data:[72000,58000,34000,26000,18000],color:'#00D9C6'}] },
  headers: ['Treiber','ARR-Effekt','Anteil','Wirkungsmechanik','Aufwand'],
  rows: [
    ['Trial-to-Paid 18 → 26 %','+72.000 €','35 %','21 zusätzliche Neukunden aus dem bestehenden Trial-Volumen','12.000 €'],
    ['Account-Churn 2,8 → 1,8 %','+58.000 €','28 %','Rund 6 gehaltene Accounts plus längere Kundenlebensdauer','8.000 €'],
    ['Partnerprogramm ausbauen','+34.000 €','16 %','Partneranteil von 18 auf 28 % bei niedrigstem CAC','15.000 €'],
    ['ICP-Schärfung, ARPA 520 → 544 €','+26.000 €','12 %','Höherwertige Neukunden statt Kleinstaccounts','3.000 €'],
    ['Upselling Starter → Growth','+18.000 €','9 %','12 Upgrades aus dem Bestand von 41 Starter-Kunden','6.000 €'],
    ['Gesamt','+208.000 €','100 %','ARR 411.840 € → 620.000 €','44.000 €'],
  ],
  note: { title: 'Bemerkenswert an dieser Aufstellung', variant: 'info', paragraphs: [
    '63 % des geplanten Wachstums stammen aus Conversion und Retention — also aus Leads und Kunden, die LeadPilot bereits hat.',
    'Nur 16 % kommen aus einem neuen Akquisekanal: erst den undichten Trichter abdichten, dann mehr hineingießen.',
  ]},
};

export const RISIKO = {
  headers: ['#','Risiko','Eintritt','Auswirkung','Bewertung'],
  rows: [
    ['R1','Anschlussfinanzierung scheitert oder verzögert sich','mittel','existenzbedrohend','🔴 kritisch'],
    ['R2','Churn bleibt über 2,5 % pro Monat','mittel','hoch','🔴 kritisch'],
    ['R3','Pipedrive oder HubSpot rollen KI-Scoring als Standard aus','hoch','hoch','🔴 kritisch'],
    ['R4','Ausfall des CTO','niedrig','sehr hoch','🟡 hoch'],
    ['R5','Steigende KI-API-Kosten drücken die Bruttomarge','hoch','mittel','🟡 hoch'],
    ['R6','Engineering-Stellen bleiben unbesetzt','hoch','mittel','🟡 hoch'],
    ['R7','Verlust eines der drei größten Accounts','niedrig','mittel','🟡 hoch'],
    ['R8','Wirtschaftliche Eintrübung führt zu Budget-Freezes im Mittelstand','mittel','mittel','mittel'],
    ['R9','Datenschutzvorfall oder Cyberangriff','niedrig','hoch','mittel'],
  ],
  gegenmassnahmen: [
    'R1: Ab Q3 2026 vorbereiten; Churn und LTV : CAC vorher sichtbar verbessern; Break-even-Szenario mit reduziertem Team durchrechnen',
    'R2: ICP-Schärfung, Guided Trial, Mindestgröße im Funnel (Initiativen 1–3)',
    'R3: Differenzierung über Einfachheit und DSGVO-Architektur schärfen; Scoring-Qualität als messbaren Vorteil belegen',
    'R4: Wissenstransfer und vollständige Dokumentation der Scoring-Logik in Q1 2026',
    'R5: Caching, Modellwahl nach Anwendungsfall, Kosten je Account monatlich überwachen',
    'R6: Remote-Recruiting über den Leipziger Raum hinaus, Beteiligungsprogramm',
    'R7: Quartalsweise Beziehungspflege durch die Geschäftsführung, Frühwarnung über Nutzungsdaten',
    'R8: Argumentation über verhinderten Umsatzverlust statt über Effizienzgewinn',
    'R9: Penetrationstest jährlich, Notfallplan, Cyber-Versicherung prüfen',
  ],
  note: { title: 'Die drei kritischen Risiken hängen zusammen', variant: 'warning', paragraphs: [
    'R1, R2 und R3 sind keine unabhängigen Ereignisse: Wenn der Churn hoch bleibt (R2) und gleichzeitig das Alleinstellungsmerkmal erodiert (R3), wird die Anschlussfinanzierung (R1) entweder scheitern oder nur zu deutlich schlechteren Konditionen gelingen.',
    'Die Arbeit an R2 ist damit zugleich die wirksamste Absicherung gegen R1.',
  ]},
};
