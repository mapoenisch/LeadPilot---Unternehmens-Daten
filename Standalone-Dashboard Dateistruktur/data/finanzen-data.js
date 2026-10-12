export const GUV = {
  chartErloese: { type:'doughnut', labels:['Abo-Umsatz','Onboarding & Setup','Sonstige Erlöse'], datasets:[{data:[307600,23000,5400],colors:['#00D9C6','#FF7A3D','#7CEFE6']}] },
  chartKosten: { type:'bar', labels:['Umsatz','Umsatzkosten','Sales & Mkt.','F&E','G&A','EBITDA','Jahresfehlbetrag'], datasets:[
    {label:'FY 2024',data:[164000,-64000,-141000,-164000,-83000,-288000,-307000],color:'#7CEFE6'},
    {label:'FY 2025',data:[336000,-121000,-209000,-208000,-107000,-309000,-334000],color:'#0B211F'},
  ]},
  headers: ['Position','Q1','Q2','Q3','Q4','FY 2025','FY 2024','Δ %'],
  rows: [
    ['Abo-Umsatz (wiederkehrend)','58.559','69.281','82.152','97.608','307.600','149.000','+106 %'],
    ['Onboarding & Setup','4.000','5.500','6.500','7.000','23.000','12.000','+92 %'],
    ['Sonstige Erlöse','1.000','1.200','1.500','1.700','5.400','3.000','+80 %'],
    ['Umsatzerlöse','63.559','75.981','90.152','106.308','336.000','164.000','+105 %'],
    ['Umsatzkosten','−23.000','−27.400','−32.400','−38.200','−121.000','−64.000','−89 %'],
    ['Bruttogewinn','40.559','48.581','57.752','68.108','215.000','100.000','+115 %'],
    ['Sales & Marketing','−47.500','−50.500','−53.500','−57.500','−209.000','−141.000','−48 %'],
    ['Forschung & Entwicklung','−47.500','−50.500','−53.500','−56.500','−208.000','−164.000','−27 %'],
    ['General & Administrative','−25.000','−26.000','−27.500','−28.500','−107.000','−83.000','−29 %'],
    ['EBITDA','−79.441','−78.419','−76.748','−74.392','−309.000','−288.000','−7 %'],
    ['Abschreibungen','−4.200','−4.400','−4.600','−4.800','−18.000','−14.000','−29 %'],
    ['EBIT','−83.641','−82.819','−81.348','−79.192','−327.000','−302.000','−8 %'],
    ['Finanzergebnis','−1.300','−1.400','−1.400','−1.400','−5.500','−4.000','−38 %'],
    ['Ergebnis vor Steuern','−84.941','−84.219','−82.748','−80.592','−332.500','−306.000','−9 %'],
    ['Sonstige Steuern','−375','−375','−375','−375','−1.500','−1.000','−50 %'],
    ['Jahresfehlbetrag','−85.316','−84.594','−83.123','−80.967','−334.000','−307.000','−9 %'],
  ],
  note: { title: 'Steuerliche Situation', variant: 'info', paragraphs: [
    '2025 fallen keine Ertragsteuern an. Die Verlustvorträge belaufen sich zum 31.12.2025 auf rund 880.000 €.',
    'Bei künftiger Profitabilität liegt die effektive Belastung am Standort Leipzig bei rund 31,9 % — Körperschaftsteuer 15 % zuzüglich Solidaritätszuschlag und Gewerbesteuer bei einem Hebesatz von 460 %.',
  ]},
};

export const BILANZ = {
  headers: ['Kennzahl','31.12.2025','31.12.2024','Zielwert','Status'],
  rows: [
    ['Bilanzsumme','479.000 €','765.000 €','—','—'],
    ['Eigenkapital','344.000 €','678.000 €','—','—'],
    ['Eigenkapitalquote','71,8 %','88,6 %','> 40 %','✅'],
    ['Liquide Mittel','363.000 €','686.000 €','> 300.000 €','✅'],
    ['Verbindlichkeiten ggü. Kreditinstituten','18.000 €','25.000 €','—','—'],
    ['Burn Rate (Ø monatlich)','25.750 €','24.000 €','< 22.000 €','🔴'],
    ['Runway ab Stichtag','14,1 Monate','28,6 Monate','> 18 Monate','🟡'],
    ['Verlustvorträge','880.000 €','547.000 €','—','—'],
  ],
  kpiHeaders: ['KPI','Plan','Ist','Abweichung','Status'],
  kpiRows: [
    ['ARR','480.000 €','411.840 €','−14,2 %','🔴'],
    ['MRR (Dezember)','40.000 €','34.320 €','−14,2 %','🔴'],
    ['Neukunden','65','47','−27,7 %','🔴'],
    ['Bruttomarge','68 %','64,0 %','−4 PP','🟡'],
    ['NRR','105 %','101 %','−4 PP','🟡'],
    ['GRR','92 %','88 %','−4 PP','🟡'],
    ['Account-Churn pro Monat','< 2,0 %','2,8 %','+0,8 PP','🔴'],
    ['Trial-to-Paid','25 %','18 %','−7 PP','🔴'],
    ['Marketing-CAC','700 €','862 €','+23,1 %','🔴'],
    ['Burn Rate','22.000 €','25.750 €','+17,0 %','🔴'],
    ['NPS','40','34','−6','🔴'],
  ],
  note: { title: 'Rechenwege der Effizienzkennzahlen', variant: 'success', paragraphs: [
    'Marketing-CAC = 40.500 € Media-Spend ÷ 47 Neukunden = 862 €.',
    'Fully-Loaded CAC = 209.000 € Sales & Marketing ÷ 47 Neukunden = 4.447 €.',
    'Deckungsbeitrag je Kunde und Monat = 520 € ARPA × 64 % Bruttomarge = 333 €.',
    'LTV = 333 € Deckungsbeitrag ÷ 2,8 % monatlicher Churn = 11.893 €.',
    'LTV : CAC = 11.893 € ÷ 4.447 € = 2,7 : 1 — unter dem Benchmark von 3 : 1.',
    'CAC-Payback = 4.447 € ÷ 333 € = 13 Monate. Runway = 363.000 € ÷ 25.750 € = 14,1 Monate.',
  ]},
};

export const UNIT = {
  kpis: [
    { label: 'Fully-Loaded CAC', value: '4.447', unit: '€', note: 'Sales & Marketing ÷ 47 Neukunden' },
    { label: 'Deckungsbeitrag', value: '333', unit: '€ / Mon.', note: '520 € ARPA × 64 % Bruttomarge', highlight: true },
    { label: 'Customer Lifetime Value', value: '11.893', unit: '€', note: 'Deckungsbeitrag ÷ 2,8 % Churn' },
    { label: 'LTV : CAC', value: '2,7', unit: ': 1', note: 'Benchmark > 3 : 1 verfehlt', highlight: true },
    { label: 'CAC-Payback', value: '13', unit: 'Mon.', note: 'Ziel unter 10 Monate' },
    { label: 'Ø Kundenlebensdauer', value: '36', unit: 'Mon.', note: 'rechnerisch aus 2,8 % Churn', highlight: true },
  ],
  chartMrr26: { type:'line', labels:['Jan','Mär','Jun','Sep','Dez'], datasets:[
    {label:'MRR',data:[34320,38000,42500,47000,51667],color:'#00D9C6',fill:true},
    {label:'Neu-MRR',data:[3200,3500,3800,4000,4200],color:'#FF7A3D'},
  ]},
  chartChurn26: { type:'line', labels:['Q1','Q2','Q3','Q4'], datasets:[
    {label:'Churn Rate %',data:[2.6,2.3,2.0,1.8],color:'#FF7A3D',fill:true},
    {label:'Trial-to-Paid %',data:[20,22,24,26],color:'#00D9C6'},
  ]},
  headers: ['Szenario','Churn / Mon.','Lebensdauer','LTV','LTV : CAC','Payback'],
  rows: [
    ['Ist 2025','2,8 %','36 Mon.','11.893 €','2,7 : 1','🔴 13 Mon.'],
    ['Ziel 2026','1,8 %','56 Mon.','18.500 €','3,9 : 1','✅ 11 Mon.'],
    ['Zusätzlich mit ICP-Schärfung (ARPA 620 €)','1,8 %','56 Mon.','22.044 €','4,6 : 1','✅ 9 Mon.'],
  ],
  note: { title: 'Warum der Churn wichtiger ist als der CAC', variant: 'warning', paragraphs: [
    'Eine Senkung des Churn von 2,8 % auf 1,8 % pro Monat verlängert die rechnerische Kundenlebensdauer von 36 auf 56 Monate und hebt den LTV um rund 55 % — ohne einen einzigen Euro zusätzliches Marketingbudget.',
    'Dieselbe Wirkung über den CAC zu erreichen, würde eine Senkung der Akquisekosten um mehr als ein Drittel erfordern.',
    'Retention ist damit der wirksamste Hebel auf die Unit Economics.',
  ]},
};

export const BUDGET = {
  chart: { type:'doughnut', labels:['Personal','Cloud & KI-API','Marketing & Ads','Strategische Initiativen','Tools & Lizenzen','Büro & Verwaltung','Recht & Security'], datasets:[{data:[600000,60000,55000,44000,28000,25000,18000],colors:['#0B211F','#FF7A3D','#00D9C6','#7CEFE6','#FF9A66','#A7B0BA','#2A4A43']}] },
  headers: ['Kostenblock','Plan 2026','Ist 2025','Δ','Anteil'],
  rows: [
    ['Personal (12 FTE)','600.000 €','490.000 €','+22 %','72 %'],
    ['Cloud-Infrastruktur & KI-API','60.000 €','39.000 €','+54 %','7 %'],
    ['Marketing & Ads','55.000 €','40.500 €','+36 %','7 %'],
    ['Strategische Initiativen','44.000 €','—','neu','5 %'],
    ['Tools & Lizenzen','28.000 €','23.500 €','+19 %','3 %'],
    ['Büro & Verwaltung','25.000 €','30.000 €','−17 %','3 %'],
    ['Recht, Datenschutz, Security','18.000 €','22.000 €','−18 %','2 %'],
    ['Gesamtaufwand','830.000 €','645.000 €','+29 %','100 %'],
  ],
  resultHeaders: ['Plan-Ergebnis 2026','Betrag','Herleitung'],
  resultRows: [
    ['Umsatzerlöse','554.000 €','Ø MRR 43.000 € × 12 zuzüglich Onboarding und sonstiger Erlöse'],
    ['Bruttogewinn','377.000 €','bei einer Ziel-Bruttomarge von 68 %'],
    ['EBITDA','−276.000 €','Bruttogewinn abzüglich betrieblicher Aufwendungen'],
    ['Burn Rate pro Monat','23.000 €','Ziel erreicht (2025: 25.750 €)'],
    ['Liquiditätsbedarf bis Ende 2026','276.000 €','gedeckt durch 363.000 € Bestand zum 31.12.2025'],
  ],
  note: { title: 'Die eigentliche Deadline', variant: 'warning', paragraphs: [
    'Zum 31.12.2026 verbleiben rechnerisch rund 87.000 € liquide Mittel — etwa vier Monate Runway.',
    'Die Anschlussfinanzierung muss deshalb spätestens ab Q3 2026 vorbereitet werden.',
    'Voraussetzung für vernünftige Konditionen ist ein sichtbar verbesserter Churn und ein LTV : CAC über 3 : 1.',
  ]},
};
