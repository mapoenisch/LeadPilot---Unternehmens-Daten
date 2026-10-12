export const FUNNEL = {
  chart: { type:'bar', labels:['Q1','Q2','Q3','Q4'], datasets:[
    {label:'Leads',data:[384,432,456,504],color:'#A7B0BA'},
    {label:'MQLs',data:[108,126,132,150],color:'#7CEFE6'},
    {label:'SQLs',data:[40,47,50,55],color:'#00D9C6'},
    {label:'Neukunden',data:[10,11,12,14],color:'#FF7A3D'},
  ]},
  headers:['Stufe','Q1','Q2','Q3','Q4','FY 2025','Ø/Mon.','Conversion'],
  rows:[
    ['Leads gesamt','384','432','456','504','1.776','148','—'],
    ['Marketing Qualified Leads','108','126','132','150','516','43','29 %'],
    ['Sales Qualified Leads','40','47','50','55','192','16','38 %'],
    ['Testversionen gestartet','57','64','68','75','264','22','—'],
    ['Angebote','23','26','28','31','108','9','56 %'],
    ['Neukunden','10','11','12','14','47','3,9','43 %'],
  ],
  trialHeaders:['Kennzahl','Plan','Ist','Abweichung','Ursache'],
  trialRows:[
    ['Trial-to-Paid','25 %','18 %','−7 PP','Kein geführter Trial-Flow, Nutzer bleiben im leeren Produkt allein'],
    ['Onboarding-Abschlussquote','90 %','74 %','−16 PP','Datenimport und Ersteinrichtung zu aufwendig'],
    ['Time-to-Value','7 Tage','11 Tage','+4 Tage','Erster spürbarer Nutzen kommt zu spät'],
    ['Aktivierungsrate','70 %','58 %','−12 PP','Folge der beiden Punkte darüber'],
  ],
  note:{title:'Was 8 Prozentpunkte Trial-to-Paid wert sind',variant:'warning',paragraphs:[
    'Bei 264 Testversionen im Jahr entsprechen 8 Prozentpunkte rund 21 zusätzlichen Neukunden.',
    'Bei einem durchschnittlichen Einstiegs-MRR von 357 € wären das etwa +90.000 € ARR — ohne einen einzigen zusätzlichen Lead.',
    'Damit ist der geführte Trial-Flow die wirtschaftlich stärkste Einzelmaßnahme für 2026.',
  ]},
};

export const SLA = {
  handoff:{title:'Übergabepunkt', headers:['Merkmal','Angabe'], rows:[
    ['Status vor der Übergabe','Marketing Qualified Lead (MQL)'],
    ['Übergabemoment','Lead erreicht im Scoring die Einstufung „heiß"'],
    ['Status nach der Übergabe','Sales Qualified Lead (SQL), sobald der erste Kontaktversuch positiv verläuft'],
  ]},
  marketing:{title:'Marketing verpflichtet sich', items:[
    'Lead-Zielmenge: 30 qualifizierte MQLs pro Monat',
    'Qualitätskriterien: ICP-Fit UND Scoring-Status heiß',
    'Nurturing: Warme Leads bleiben im 4-Wochen-Content-Plan',
  ]},
  sales:{title:'Vertrieb verpflichtet sich', items:[
    'Reaktionszeit: Kontakt innerhalb von 24 Stunden, werktags',
    'Follow-up-Rhythmus: mindestens 3 Kontaktversuche in der ersten Woche',
    'Rückmeldung: SQL markieren oder mit konkretem Grund disqualifizieren',
  ]},
  kpis:[
    {label:'Wöchentliches Sync',value:'15',unit:'Min.',note:'jeden Montag, Marketing & zuständiger Vertriebsmitarbeiter'},
    {label:'Review-Rhythmus',value:'alle 3',unit:'Monate',note:'Ist-Zahlen zu Lead-Zielmenge, Reaktionszeit',highlight:true},
    {label:'Lernschleife',value:'laufend',unit:'',note:'Disqualifizierungsgründe fließen zurück in Segmentierung'},
  ],
};

export const KANAELE = {
  chartKanal:{type:'doughnut', labels:['LinkedIn-Content','SEO/Content','Partner/Empfehlung','Webinare','Outbound-E-Mail'], datasets:[{data:[38,22,18,12,10],colors:['#00D9C6','#7CEFE6','#0B211F','#FF9A66','#FF7A3D']}]},
  chartRoi:{type:'bar', labels:['Partner/Empfehlung','SEO/Content','Webinare','LinkedIn-Content','Outbound-E-Mail'], datasets:[{label:'CAC (€)',data:[492,656,820,984,1476],colors:['#00D9C6','#00D9C6','#7CEFE6','#7CEFE6','#FF7A3D']}]},
  headers:['Kanal','Anteil','Neukunden','CAC-Index','Marketing-CAC','Spend','Bewertung'],
  rows:[
    ['LinkedIn-Content','38 %','18','1,2×','984 €','17.712 €','Volumenträger, aber teuer'],
    ['SEO / Content','22 %','10','0,8×','656 €','6.560 €','Bestes Verhältnis aus Volumen und Kosten'],
    ['Partner / Empfehlung','18 %','8','0,6×','492 €','3.936 €','Günstigster Kanal — massiv unterinvestiert'],
    ['Webinare','12 %','6','1,0×','820 €','4.920 €','Solide, personalintensiv'],
    ['Outbound-E-Mail','10 %','5','1,8×','1.476 €','7.380 €','Teuerster Kanal, Rückbau prüfen'],
    ['Gesamt','100 %','47','—','862 €','40.508 €','Blended Marketing-CAC'],
  ],
  note:{title:'Die auffälligste Zahl der Kanalanalyse',variant:'success',paragraphs:[
    'Der Kanal mit dem niedrigsten CAC (Partner und Empfehlung, 492 € je Neukunde) erhält mit 3.936 € das kleinste Budget und liefert nur 18 % der Neukunden.',
    'Outbound-E-Mail kostet dreimal so viel je Neukunde und bekommt fast das Doppelte an Budget.',
    'Eine Umschichtung von Outbound zu Partner würde rechnerisch rund zehn zusätzliche Neukunden pro Jahr bedeuten.',
  ]},
};

export const MBUDGET = {
  chart:{type:'bar', labels:['LinkedIn','SEO','Webinare','Outbound','Partner'], datasets:[
    {label:'Budget',data:[16000,8000,5000,5000,5000],color:'#7CEFE6'},
    {label:'Spend Ist',data:[17712,6560,4920,7380,3936],color:'#FF7A3D'},
  ]},
  headers:['Kanal','Budget 2025','Spend Ist','Abweichung','Neukunden','CAC','Bewertung'],
  rows:[
    ['LinkedIn-Content & Ads','16.000 €','17.712 €','+11 %','18','984 €','🟡 über Budget'],
    ['SEO / Content','8.000 €','6.560 €','−18 %','10','656 €','✅ effizient'],
    ['Partner / Empfehlung','5.000 €','3.936 €','−21 %','8','492 €','✅ unterinvestiert'],
    ['Webinare','5.000 €','4.920 €','−2 %','6','820 €','✅ im Plan'],
    ['Outbound-E-Mail','5.000 €','7.380 €','+48 %','5','1.476 €','🔴 ineffizient'],
    ['Gesamt','39.000 €','40.508 €','+3,9 %','47','862 €',''],
  ],
  note:{title:'Zwei CAC-Begriffe sauber getrennt',variant:'info',paragraphs:[
    'Marketing-CAC (862 €) = Media-Spend ÷ Neukunden. Diese Zahl misst die Effizienz der Kanäle.',
    'Fully-Loaded CAC (4.447 €) = gesamte Kosten für Sales & Marketing (209.000 €, inklusive drei Personalstellen) ÷ 47 Neukunden.',
    'Eine frühere Fassung vermischte beide zu einer einzigen Kennzahl von 820 € — das führte zu einer viel zu optimistischen Payback-Rechnung.',
  ]},
};

export const BRAND = {
  chart:{type:'line', labels:['Q1','Q2','Q3','Q4'], datasets:[
    {label:'Website-Besucher/Mon.',data:[1900,2300,2600,2900],color:'#00D9C6',fill:true},
    {label:'LinkedIn-Follower',data:[700,900,1150,1400],color:'#FF7A3D'},
  ]},
  headers:['Kennzahl','Q1','Q2','Q3','Q4','Ziel','Status'],
  rows:[
    ['Website-Besucher pro Monat','1.900','2.300','2.600','2.900','3.000','🟡'],
    ['Website-Conversion-Rate','2,1 %','2,3 %','2,4 %','2,6 %','3,0 %','🟡'],
    ['LinkedIn-Follower','700','900','1.150','1.400','1.500','🟡'],
    ['Newsletter-Abonnenten','280','390','510','620','600','✅'],
    ['Domain Authority','11','12','13','14','15','🟡'],
    ['Backlinks gesamt','68','92','118','145','150','🟡'],
    ['Marktanteil CRM','—','—','—','< 0,1 %','—','—'],
  ],
  note:{title:'Korrektur gegenüber der Ursprungsfassung',variant:'warning',paragraphs:[
    'Frühere Werte (6.800 LinkedIn-Follower, Domain Authority 38, Share of Voice 5,5 %) beschrieben ein Unternehmen mit einem Vielfachen des tatsächlichen Marketingbudgets.',
    'Bei einer Marketingstelle und 40.500 € Media-Spend sind die hier ausgewiesenen Werte die realistische Größenordnung.',
  ]},
};

export const CONTENT = {
  themes: [
    { title: 'Thema 1 — Leads nicht mehr verlieren', items: [
      'Blogartikel: „Warum bis zu 70 % aller Leads nie kontaktiert werden"',
      'Checkliste: „10-Punkte-Checkliste: Ist Ihre Lead-Nachverfolgung wirklich lückenlos?"',
      'LinkedIn-Post: Kurz-Umfrage „Wisst ihr immer, welcher Kunde als Nächstes dran ist?"',
      'Video-Tutorial: Automatische Lead-Priorisierung in 2 Minuten',
    ]},
    { title: 'Thema 2 — Vertrieb digitalisieren ohne IT-Abteilung', items: [
      'Blogartikel: „Vertrieb digitalisieren ohne IT-Projekt"',
      'Webinar: „CRM einführen in einer Woche"',
      'Checkliste: „Software-Einführung ohne Chaos: 7 Schritte für KMU"',
      'LinkedIn-Post: „Wie ein 7-köpfiges Vertriebsteam in 3 Tagen digitalisiert wurde"',
    ]},
    { title: 'Thema 3 — Pipeline-Überblick & Reporting', items: [
      'Blogartikel: „Monatsreporting in 10 statt 60 Minuten"',
      'Vorlage: „Die 5 Kennzahlen, die wirklich zählen"',
      'LinkedIn-Grafik: „5 KPIs, die jeder Vertriebsleiter im Blick haben sollte"',
      'Kurzvideo: „Dashboard live: In 60 Sekunden zur Pipeline-Übersicht"',
    ]},
    { title: 'Thema 4 — KI im Vertrieb', items: [
      'Blogartikel: „KI-gestütztes CRM: Hype oder echter Nutzen?"',
      'Blogartikel: „HubSpot, Salesforce & Co. vs. schlanke Alternativen"',
      'Checkliste: „CRM-Kostenvergleich: Was ein verlorener Lead wirklich kostet"',
      'LinkedIn-Post: „Warum ‚KI im Vertrieb’ 2026 kein Buzzword mehr ist“',
    ]},
  ],
  ideas: { title: 'Ausgewählte Content-Ideen', items: [
    'Blogartikel „Warum bis zu 70 % aller Leads nie kontaktiert werden und was Sie dagegen tun können"',
    'LinkedIn-Post-Serie „5 KPIs, die jeder Vertriebsleiter im Blick haben sollte"',
    'Checkliste / Lead-Magnet „10-Punkte-Checkliste: Ist Ihre Lead-Nachverfolgung wirklich lückenlos?"',
    'Blogartikel „KI-gestütztes CRM: Hype oder echter Nutzen für kleine Vertriebsteams?"',
    'Kurzvideo „Dashboard live: In 60 Sekunden zur Pipeline-Übersicht"',
  ]},
  planNote: { title: 'Mini-Redaktionsplan — 4 Wochen (27.07. – 23.08.2026)', variant: 'success', paragraphs: [
    'Ziel: Vertriebsleiter-Volker über 4 Wochen mit hilfreichem Content versorgen und Interessenten zur kostenlosen 14-tägigen Testversion führen.',
    'Format-Entscheidung: Schwerpunkt auf kurzen LinkedIn-Posts, ergänzt um einen wöchentlichen Blogartikel.',
    'Frequenz: 1× Blogartikel pro Woche · 2–3× LinkedIn-Post pro Woche · 1 Checkliste als Lead-Magnet in Woche 1.',
  ]},
  calendarHeaders: ['Woche','Datum','Thema / Titel','Format'],
  calendarRows: [
    ['1','Mo 27.07.','Wusstest du: Bis zu 70 % aller Leads werden nie kontaktiert','LinkedIn-Post'],
    ['1','Mi 29.07.','Warum bis zu 70 % aller Leads nie kontaktiert werden','Blogartikel'],
    ['1','Fr 31.07.','10-Punkte-Checkliste: Lead-Nachverfolgung','Checkliste (PDF)'],
    ['2','Mo 03.08.','5 KPIs, die jeder Vertriebsleiter im Blick haben sollte (1)','LinkedIn-Post'],
    ['2','Mi 05.08.','5 KPIs, die jeder Vertriebsleiter im Blick haben sollte (2)','LinkedIn-Post'],
    ['2','Fr 07.08.','Monatsreporting in 10 statt 60 Minuten','Blogartikel'],
    ['3','Mo 10.08.','Vertrieb digitalisieren ohne IT-Abteilung — geht das wirklich?','LinkedIn-Post'],
    ['3','Mi 12.08.','Vertrieb digitalisieren ohne IT-Projekt','Blogartikel'],
    ['3','Fr 14.08.','Dashboard live: In 60 Sekunden zur Pipeline-Übersicht','Kurzvideo'],
    ['4','Mo 17.08.','KI im Vertrieb: Hype oder Nutzen?','LinkedIn-Post'],
    ['4','Mi 19.08.','KI-gestütztes CRM: Hype oder echter Nutzen?','Blogartikel'],
    ['4','Fr 21.08.','4 Wochen, 4 Themen — worauf achtet ihr beim Lead-Management?','LinkedIn-Post'],
  ],
  draftNote: { title: 'Erster Content-Entwurf: „Warum bis zu 70 % aller Leads nie kontaktiert werden"', variant: 'info', paragraphs: [
    'Firmenblog · ca. 500 Wörter. Gliederung: Einleitung (Alltagsszene) → Problem der Persona → Lösungsansätze (klarer nächster Schritt, eindeutige Verantwortung, System statt Gedächtnis) → Fazit & CTA.',
    'Kernaussage: Verlorene Leads sind kein Zeichen von schlechtem Vertrieb, sondern ein Zeichen von fehlender Struktur — und Struktur lässt sich nachrüsten, ohne wochenlange Schulung oder ein IT-Projekt.',
  ]},
};

export const TOOLS = {
  intro: { title: 'Interne Herausforderung als Fallbeispiel', variant: 'success', paragraphs: [
    'Da LeadPilot selbst CRM-Software verkauft, nutzt das eigene Vertriebsteam natürlich das eigene Produkt. Eine reale Schwachstelle bleibt aber: der Onboarding-Prozess neuer Kunden dauert noch zu lange. Diese Herausforderung dient als durchgehendes Beispiel.',
  ]},
  catHeaders: ['Nr.','Tool','Kategorie'],
  catRows: [
    ['1','Salesforce','L — Leadsuche & -management'],
    ['2','Google Workspace','P — Produktivität & Zusammenarbeit'],
    ['3','Zoom','K — Kommunikation & Planung'],
    ['4','HubSpot','L'],
    ['5','Slack','P'],
    ['6','LinkedIn Sales Navigator','L'],
    ['7','DocuSign','K'],
    ['8','Office 365','P'],
    ['9','ChatGPT','K'],
  ],
  whyImportant: { title: 'Warum digitale Tools wichtig sind', items: [
    'Effizienzsteigerung: automatisieren manuelle Aufgaben, wodurch mehr aktive Verkaufszeit entsteht',
    'Verbesserte Kundenbetreuung: personalisierte Kommunikation statt Standardansprachen',
    'Kollaboration: Echtzeit-Kommunikation über Abteilungsgrenzen hinaus',
  ]},
  toolProfiles: [
    { title: 'Tool 1 · Apollo.io', paragraphs: [
      'Was es macht: B2B-Kontaktdatenbank mit verifizierten Kontakten, kombiniert mit Tools zur Kundenansprache und integriertem Lead-Scoring.',
      'Nutzen: ersetzt mehrere Einzeltools und verkürzt die Zeit von der Zielgruppendefinition bis zur ersten Kontaktaufnahme.',
      'Bei LeadPilot: gezielte Filterung von Vertriebsleitern in Maschinenbau- und IT-Unternehmen — genau das eigene ICP.',
    ]},
    { title: 'Tool 2 · Calendly', paragraphs: [
      'Was es macht: cloudbasierte Terminplanung mit Kalendersynchronisation; Interessenten buchen selbst.',
      'Nutzen: macht E-Mail-Ping-Pong bei der Terminfindung überflüssig.',
      'Bei LeadPilot: Customer Success nutzt Calendly für Onboarding- und Kick-off-Gespräche.',
    ]},
  ],
  hypothesis: { title: 'Hinweis', variant: 'warning', paragraphs: ['Gedankenexperiment: rein hypothetische Annahme, dass das Sales-Team von LeadPilot ohne ein CRM-Produkt arbeitet.'] },
  toolboxHeaders: ['Aufgabe','Einzeltool','Ablauf'],
  toolboxRows: [
    ['Alle Leads und Kundendaten verwalten','Excel','Jeder Lead wird mit Status und letztem Kontaktdatum in einer Tabelle erfasst.'],
    ['Neue Leads finden, die zum ICP passen','Apollo.io','Filterung nach Branche, Mitarbeiterzahl; Treffer als CSV exportiert.'],
    ['Benachrichtigung bei neuem Lead','Zapier / Make','Bei neuer Zeile geht automatisch eine Slack-Nachricht an den Mitarbeiter.'],
    ['Termine koordinieren','Calendly','Buchungslink direkt in der Erstansprache-E-Mail.'],
  ],
  limits: { title: 'Die drei Grenzen dieses Ansatzes', items: [
    'Fehlende App-Verbindung: Informationen müssen manuell übertragen werden.',
    'Fehlende Verkettung: kein durchgehender Workflow ohne manuelles Eingreifen.',
    'Fehlende zentrale Datenbasis: Pipeline-Status muss aus mehreren Quellen zusammengeführt werden.',
  ], footnote: 'Ein CRM-System wie LeadPilot würde genau das ersparen.' },
};

export const PLANUNG = {
  intro: { title: 'Der Rahmen: Anschlussfinanzierung', variant: 'warning', paragraphs: [
    'Diese 6 Monate fallen in die Vorbereitungsphase der Anschlussfinanzierung. Marketing muss nachweisbar an Churn, Trial-to-Paid und KI-Scoring-Nutzung arbeiten.',
  ]},
  timeline: { title: '6-Monats-Roadmap, August 2026 – Januar 2027', items: [
    'Aug 2026 · Launch — LeadPilot Connect (Zapier/Make-Sprint): 20 Trial-Signups im ICP-Segment · Budget 2.500 €',
    'Sep 2026 · Adoption — KI-Scoring-Nutzung hochziehen: 47 % → 55 % · Budget 3.375 €',
    'Okt 2026 · Conversion — Trial-to-Paid optimieren: 19 % → 21 % · Budget 3.375 €',
    'Nov 2026 · Brand — Sichtbarkeit vor der Budgetsaison · Budget 3.375 €',
    'Dez 2026 · Retention — NPS, Churn & Jahresend-Renewals: NPS 37 → 39 · Budget 2.500 €',
    'Jan 2027 · Growth — Neujahrs-Pipeline-Push: 8 Neukunden · Budget 4.250 €',
  ]},
  chartBudget: { type:'bar', labels:['Aug','Sep','Okt','Nov','Dez','Jan'], datasets:[{label:'Budget',data:[2500,3375,3375,3375,2500,4250],color:'#00D9C6'}] },
  chartKpi: { type:'bar', labels:['Neukunden/Mon.','CAC (€)','Trial-to-Paid (%)','Churn (%)','KI-Scoring (%)'], datasets:[
    {label:'Basis (2025)',data:[4,862,18,2.8,47],color:'#7CEFE6'},
    {label:'Ziel Jan 2027',data:[8,720,24,2.2,65],color:'#FF7A3D'},
  ]},
  kpiHeaders:['KPI','Basis (2025)','Ziel Jan 2027','OKR-Zielwert 2026'],
  kpiRows:[
    ['Neukunden/Monat','~4','8','—'],
    ['Marketing-CAC','862 €','720 €','—'],
    ['Trial-to-Paid','18 %','24 %','≥ 26 %'],
    ['Monatlicher Churn','2,8 %','2,2 %','< 1,8 %'],
    ['KI-Scoring-Nutzung','47 %','65 %','≥ 65 %'],
  ],
  budgetHeaders:['Monat','Phase','Budget'],
  budgetRows:[
    ['August 2026','Launch','2.500 €'],
    ['September 2026','Adoption','3.375 €'],
    ['Oktober 2026','Conversion','3.375 €'],
    ['November 2026','Brand','3.375 €'],
    ['Dezember 2026','Retention','2.500 €'],
    ['Januar 2027','Growth','4.250 €'],
    ['Gesamt','','19.375 €'],
  ],
  note: { title: 'Budget-Einordnung', variant: 'info', paragraphs: [
    '19.375 € entsprechen gut zwei Dritteln des anteiligen Halbjahresbudgets (27.500 € = 6/12 von 55.000 € Marketing & Ads 2026).',
  ]},
};

export const KAMPAGNE = {
  intro: { title: 'Anschluss an die Produkt-Roadmap', variant: 'info', paragraphs: [
    'Die Zapier/Make-Anbindung (v2.1) war für Q2 2026 vorgesehen und ist mittlerweile ausgeliefert. Diese Kampagne macht die technische Fertigstellung vertrieblich sichtbar.',
  ]},
  kpis: [
    { label: 'Primärziel', value: '20', unit: 'Trials', note: 'im Sprint-Zeitraum' },
    { label: 'Feature-Adoption', value: '≥15', unit: 'Kunden', note: 'aktivierte Integration' },
    { label: 'Budget', value: '2.500', unit: '€', note: 'Launch-Sprint', highlight: true },
    { label: 'Cost per Trial', value: '≤100', unit: '€', note: 'Ziel-CPL' },
  ],
  chartBudget: { type:'doughnut', labels:['Paid Social (Retargeting)','Content-Produktion','Sonstiges/Freelance','Kontingenz'], datasets:[{data:[1000,875,375,250],colors:['#00D9C6','#7CEFE6','#A7B0BA','#FF7A3D']}] },
  quote: '„LeadPilot verbindet sich — kein Lead bleibt zurück, egal wo er entsteht."',
  zielgruppe: 'Primär: Vertriebsleiter-Volker, Neuinteressenten im ICP-Segment. Sekundär: Growth-/Pro-Bestandskunden mit größerem Tool-Stack.',
  headers: ['Tag','Content','Kanal'],
  rows: [
    ['Mo 24.08.','Landingpage live + Teaser-Post','LinkedIn, Website'],
    ['Di 25.08.','Feature-Announcement','E-Mail Bestandskunden'],
    ['Mi 26.08.','Launch-Post + Blogartikel','LinkedIn, Blog'],
    ['Do 27.08.','Use-Case „Website-Lead landet automatisch"','LinkedIn'],
    ['Fr 28.08.','Tutorial „In 3 Minuten zur ersten Automatisierung"','YouTube, LinkedIn'],
    ['Mo 31.08.','Social Proof / Kundenzitat','LinkedIn'],
    ['Di 01.09.','Blogartikel „5 Automatisierungen, die Zeit sparen"','Blog'],
    ['Mi 02.09.','Start Retargeting-Ads','LinkedIn Ads'],
    ['Do 03.09.','Vorher/Nachher-Post','LinkedIn'],
    ['Fr–So 04.–06.09.','Abschluss-Post + interne Auswertung','LinkedIn'],
  ],
  note: { title: 'Risiken (Kurzfassung)', variant: 'warning', paragraphs: [
    'Persona wenig digitalaffin — Botschaft auf Nutzen statt Markennamen fokussieren · enger Zeitrahmen · Ablenkung vom eigentlichen Adoptions-Hebel KI-Scoring.',
  ]},
  internalResourcesNote: 'Interne Kampagnen-Unterlagen (Roadmap-Präsentation, Kampagnenbrief, Leitfaden, Landingpage, Kunden-Präsentationen) liegen als separate Dateien vor und sind hier aus Performance-Gründen nicht eingebettet.',
};
