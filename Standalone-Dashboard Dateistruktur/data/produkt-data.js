export const FUNKTION = {
  mechanism: { title: 'Der Kernmechanismus', items: [
    'Zentrale Erfassung: Alle Leads werden zentral in LeadPilot erfasst — aus Formularen, LinkedIn, E-Mail, Events, Telefonie und Importlisten.',
    'KI-Scoring: Das System bewertet jeden Lead nach Abschlusswahrscheinlichkeit und Dringlichkeit. Trefferquote der Engine: 89 %.',
    'Automatischer nächster Schritt: Nach jedem Kundenkontakt legt das System die nächste fällige Aktivität an und weist sie dem zuständigen Mitarbeiter zu.',
    'Erinnerung & Eskalation: Erinnerungen und Follow-up-Sequenzen laufen automatisch im Hintergrund; Predictive Churn Alerts warnen frühzeitig.',
    'Management-Dashboard: Der Vertriebsleiter sieht jederzeit den Status aller Leads und welche überfällig sind.',
  ]},
  bausteineHeaders: ['Baustein', 'Beispiel aus LeadPilot'],
  bausteineRows: [
    ['Auslöser (Trigger)', 'Ein neuer Kunde unterschreibt den Vertrag über DocuSign — das löst automatisch den Onboarding-Workflow aus.'],
    ['Aktionen', 'Das System legt einen Onboarding-Termin im Kalender des zuständigen CS-Mitarbeiters an und verschickt eine Willkommens-E-Mail.'],
    ['Verkettung', 'Vertrag unterschrieben → Kundenkonto anlegen → Aufgabe für Customer Success → Erinnerung nach 3 Tagen.'],
    ['App-Verbindungen', 'DocuSign, LeadPilot, Google Calendar und Slack werden verknüpft, damit der Onboarding-Prozess ohne manuelle Übertragung abläuft.'],
  ],
  intelligence: [
    { title: 'Datenanalyse', paragraphs: ['Verarbeitet große Mengen an Kundeninformationen und macht sie für den Vertrieb nutzbar.'] },
    { title: 'Lead-Scoring', paragraphs: ['Bewertet Leads automatisch nach ihrer Kaufwahrscheinlichkeit — Kernfunktion der KI-Engine.'] },
    { title: 'Vorhersagen', paragraphs: ['Nutzt KI, um zukünftige Verkaufschancen und Abwanderungsrisiken vorherzusagen (Predictive Churn Alert seit v2.2).'] },
  ],
};

export const PRICING = {
  priceHeaders: ['Paket', 'Preis / Nutzer / Monat', 'Zielgruppe', 'Leistungsumfang'],
  priceRows: [
    ['Starter', '49 €', '1–10 Nutzer', 'Lead-Erfassung, Pipeline, automatische Aufgaben-Zuweisung, Basis-Dashboard'],
    ['Growth', '89 €', '10–50 Nutzer', 'zusätzlich KI-Lead-Scoring, Automatisierungen, erweitertes Reporting, mehr Integrationen'],
    ['Pro', 'individuell', '50+ Nutzer / Volumenkunden', 'zusätzlich erweiterte Integrationen, dedizierter Support, SLA, individuelle Rollen'],
  ],
  noteRegel: { title: 'Rechenregel für alle Angebote und CRM-Einträge', variant: 'info', paragraphs: [
    'Jahreswert = Nutzeranzahl × Paketpreis × 12. Für Pro gilt ein individuell verhandelter Preis; als Referenzwert wird 80 €/Nutzer/Monat verwendet.',
    'Abo monatlich oder jährlich, Preisvorteil bei Jahreszahlung. Kein Freemium, stattdessen 14-tägige Testversion. Onboarding-Gebühr nur bei Growth und Pro.',
    'Ungültig: Die Bezeichnungen Starter Plus, Professional, Enterprise und Enterprise Plus stammen aus einer früheren Fassung und dürfen nicht mehr verwendet werden.',
  ]},
  distHeaders: ['Paket', 'Kunden', 'Anteil', 'Ø Nutzer', 'Ø MRR / Kunde', 'MRR gesamt', 'ARR gesamt', 'Anteil ARR'],
  distRows: [
    ['Starter', '41', '62 %', '5', '245 €', '10.045 €', '120.540 €', '29 %'],
    ['Growth', '22', '33 %', '10', '890 €', '19.580 €', '234.960 €', '57 %'],
    ['Pro', '3', '5 %', '14', '1.565 €', '4.695 €', '56.340 €', '14 %'],
    ['Gesamt', '66', '100 %', '6,0', '520 €', '34.320 €', '411.840 €', '100 %'],
  ],
  noteVerteilung: { title: 'Was die Verteilung aussagt', variant: 'success', paragraphs: [
    '62 % der Kunden sitzen im Starter-Paket, tragen aber nur 29 % des ARR. Genau in dieser Gruppe entsteht der gesamte Churn.',
    'Growth ist das wirtschaftlich tragende Paket: ein Drittel der Kunden, aber 57 % des Umsatzes und ein Ø MRR, der 3,6-mal so hoch liegt wie bei Starter.',
    'Daraus folgt der wichtigste Vertriebshebel 2026 — Upselling der 41 Starter-Kunden und eine Mindestgröße im Self-Service-Funnel.',
  ]},
};

export const PERF = {
  chartProdukt: { type: 'line', labels: ['Q1','Q2','Q3','Q4'], datasets: [
    { label: 'Aktivierungsrate %', data: [49,53,56,58], color: '#00D9C6', fill: true },
    { label: 'KI-Scoring-Nutzung %', data: [38,41,44,47], color: '#FF7A3D' },
  ]},
  chartChurn: { type: 'doughnut', labels: ['Zu klein / kein dedizierter Vertrieb','Onboarding nie abgeschlossen','Preis','Wechsel zum Wettbewerber'], datasets: [{ data: [8,5,2,2], colors: ['#FF7A3D','#FF9A66','#00D9C6','#A7B0BA'] }] },
  metricsHeaders: ['Metrik','Ist 2025','Ziel','Status','Kommentar'],
  metricsRows: [
    ['Uptime','99,7 %','99,5 %','✅','Einziges klar übertroffenes technisches Ziel'],
    ['Aktivierungsrate','58 %','70 %','🟡','Anteil der Accounts mit vollständiger Ersteinrichtung'],
    ['WAU / MAU','59 %','60 %','🟡','Wöchentlich zu monatlich aktive Nutzer'],
    ['Nutzung KI-Scoring','47 %','65 %','🔴','Kernfunktion wird von der Mehrheit nicht genutzt'],
    ['Onboarding-Abschlussquote','74 %','90 %','🔴','26 % der Neukunden werden nie vollständig produktiv'],
    ['Time-to-Value','11 Tage','7 Tage','🔴','Direkter Treiber des Churn-Problems'],
    ['Ø Support-Lösungszeit','31 h','24 h','🟡','Häufigste Kategorie: Onboarding-Fragen (42 %)'],
    ['CSAT','4,0','4,2','🟡','Skala 1 bis 5'],
    ['Net Promoter Score','34','40','🔴','Vorjahr 31'],
  ],
  pmfHeaders: ['Signal','Bewertung','Begründung'],
  pmfRows: [
    ['Zahlungsbereitschaft','positiv','47 Neukunden zu Vollpreis, kein Rabattdruck im Growth-Segment'],
    ['Nutzungstiefe bei Growth-Kunden','positiv','WAU/MAU von 59 % liegt im oberen Drittel für B2B-SaaS'],
    ['Weiterempfehlung','gemischt','18 % der Neukunden kommen über Partner und Empfehlung, NPS aber nur 34'],
    ['Bindung im Kernsegment','positiv','Growth- und Pro-Kunden kündigen praktisch nicht'],
    ['Bindung im Randsegment','negativ','Kleinstkunden mit 2–3 Nutzern kündigen überproportional'],
  ],
  note: { title: 'Der entscheidende Befund', variant: 'warning', paragraphs: [
    'Dass nur 47 % der Kunden das KI-Scoring nutzen, ist die kritischste Zahl des Jahres — es ist das einzige echte Differenzierungsmerkmal gegenüber Pipedrive.',
    'Wer es nicht aktiviert, erlebt LeadPilot als beliebiges Pipeline-Tool und kündigt entsprechend leichter.',
    'Die Kette ist eindeutig: langes Onboarding → geringe Aktivierung → geringe Feature-Nutzung → Kündigung.',
  ]},
};

export const ROADMAP = {
  headers: ['Release','Zeitpunkt','Inhalt','Wirkung','Status'],
  rows: [
    ['v1.2','Feb 2025','Import-Assistent für Excel- und Google-Listen','Senkt die Einstiegshürde beim Onboarding','✅ ausgeliefert'],
    ['v1.3','Mai 2025','KI-Scoring v1.5, Trefferquote 71 %','Erstes echtes Differenzierungsmerkmal','✅ ausgeliefert'],
    ['v1.4','Aug 2025','Integration Microsoft 365 und Google Workspace','E-Mail- und Kalenderdaten fließen automatisch ein','✅ ausgeliefert'],
    ['v1.5','Nov 2025','Überfälligkeits-Dashboard für die Vertriebsleitung','Zahlt direkt auf das Kernversprechen ein','✅ ausgeliefert'],
    ['v2.0','geplant Q1 2026','Geführter Trial-Flow mit Einrichtungs-Checkliste','Wichtigste Maßnahme gegen Trial-to-Paid von 18 %','🟡 geplant'],
    ['v2.1','Q2/Q3 2026','Zapier- und Make-Anbindung','Öffnet den Long Tail an Integrationen ohne Eigenentwicklung','✅ ausgeliefert'],
  ],
  note: { title: 'Was bewusst nicht auf der Roadmap steht', variant: 'warning', paragraphs: [
    'Eine Mobile App, eine HubSpot-Zertifizierung, eine LinkedIn-Sales-Navigator-Integration, Predictive-Churn-Alerts und Multi-Language-Support waren in einer früheren Planungsfassung enthalten.',
    'Für ein Team von vier Entwicklern sind sie in einem Jahr nicht darstellbar. Realistische Priorisierung heißt hier: erst die Aktivierung reparieren, dann Reichweite über offene Schnittstellen kaufen statt selbst bauen.',
  ]},
};

export const INTEGR = {
  complianceHeaders: ['Bereich','Umsetzung'],
  complianceRows: [
    ['Hosting','Ausschließlich europäische Rechenzentren, Standort Frankfurt am Main'],
    ['KI-Modelle','Über einen EU-gehosteten Anbieter — kein Direktzugriff auf US-Hyperscaler-Endpunkte'],
    ['Datenhaltung','Kundendaten verlassen den europäischen Rechtsraum nicht'],
    ['Auftragsverarbeitung','AV-Vertrag und Verfahrensverzeichnis als Standardbestandteil des Onboardings'],
    ['Verschlüsselung','TLS 1.3 im Transport, AES-256 at rest, tägliche Backups mit 30 Tagen Vorhaltezeit'],
    ['Zertifizierungen','Keine — ISO 27001 und TISAX sind bewusst nicht angestrebt und im ICP als Ausschlusskriterium hinterlegt'],
  ],
  integHeaders: ['Integration','Zweck','Status'],
  integRows: [
    ['Microsoft 365 (Outlook, Kalender)','Automatische Erfassung von Kontakten und Terminen','✅ live seit v1.4'],
    ['Google Workspace (Gmail, Kalender)','Analog zu Microsoft 365','✅ live seit v1.4'],
    ['Excel- und Google-Sheets-Import','Migration bestehender Lead-Listen beim Onboarding','✅ live seit v1.2'],
    ['CSV-Export','Reporting und Weiterverarbeitung','✅ live'],
    ['Zapier / Make','Long Tail weiterer Systeme ohne Eigenentwicklung','🟡 geplant Q2 2026'],
    ['REST-API','Individuelle Anbindungen bei Pro-Kunden','🟡 in Vorbereitung'],
  ],
  note: { title: 'Positionierung gegenüber HubSpot', variant: 'info', paragraphs: [
    'LeadPilot ist eine Alternative zu CRM-Suiten, kein Add-on. Eine HubSpot-Zertifizierung oder eine bidirektionale HubSpot-Synchronisation würde das Wertversprechen unterlaufen.',
    'Wer bereits HubSpot betreibt, gehört laut ICP ausdrücklich nicht zur Zielgruppe.',
  ]},
};
