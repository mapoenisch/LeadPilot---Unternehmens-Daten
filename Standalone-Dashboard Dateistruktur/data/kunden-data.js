export const ICP = {
  note: { title: 'Abgrenzung zur Buyer Persona', variant: 'info', paragraphs: [
    'Das ICP arbeitet auf Unternehmensebene (Firmografie, Situation, Budget) und ist damit die Ebene oberhalb der Buyer Persona. Die Buyer Persona („Vertriebsleiter-Volker") beantwortet die Frage, wer innerhalb dieses Unternehmens die Kaufentscheidung trifft. Volker ist der typische Entscheider innerhalb eines LeadPilot-ICP-Unternehmens.',
  ]},
  firmografieHeaders: ['Kriterium','Ideal-Ausprägung'],
  firmografieRows: [
    ['Branche','Maschinenbau/Industrie, IT & Software, Großhandel, Agenturen'],
    ['Unternehmensgröße','0–200 Mitarbeitende; Sweet Spot bei ca. 20–100 Mitarbeitenden'],
    ['Jahresumsatz','ca. 2–30 Mio. €; Sweet Spot bei 5–20 Mio. €'],
    ['Kundenanzahl','ca. 50–1.000 aktive Kunden bzw. Interessenten parallel'],
    ['Vertriebsteamgröße','2–20 Vertriebsmitarbeitende'],
    ['Region','DACH-Raum, Schwerpunkt Deutschland'],
  ],
  triggerHeaders: ['Kriterium','Ideal-Ausprägung'],
  triggerRows: [
    ['CRM-Reifegrad','Kein CRM im Einsatz oder reine Verwaltung über Excel-/Google-Listen'],
    ['Lead-Quellen','Mehrere parallele Quellen (Messen, Website, LinkedIn, Empfehlungen)'],
    ['Spürbarer Schmerz','Vertriebsleitung berichtet von „verlorenen" Leads, unklarem Pipeline-Überblick'],
    ['Wachstumsphase','Wachsendes Team bzw. steigendes Lead-Volumen'],
  ],
  phaseHeaders: ['Unternehmensphase','Einordnung'],
  phaseRows: [
    ['Gründungsphase','ungeeignet — Kein wiederholbarer Vertriebsprozess, zu geringes Lead-Volumen'],
    ['Wachstumsphase','ideal — Bestehendes Geschäft, das Vertrieb und Kundenzahl aktiv ausbaut'],
    ['Konsolidierung / Konzern','ungeeignet — Feste Salesforce-/SAP-Prozesse, lange Beschaffungszyklen'],
  ],
  techHeaders: ['Kriterium','Ideal-Ausprägung'],
  techRows: [
    ['Tool-Stack','Excel/Google Sheets, ggf. Apollo.io, Calendly — kein etabliertes Enterprise-CRM'],
    ['Budget','Vorhanden, aber begrenzt; zahlungsbereit im Bereich 49–89 € pro Nutzer/Monat'],
    ['Entscheidungsprozess','Vertriebsleiter entscheidet allein oder mit der Geschäftsführung'],
    ['IT-Ressourcen','Keine eigene IT-Abteilung → schnelle Einführung ohne technisches Projekt'],
    ['DSGVO','Muss-Kriterium beim Kunden'],
    ['Vertragsgestaltung','Ideal: kurze Laufzeiten bzw. monatliche Kündbarkeit'],
  ],
  exclusion: { title: 'Ausschlusskriterien (Negative Fit)', subtitle: 'Bei diesen Unternehmen würde sich der Vertriebsaufwand bewusst nicht auszahlen:', items: [
    'Großkonzerne über 200 Mitarbeitende mit komplexen Compliance- und Integrationsanforderungen',
    'Unternehmen mit etabliertem Enterprise-CRM, bei denen Wechselkosten den Nutzen übersteigen',
    'Reine B2C-Unternehmen ohne mehrstufigen, beratungsintensiven Vertriebsprozess',
    'Vertriebsteams mit nur einer Person, bei denen Nachverfolgung informell im Kopf funktioniert',
    'Unternehmen ohne laufendes Software-Budget bzw. Kleinstunternehmen im Gründungsstadium',
    'Kunden, die ISO 27001 oder TISAX voraussetzen',
  ]},
  beispielHeaders: ['Merkmal','Angabe'],
  beispielRows: [
    ['Unternehmen','Mittelständischer Maschinenbau-Zulieferer, Raum Stuttgart'],
    ['Mitarbeitende','ca. 85'],
    ['Jahresumsatz','ca. 14 Mio. €'],
    ['Kundenanzahl','ca. 220 aktive Kunden, laufend neue Leads aus Messen und Website'],
    ['Unternehmensphase','Stabile Wachstumsphase'],
    ['Vertriebsteam','7 Personen, geführt von einem Head of Sales'],
    ['Aktueller Stand','Leads werden zwischen E-Mail-Postfach und Excel-Liste verwaltet'],
    ['Schmerzpunkt','Kein Überblick, wer sich wann zuletzt gemeldet hat'],
    ['Budget-Fit','Bereit für das Growth-Paket (10–50 Nutzer, 89 €/Nutzer/Monat)'],
  ],
  fazit: { title: 'Fazit für die Praxis', paragraphs: [
    'LeadPilot fokussiert die Lead- und Vertriebsressourcen konsequent auf B2B-KMU mit 0–200 Mitarbeitenden aus Maschinenbau, IT, Großhandel oder Agenturen im DACH-Raum.',
    'Dieses ICP bestimmt künftig die Auswahl von Zielbranchen für Content und Kampagnen sowie die Qualifizierung eingehender Leads.',
  ]},
  justierung: { title: 'ICP-Justierung 2026', paragraphs: [
    'Best-Fit: Maschinenbau, IT/Software, Großhandel mit 20–100 MA, Excel-CRM oder kein CRM, 3–15 Vertriebsmitarbeitende.',
    'Problematisch: Unternehmen unter 5 MA ohne dedizierten Vertriebsleiter; Branchen mit sehr langen B2B-Zyklen (> 6 Monate).',
    'Justierung: Fokus stärker auf IT-/Software-Dienstleister und Agenturen.',
  ]},
};

export const PERSONA = {
  steckbrief: { title: 'Vertriebsleiter-Volker — Steckbrief', subtitle: 'Head of Sales bei einem mittelständischen Maschinenbau-Zulieferer', items: [
    'Alter: 47 Jahre', 'Wohnort: Raum Stuttgart', 'Familie: verheiratet, 2 Kinder (14 & 17)', 'Ausbildung: Diplom-Kaufmann (BWL)', 'Gehalt: 70.000 – 90.000 €', 'Team: 7 Personen', 'Erfahrung: 18 Jahre Vertrieb, 6 Jahre in Position',
  ]},
  quote: '„Ich will nicht noch eine Software lernen — ich will einfach wissen, welchen Kunden ich heute anrufen muss, bevor er zur Konkurrenz geht." — Vertriebsleiter-Volker',
  ziele: { title: 'Ziele', items: [
    'Umsatz um ca. 15 % steigern, ohne das Team zu vergrößern',
    'Eine verlässliche Pipeline-Übersicht für die Geschäftsführung liefern',
    'Den Vertrieb digitalisieren, ohne ein eigenes IT-Projekt anzustoßen',
    'Mehr Kontrolle und Überblick über die eigene Pipeline gewinnen',
    'Das Team effizienter und selbstständiger arbeiten lassen',
  ]},
  kanaele: { title: 'Bevorzugte Kanäle', items: [
    'LinkedIn — mit Abstand wichtigster B2B-Kanal in DACH, nahezu tägliche Nutzung',
    'Google & Vergleichsportale — Capterra, OMR Reviews zur ersten Orientierung',
    'Fachartikel & Webinare — zur vertieften Information vor der Kaufentscheidung',
    'Empfehlungen aus dem eigenen fachlichen Netzwerk',
    'Xing — nur noch nachrangig',
  ]},
  painPoints: { title: 'Pain Points', items: [
    'Verlorene Leads: bis zu 70 % der Marketing-Leads werden nie kontaktiert',
    'Zeitmangel: nur rund 27 % der Arbeitszeit fließt in echte Kundeninteraktion',
    'Fehlendes CRM: nur etwa 24 % der Unternehmen mit 10–49 Beschäftigten nutzen ein CRM',
    'Datenchaos: Kontakte in Excel-Listen, manuelles und aufwändiges Reporting',
    'Wenig Zeit für Tools: hoher Zeitdruck lässt kaum Raum für komplexe Systemeinführungen',
    'Neue Vertriebsmitarbeitende brauchen Wochen, um sich einzuarbeiten',
  ]},
  persoenlichkeit: { title: 'Persönlichkeit & Kaufverhalten', items: [
    'Pragmatischer „Macher"-Typ — entscheidet oft aus Erfahrung und Bauchgefühl',
    'Mittlere Digitalaffinität: offen für neue Tools, aber wenig Geduld für komplizierte Einführungsprozesse',
    'Vorsichtig und vergleichend: braucht Referenzen, kostenlose Testphase, transparente Preise, DSGVO-Konformität',
    'Scheut lange Vertragslaufzeiten',
  ]},
  zusammenfassung: 'Volker ist ein ergebnisorientierter, stark operativ eingebundener Vertriebsleiter im B2B-Mittelstand ohne eigene IT-Abteilung. Sein dringendstes Problem: Leads gehen im hektischen Tagesgeschäft unter. Vertrauen gewinnt er über Referenzen vergleichbarer KMU, eine risikofreie Testphase und eine einfache, transparente Bedienung.',
};

export const EMPATHY = {
  quadrants: [
    { title: 'Sagt', items: ['„Wir müssen im Vertrieb einfach organisierter werden."','„Für ein neues System habe ich gerade keine Zeit."','„Lieber ein Telefonat mehr als eine Tabelle mehr."'] },
    { title: 'Denkt', items: ['„Wenn wir noch mehr Leads verlieren, fällt das irgendwann auf mich zurück."','„Eigentlich müsste ich das CRM-Thema längst angegangen sein."','„Ein neues Tool darf uns nicht noch mehr Zeit kosten, als es spart."'] },
    { title: 'Fühlt', items: ['Unter Druck durch steigende Erwartungen der Geschäftsführung','Frustriert über die tägliche Zettelwirtschaft in Excel','Insgeheim unsicher, ob sein Team wirklich alle Leads im Griff hat'] },
    { title: 'Tut', items: ['Trägt Leads abends manuell in Excel nach','Vergleicht in ruhigen Minuten Tools wie Capterra oder OMR Reviews','Fragt im LinkedIn-Netzwerk gezielt nach Erfahrungen','Schiebt die Tool-Entscheidung im Tagesgeschäft immer wieder auf'] },
  ],
  heroSteps: [
    { title: '1 · Zentrales Ziel der Persona', paragraphs: ['„Ich will keinen einzigen Lead mehr verlieren, weil im hektischen Tagesgeschäft der Überblick fehlt — und ich will das lösen, ohne ein aufwändiges IT-Projekt anzustoßen."'] },
    { title: '2 · Erster Entwurf', paragraphs: ['„LeadPilot ist ein Held für Vertriebsleiter-Volker, der Leads organisieren und den Überblick behalten möchte, damit nichts mehr vergessen wird."', 'Feedback: zu lang und redundant, Ende bleibt vage — eine Funktionsbeschreibung statt eines konkreten Ergebnisses.'] },
    { title: '3 · Verfeinertes Hero Statement', paragraphs: ['„LeadPilot ist ein Held für Vertriebsleiter-Volker, der keinen Lead mehr verlieren und seinem Team ohne zusätzlichen Aufwand mehr Abschlüsse ermöglichen möchte."'], highlight: true },
  ],
};

export const SEGMENTE = {
  chart: { type: 'bar', labels: ['Maschinenbau','IT/Software','Großhandel','Agenturen'], datasets: [{ label: 'ARR gesamt', data: [178560,112320,78960,42000], colors: ['#00D9C6','#7CEFE6','#A7B0BA','#FF9A66'] }] },
  branchHeaders: ['Branche','Kunden','Anteil Kunden','Ø MRR / Kunde','ARR gesamt','Anteil ARR','Typisches Profil'],
  branchRows: [
    ['Maschinenbau / Industrie','24','36 %','620 €','178.560 €','43 %','Zulieferbetriebe mit 20–100 MA'],
    ['IT / Software','18','27 %','520 €','112.320 €','27 %','Systemhäuser und Softwareanbieter'],
    ['Großhandel','14','21 %','470 €','78.960 €','19 %','Technischer und regionaler Handel'],
    ['Agenturen','10','15 %','350 €','42.000 €','10 %','Werbe- und Kommunikationsagenturen'],
    ['Gesamt','66','100 %','520 €','411.840 €','100 %','—'],
  ],
  regionHeaders: ['Region','Kunden','Anteil','Einordnung'],
  regionRows: [
    ['Deutschland','61','92 %','Kernmarkt, Schwerpunkt Süd- und Westdeutschland'],
    ['Österreich','3','5 %','Einzelkunden über Empfehlung'],
    ['Schweiz','2','3 %','Einzelkunden, DSGVO-Argumentation trägt zusätzlich'],
  ],
  note: { title: 'Was die Struktur zeigt', variant: 'success', paragraphs: [
    'Der Maschinenbau ist mit 36 % der Kunden und 43 % des ARR das wirtschaftlich stärkste Segment.',
    'Agenturen sind das schwächste Segment: 15 % der Kunden, aber nur 10 % des ARR — hier konzentriert sich auch der Churn.',
    'Formulierungshinweis: Fünf Auslandskunden sind keine DACH-Marktabdeckung.',
  ]},
};

export const TOP10 = {
  headers: ['#','Kunde','Branche','Paket','Nutzer','ARR','Anteil','NPS','Upsell','Status'],
  rows: [
    ['1','Kunde A (Getränkegroßhandel)','Großhandel','Pro','30','28.800 €','7,0 %','62','niedrig','✅ aktiv'],
    ['2','Kunde B (Antriebstechnik)','Maschinenbau','Growth','20','21.360 €','5,2 %','58','mittel','✅ aktiv'],
    ['3','Kunde C (Technischer Großhandel)','Großhandel','Growth','18','19.224 €','4,7 %','46','niedrig','🟡 beobachten'],
    ['4','Kunde D (Media-Agentur)','Agenturen','Growth','15','16.020 €','3,9 %','51','mittel','✅ aktiv'],
    ['5','Kunde E (IT-Consulting)','IT / Software','Growth','13','13.884 €','3,4 %','64','hoch','✅ aktiv'],
    ['6','Kunde F (Baustoffhandel)','Großhandel','Growth','12','12.816 €','3,1 %','40','niedrig','🟡 beobachten'],
    ['7','Kunde G (Fördertechnik)','Maschinenbau','Growth','12','12.816 €','3,1 %','55','mittel','✅ aktiv'],
    ['8','Kunde H (Maschinenbau-Zulieferer)','Maschinenbau','Growth','11','11.748 €','2,9 %','68','hoch','✅ aktiv'],
    ['9','Kunde I (Softwarehaus)','IT / Software','Growth','10','10.680 €','2,6 %','71','hoch','✅ Referenzkunde'],
    ['10','Kunde J (Elektrogroßhandel)','Großhandel','Growth','9','9.612 €','2,3 %','49','mittel','✅ aktiv'],
    ['Top 10 gesamt','—','—','—','150','156.960 €','38,1 %','56','—','—'],
  ],
  note: { title: 'Konzentrationsrisiko', variant: 'warning', paragraphs: [
    'Die zehn größten Kunden tragen 38 % des ARR, der größte allein 7 %.',
    'Der Verlust der drei größten Accounts entspräche 17 % des ARR und würde den Runway um rund zwei Monate verkürzen.',
    'Zwei der zehn Kunden liegen mit einem NPS unter 50 im Beobachtungsbereich — beide im Großhandel.',
  ]},
};

export const CS = {
  kpis: [
    { label: 'Account-Churn', value: '2,8', unit: '% / Mon.', note: 'entspricht 29 % pro Jahr' },
    { label: 'Gekündigte Accounts', value: '17', unit: '', note: 'bei Ø 51 Accounts im Jahresmittel', highlight: true },
    { label: 'Ø MRR der Kündiger', value: '129', unit: '€', note: 'gegenüber 520 € Gesamtdurchschnitt' },
    { label: 'Gross Revenue Retention', value: '88', unit: '%', note: 'Ziel 92 %', highlight: true },
    { label: 'Net Revenue Retention', value: '101', unit: '%', note: 'Expansion gleicht Churn knapp aus' },
    { label: 'Onboarding-Abschluss', value: '74', unit: '%', note: 'Ziel 90 %', highlight: true },
  ],
  metricHeaders: ['Kennzahl','Wert','Auswertung'],
  metricRows: [
    ['Gekündigte Accounts 2025','17','33 % des durchschnittlichen Accountbestands'],
    ['Ø MRR der gekündigten Accounts','129 €','entspricht 2–3 Nutzern im Starter-Paket'],
    ['Ø Nutzer der gekündigten Accounts','2,6','unterhalb der ICP-Mindestgröße'],
    ['Anteil am MRR-Verlust','12 %','33 % der Accounts, aber nur 12 % des Umsatzes'],
    ['Expansion 2025','+2.400 € MRR','8 Upgrades Starter → Growth plus Nutzer-Erweiterungen'],
    ['Time-to-Value','11 Tage','Ziel unter 7 Tage'],
    ['Ø Support-Lösungszeit','31 h','häufigste Kategorie: Onboarding-Fragen (42 %)'],
  ],
  reasonHeaders: ['Kündigungsgrund','Fälle','Anteil','Ableitung'],
  reasonRows: [
    ['Zu klein, kein dedizierter Vertrieb','8','47 %','ICP-Problem — Mindestgröße im Funnel einführen'],
    ['Onboarding nie abgeschlossen','5','29 %','Produktproblem — geführter Trial-Flow erforderlich'],
    ['Preis','2','12 %','vertretbar, kein struktureller Hebel'],
    ['Wechsel zum Wettbewerber','2','12 %','beide zu Pipedrive'],
  ],
  note: { title: 'Churn ist hier kein Produktproblem, sondern ein Zielkunden-Problem', variant: 'warning', paragraphs: [
    '76 % der Kündigungen entfallen auf zwei Ursachen, die beide vor dem Vertragsabschluss entstehen: falsche Kundenauswahl und fehlende Aktivierung.',
    'Das Ideal Customer Profile weist Ein-Personen-Vertriebe bereits heute ausdrücklich als Negative-Fit aus.',
    'Eine ICP-Schärfung wirkt gleichzeitig auf Churn, CAC-Effizienz und Deckungsbeitrag.',
  ]},
};
