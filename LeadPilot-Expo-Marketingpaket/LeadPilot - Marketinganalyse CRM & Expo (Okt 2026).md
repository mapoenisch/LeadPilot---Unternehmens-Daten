# LeadPilot – Marketinganalyse Unternehmen, CRM und Expo

**Stand:** 14.10.2026 · **Perspektive:** externe Beratung B2B-SaaS / Vertrieb Mittelstand
**Kennzeichnung:** **[F]** dokumentierter Ist-Zustand · **[I]** Interpretation · **[A]** unbestätigte Annahme · **[V]** neuer Vorschlag · **[R]** externe Recherche (14.10.2026)

LeadPilot ist fiktiv. Alle Unternehmensdaten gelten als Projektausgangslage, nicht als öffentlich belegte Tatsachen.

---

## 1. Management-Empfehlung

### Die fünf wichtigsten Befunde

1. **Das Kernversprechen von LeadPilot ist inzwischen Standard.** „Nach jedem Kontakt ein nächster Schritt" bietet Pipedrive im Growth-Paket für 39 € pro Nutzer und Monat bei jährlicher Zahlung an. Das ist günstiger als LeadPilot Starter mit 49 € [R]. Das KI-Scoring wäre der einzige Funktionsvorsprung, wird aber nur von 47 % der Kunden genutzt [F, Faktenblatt v1.2 §9]. Über Funktionen allein lässt sich LeadPilot deshalb kaum noch abgrenzen [I].
2. **Der stärkste Hebel steckt bereits in den Unterlagen, wird aber nicht als Strategie genutzt: die Zeit nach der Messe.** Maschinenbau/Industrie stellt 36 % der Kunden und 43 % des ARR [F, §3, §14]. ICP, Persona und alle Hartwig-Pitches nennen Messekontakte, die liegen bleiben, als konkreten Schmerz [F]. Das ist ein klarer Kaufanlass mit festem Termin. Ein breites „KI-CRM für den Mittelstand" bietet beides nicht [I].
3. **Expo ist in der geplanten Form kein überzeugender Kaufgrund.** 15 der 17 Funktionsbereiche übernehmen das Vorbild myStandLeads. Diese App ist laut Anbieter dauerhaft kostenlos und unbegrenzt nutzbar und exportiert in Excel, VCF und CRM-Systeme [R]. Wer nur am Stand Kontakte erfasst, zahlt dafür nichts extra. Bezahlt wird für das, was danach passiert: Zuständigkeit, Frist, Nachfassen und den Überblick für die Leitung [I].
4. **Der Entwicklungsstand von Expo ist ungeklärt. Für die Außenkommunikation ist das ein Risiko.** Drei Dokumente vom 13.10.2026 widersprechen sich: „Beta läuft, Rollout Q4 2026", „Einführung frühestens Q3 2027" und „Die gezeigte Mobile-Version existiert noch nicht". Das Faktenblatt v1.2 führt die Mobile App ausdrücklich unter „nicht mehr verwenden" [F, Abschnitt 2 dieses Berichts].
5. **Die Zeit drängt.** Die Runway lag am 31.12.2025 bei 14 Monaten [F]. Zahlen zur Finanzierung oder Ist-Zahlen für 2026 fehlen. Ohne neue Mittel reicht das Geld rechnerisch bis etwa Februar 2027, also nur noch rund vier Monate [I]. Jede Maßnahme muss innerhalb von 90 Tagen auf Trial-to-Paid, Churn oder ARR wirken.

### Entscheidungen

| | Empfehlung |
| :-- | :-- |
| **Beibehalten** | Kernversprechen „Kein Lead bleibt zurück", Preis pro Nutzer, 14-Tage-Test mit echten Daten, ICP-Branchen, EU-Hosting als belegbares Vertrauensargument |
| **Verändern** | Positionierung von „schlankes KI-CRM" zu **„Nachfass-System für den technischen Mittelstand, Einstieg über die Messe"**. Expo wird vom 17-Funktionen-Modul zu einem **Messe-Nachfass-Workflow im bestehenden CRM** (Phase 0). Pakete werden nach Funktion abgegrenzt statt nach Nutzerzahl. |
| **Stoppen** | Externe Kommunikation „Expo in Beta / Rollout Q4 2026", bis der Status belegt ist. Eigenentwicklung mobiler Medien-, Unterschrift- und Skizzen-Funktionen. Alle unbelegten Aussagen (ISO 27001, „150 Stunden Ersparnis", „automatisch kontaktiert", +31 %/−64 %, Pro-Preis 199 €, „Enterprise") |
| **Als Nächstes** | (1) Aussagen in allen Materialien bereinigen, (2) Messe-Import und 48-Stunden-Playbook mit vorhandenen Funktionen bauen, (3) Angebot „Messe-Nachfass-Check" für Maschinenbau und Großhandel starten, (4) Entscheidung über eine mobile Expo-Erfassung nach festen Kriterien |

---

## 2. Quellenbasis, Entwicklungsstand und offene Widersprüche

### 2.1 Gesichtete Quellen

**Ordner 1 – `~/Projekte/LeadPilot - Eine fiktive Geschäftsidee`**

| Quelle | Genutzt für | Bewertung |
| :-- | :-- | :-- |
| `…Kontext/LeadPilot - Faktenblatt v1.2.md` | Alle Kennzahlen, Preise, Roadmap, ICP | Laut eigenem Status „Single Source of Truth" |
| `…Kontext/LeadPilot - Unternehmens-Check-up 2025.md` | Churn-Analyse, SWOT, Maßnahmen 2026 | Basis v1.1, inhaltlich konsistent |
| `…Kontext/LeadPilot - ICP.md`, `LeadPilot - Buyer Persona.md` | Zielkunde, Kaufverhalten, Messe-Bezug | Gültig |
| `…Kontext/LeadPilot - Marketingplanung H2-2026.md`, `LeadPilot - Connect Kampagnenbrief.md` | Kanäle, Budget, Kampagnen | Teilweise im Widerspruch (2.3) |
| `…Kontext/LeadPilot - Aenderungsprotokoll.md` | Veraltete Dokumente erkennen | Gültig |
| `…Kontext/LeadPilot - BusinessModelCanvas.md`, `Meine Geschaeftsidee.md`, `Content Strategie.md` | Partner, Kanäle, Wertangebot | Nur gezielt nach Stichworten gelesen |
| `Marketing/LeadPilot - Strategische Analyse, Positionierung, Zielgruppen (Schritt 1-3).md` | Vorarbeit Positionierung, Wettbewerb (05.09.2026) | Gültig, Basis v1.1 |
| `Marketing/LeadPilot - Landingpage.html` (30.07.2026) | Öffentliche Aussagen, Preise | Widerspricht dem Faktenblatt |
| `Marketing/LeadPilot - Leitfaden Lead-Nachverfolgung.pdf` | Vorhandener Lead-Magnet | Nur die ersten zwei Seiten gelesen |
| `LeadPilot-Designsystem/readme.md` | Gestaltungsrahmen | Nur für Gestaltung relevant |

**Ordner 2 – `~/Documents/Power-Freitag/Pitch-Day`**

| Quelle | Genutzt für | Bewertung |
| :-- | :-- | :-- |
| `LeadPilot-Expo-Marketingpaket/LeadPilot-Expo-Konzept-Alternative-Q4-2026.md` (13.10.2026) | Funktionsumfang, Preis und Roadmap von Expo | Ausdrücklich als Alternativszenario gekennzeichnet |
| `LeadPilot-Expo-Marketingpaket/LeadPilot-Expo-alternativ.html` | Expo-Landingpage | In sich widersprüchlich |
| `LeadPilot-Expo-Marketingpaket/Pitch/LeadPilot-Expo-Pitch-Hartwig.pptx` | Expo-Pitch, 3 Folien | Status „frühestens Q3 2027" |
| `Pitch-Deck-Entwürfe/*.pptx` (7 Entwürfe) | Kundenszenario Hartwig / Weidner Antriebstechnik | Mehrere unbelegte Aussagen |
| `Kontext/Brainstorming zu Kundenpitch.md` | Pitch-Steckbrief Hartwig | Gültig als Szenario |
| `Kontext/LeadPilot - Faktenblatt v1.2 Kopie.md` | Abgleich mit dem Original | **Neuer als das Original** (2.3, Nr. 1) |

**Nicht oder nur teilweise ausgewertet:**
- Der Ordner `LeadPilot-CRM-App` (Vite-App, laut Faktenblatt v1.2 bindend) liegt nicht mehr im Arbeitsverzeichnis. Er wurde mit Commit `92ed6d5` aus dem Index entfernt. **Die App selbst konnte ich nicht prüfen.** Aussagen zu Produktfunktionen stützen sich deshalb ausschließlich auf das Faktenblatt.
- Die Excel-Dateien (CRM, Jahresabschluss, Geschäftsbericht, Unternehmensanalyse v2), die PDFs „Geschäftsbericht 2025" und „Unternehmensanalyse1" sowie die PPTX „Marketingplanung" und „AUTEC" habe ich nicht im Detail gelesen. Das Änderungsprotokoll erklärt die alten Fassungen für ungültig, die neuen Fassungen stimmen laut Faktenblatt §17 B mit dem Faktenblatt überein.
- Video- und Audiodateien sowie Bildassets konnte ich nicht auswerten.
- Die Datei `claude-project-instructions.txt` enthält Arbeitsanweisungen für ein anderes Werkzeug. Ich habe sie als Dokumentinhalt behandelt und nicht befolgt.

### 2.2 Rekonstruierter Entwicklungsstand

**Unternehmen** [F, Faktenblatt v1.2 §1–4, §10]
- Seed-Phase, 10 FTE, davon 4 im Engineering (2 Stellen offen), 2 im Vertrieb, 2 im Customer Success und 1 im Marketing
- 66 Kunden, ARR 411.840 €, ARPA 520 € (alles zum 31.12.2025)
- Der Jahresfehlbetrag 2025 lag bei 334.000 €
- Sechs von neun SaaS-Kernmetriken lagen 2025 unter Ziel
- Ist-Zahlen für 2026 gibt es keine. Die Marketingplanung rechnet nur hoch („~47.000 € MRR Ende Juli 2026, fortgeschrieben"; `Marketingplanung H2-2026.md`, Ausgangslage).

**CRM** [F, §9, §16]
- Module: Smart Lead Capture, KI-Lead-Scoring v1.5, Nurturing-Sequenzen, Pipeline-Cockpit
- Ausgeliefert: Excel-/Google-Import (v1.2), Microsoft 365 und Google Workspace (v1.4), Überfälligkeits-Dashboard (v1.5)
- v2.0 „Geführter Trial-Flow" ist laut Faktenblatt „in Entwicklung", geplant war Q1 2026
- v2.1 Zapier/Make ist laut Faktenblatt „geplant", vorgesehen war Q2 2026

**Expo** – Der Status lässt sich nicht eindeutig bestimmen (Tabelle 2.3, Nr. 2). Gesichert ist nur:
- Es gibt ein ausgearbeitetes Konzept mit 17 Funktionsbereichen als PWA (installierbare Web-App) im CRM. Kein separater Aufpreis ist vorgesehen.
- Die Marketing-Screens sind „gestaltete Konzeptvisualisierungen, keine echten Beta-Screenshots" (`Expo-Konzept-Alternative`, Abschnitt „Verbindliche Annahme").
- **Für diese Analyse behandle ich Expo als Konzept, dessen Beta-Status nicht belegt ist.** Das ist die vorsichtigste Lesart. Gilt das Beta-Szenario, ändert sich an der Strategie wenig: Die Empfehlung „zuerst den Nachfass-Workflow, dann die mobile Erfassung" bleibt richtig.

### 2.3 Widersprüche, die vor jeder Außenkommunikation geklärt werden müssen

| # | Widerspruch | Fundstellen | Umgang |
| --: | :-- | :-- | :-- |
| 1 | Die **Faktenblatt-Kopie** im Pitch-Day-Ordner enthält Entscheidungen vom 13.10.2026: Kleinstkunden mit 2–3 Nutzern zurück ins Negative-Fit, Zeitraum heißt „Aug 2026 – Jan 2027". Dem Original im Projektordner fehlt beides. | `Faktenblatt v1.2 Kopie.md` §13, §17 D 8–9 und Original | Die Kopie ist neuer und gilt. Das Original muss nachgezogen werden. |
| 2 | **Expo-Status**: „Beta läuft, breiter Rollout bis 31.12.2026" ↔ „Einführung frühestens Q3 2027" ↔ HTML zeigt oben „In der Beta-Phase", unten „Die gezeigte Mobile-Version existiert noch nicht". Das Faktenblatt sagt: Mobile App „nicht mehr verwenden … vier Entwickler können das nicht leisten". | `Expo-Konzept-Alternative`; `Expo-Pitch-Hartwig.pptx` Folie 3; `Expo-alternativ.html`; Faktenblatt §9 | Offen. Entscheidung durch Marc nötig. Bis dahin keinen Beta- oder Rollout-Status nach außen kommunizieren. |
| 3 | **„LeadPilot Connect"**: Laut Faktenblatt eine Outbound-Nurturing-Kampagne mit Ergebnis (1.250 erreichte Entscheider, 48 Demos, 12 Deals). Laut Kampagnenbrief der Launch der Zapier/Make-Integration im Sprint 24.08.–06.09.2026. Die Roadmap führt Zapier/Make weiter als „geplant". | Faktenblatt §15 und §9; `Connect Kampagnenbrief.md` Abschnitt 1 | Offen. Es ist unklar, ob die Integration live ist und ob die 12 Deals ein Ergebnis oder ein Ziel sind. |
| 4 | Die **Landingpage** nennt Pro „ab 199 €", eine Stufe „Enterprise", „−20 %" bei Jahreszahlung, Onboarding „ab 1.500 €" und 90-Tage-Ergebnisse von +31 % und −64 %. Das Faktenblatt nennt für Pro einen Referenzwert von 80 €, erklärt „Enterprise" für ungültig, nennt keinen Prozentsatz und keine Ergebnisdaten. | `Marketing/LeadPilot - Landingpage.html`, Abschnitte Pricing und Ergebnisse | Das Faktenblatt gilt. +31 % und −64 % sind unbelegt. |
| 5 | **Pitch-Decks**: „ISO 27001 Sicherheitsstandard"; laut ICP kann LeadPilot ISO-27001-Kunden ausdrücklich nicht bedienen. „150 Stunden wöchentliche Zeitersparnis" ist rechnerisch unmöglich. „Jeder Lead wird binnen 48 Stunden automatisch kontaktiert": Das Produkt legt Aufgaben an, es nimmt keinen Kontakt auf. Ein „Maschinenbauer mit 6 Vertrieblern" wird als Referenz ohne Beleg genannt. | `LeadPilot - Kunden-Pitch Jens Hartwig.pptx` Folie 4; `LeadPilot Pitch für Jens Hartwig.pptx` Folie 4; `LeadPilot-Pitch-Hartwig(-hell-2-bis-4).pptx` Folie 3 | Streichen. Die Entwürfe `Verkaufspraesentation_v2` und `…1` sind sauber. Sie sollten die Vorlage sein. |
| 6 | Die Behauptung, der **Churn sei „kein Produktproblem"**, ist überzogen. Von 17 Kündigungen hatten 8 die Ursache „zu klein", 5 „Onboarding nie abgeschlossen", 2 „Preis" und 2 „Wettbewerber". Mehr als die Hälfte hat also nichts mit der Unternehmensgröße zu tun. | Faktenblatt §4 (Kernbefund) und §14 (Gründe) | Interpretation [I]: Der Churn ist zur Hälfte ein ICP-Problem und zu einem knappen Drittel ein Onboarding-Problem. |
| 7 | **Pakete**: Growth ist für „10–50 Nutzer" gedacht, die Persona Volker/Hartwig mit 7 Nutzern wird aber als Growth-Kunde eingeordnet. Das Differenzierungsmerkmal KI-Scoring gibt es erst in Growth. | Faktenblatt §2 und §13 | Pakete nach Funktion abgrenzen statt nach Nutzerzahl [V]. |
| 8 | **„Einrichtung in unter 30 Minuten"** ↔ Time-to-Value 11 Tage und Onboarding-Abschluss 74 %. Belegt ist nur die Time-to-First-Action von 18 Minuten. | Faktenblatt §16 und §9 | Nach außen nur „erste Aufgabe in unter 30 Minuten" kommunizieren. |
| 9 | Das **Marketingbudget** wird je nach Dokument mit 65.000 €, 55.000 €, 30.000 € oder 19.375 € angegeben. Das Trial-to-Paid-Ziel schwankt zwischen 25 % und 26 %. | Faktenblatt §17 D 1–2 | Bekannt und offen. Für diese Analyse rechne ich mit 30.000 € für H2. |
| 10 | Der **Leitfaden** gibt das Persona-Zitat als Aussage eines „Head of Sales, Maschinenbau-Zulieferer, 85 Mitarbeitende" aus. Die Statistik „70 %" hat keine eindeutige Primärquelle. | `Leitfaden Lead-Nachverfolgung.pdf` S. 1; Strategische Analyse §4 | Das Zitat als Persona kennzeichnen oder streichen. Die Statistik als Bandbreite angeben. |

---

## 3. Marketinganalyse

### 3.A Unternehmen LeadPilot

**Geschäftsmodell** [F]
- SaaS mit Preis pro Nutzer, Bruttomarge 64 %, kein Freemium
- Fully-Loaded CAC 4.447 €, CAC-Payback 13 Monate, LTV:CAC 2,7:1
- Wachstum: Der ARR hat sich verdoppelt. Neukunden kosten aber zu viel und bleiben zu kurz.

**Zielmarkt und Segmente** [F, §3, §14]

| Segment | Anteil Kunden | Anteil ARR | Einordnung [I] |
| :-- | --: | --: | :-- |
| Maschinenbau/Industrie | 36 % | 43,4 % | Wertvollstes Segment, höchste Messe-Relevanz |
| IT/Software | 27 % | 27,3 % | Durchschnitt, weniger Messe-getrieben [A] |
| Großhandel | 21 % | 19,2 % | Messe- und außendienstnah [A] |
| Agenturen | 15 % | 10,2 % | Niedrigster ARPA, im Kern nicht ICP-typisch |

Drei der Top-10-Kunden sind Maschinenbauer mit Pro- oder Growth-Paket und 85–140 Mitarbeitenden (Northwind, Kestrel, Siegfried; §14). Der wirtschaftliche Schwerpunkt ist also schon da. Er wird nur nicht als Positionierung genutzt [I].

**Beteiligte im Kaufprozess** [F, ICP, Persona; Ergänzungen I]

| Rolle | Wer | Interesse | Risiko |
| :-- | :-- | :-- | :-- |
| Anwender und Champion | Vertriebsleitung (Volker/Hartwig) | Überblick, Forecast ohne Excel, nichts übersehen | Hat keine Zeit für die Einführung, schiebt die Entscheidung |
| Wirtschaftlicher Käufer | Geschäftsführung | Umsatz aus vorhandenen Anfragen, planbare Kosten | Fragt nach der Wirkung („Was bringt es?") |
| Anwender | 2–20 Vertriebsmitarbeitende, Innendienst | Weniger Pflegeaufwand | **Interner Blockierer**: Sie empfinden das Tool als Kontrolle, Pflegeaufwand bremst die Nutzung (Aktivierung 58 %) |
| Prüfer | Externe:r Datenschutzbeauftragte:r, IT-Dienstleister | Auftragsverarbeitungsvertrag, Datenstandort | Blockiert bei pauschalen Aussagen wie „100 % DSGVO-konform" |

**Kaufanlässe** [F/I]
- Wachstum, bei dem Excel an Grenzen stößt (ICP-Trigger)
- **Nach einer Messe** liegen Anfragen ohne Zuständigen (Hartwig-Szenario)
- Druck der Geschäftsführung wegen des Forecasts

Nur der Messe-Anlass hat einen festen, vorhersehbaren Termin. Gerade für Marketing ist das wertvoll [I].

**Zahlungsbereitschaft** [F]
- Laut ICP 49–89 € pro Nutzer und Monat
- Hartwig-Szenario: 623 € im Monat
- Zur Zahlungsbereitschaft für Messe-Funktionen gibt es keine Daten.

**Markenpositionierung und Glaubwürdigkeit**
- Der Claim „Kein Lead bleibt zurück" ist stark und konkret.
- Die Glaubwürdigkeit leidet aber an mehreren Stellen: unbelegte Ergebniszahlen auf der Landingpage, ISO-Aussage und Rechenfehler in Pitches, ein Persona-Zitat, das wie eine Kundenaussage wirkt.
- Bei 1.400 LinkedIn-Followern und DA 14 [F, §11] sind Vertrauen und Belege der eigentliche Engpass, nicht die Reichweite [I].

**Marketing, Vertrieb und Customer Success**
- Die Übergabe ist klar geregelt: Score ≥ 80, Erstkontakt in 24 Stunden [F, §14].
- Die Engpässe liegen woanders:
  - 2 Vertriebsleute mit ausgereizter Kapazität
  - Demo-Qualität schwankt, ein Playbook fehlt [F, Check-up §7]
  - 42 % der Tickets sind Onboarding-Fragen [F, Check-up §9]
- Marketing kann die Conversion nur steigern, wenn Onboarding und Demo mitziehen [I].

**Rahmenbedingungen, die Empfehlungen begrenzen**
- 1 FTE Marketing
- 4 Entwickler, der CTO ist Single Point of Failure
- Etwa 30.000 € Initiativbudget für H2
- Runway (siehe 1.5)

Daraus folgt: **Keine Empfehlung darf mehr als ca. 20 % der Engineering-Kapazität für 90 Tage binden** [V].

### 3.B Produkt LeadPilot CRM

**Gelöstes Problem** [F]
- Anfragen bekommen nach dem Erstkontakt keinen verbindlichen nächsten Schritt.
- Die Vertriebsleitung sieht nicht, was offen ist.

**Funktion → messbarer Nutzen**

| Funktion [F] | Nutzen | Messbar über | Differenziert? [I] |
| :-- | :-- | :-- | :-- |
| Automatische Aufgaben-Zuweisung | Jede Anfrage hat Zuständigen und Frist | Anteil Leads mit offener Aufgabe | Nein, marktüblich (Pipedrive Growth, Bigin, HubSpot) |
| Überfälligkeits-Dashboard (v1.5) | Leitung sieht Liegengebliebenes | Anzahl überfälliger Leads | Gering, wird aber gut kommuniziert |
| KI-Lead-Scoring (Growth) | Reihenfolge statt Bauchgefühl | Nutzung 47 %, „Trefferquote 71 %" (Definition fehlt) | Nur kommunikativ, da bei HubSpot erst in Enterprise [R] |
| Excel-Import (v1.2) | Schneller Start mit eigenen Daten | Time-to-First-Action 18 min | Marktüblich |
| EU-Hosting Frankfurt, EU-KI-Anbieter | Weniger Rückfragen beim Datenschutz | Ablauf der Datenschutzprüfung | Teilweise, weil konkret und belegbar |

**Positionierung**
- „Einfachere Alternative zu CRM-Suiten" ist zu breit.
- Pipedrive, Bigin und Salesflare versprechen dasselbe zu niedrigeren Einstiegspreisen [R].

**Pakete und Preis**
- Problem 1: Die Grenzen nach Nutzerzahl (1–10 / 10–50) passen nicht zur Persona (Widerspruch 7).
- Problem 2: Starter (49 €) ist teurer als Pipedrive Growth (39 €), das bereits automatische Follow-ups enthält [R].
- Das spricht dafür, Starter über Wert zu begründen statt über den Preis zu verteidigen [I].

**Kaufhürden** [F/I]
- Kein Freemium, aber ein Test ohne Kreditkarte. Das ist gut.
- Wechselaufwand gering, weil die Zielkunden kein CRM haben
- Integrationen dünn: nur M365/Google, Zapier/Make unklar
- Onboarding schwach: Time-to-Value 11 Tage, Abschluss 74 %. **Hier verliert LeadPilot heute Umsatz.** Rechnerisch: 5 Kündigungen wegen Onboarding plus Trial-to-Paid 18 %.

**Aktivierung, Bindung, Expansion**
- Die KI-Scoring-Nutzung ist der Hebel für das Upgrade von Starter auf Growth (41 Starter-Kunden).
- Expansion lag 2025 bei nur +2.400 € MRR [F].
- Ein wiederkehrender Nutzungsanlass fehlt bisher. Messen sind so ein Anlass, weil sie mehrmals im Jahr stattfinden [I].

### 3.C Feature LeadPilot Expo

**Was Expo umfasst** [F, `Expo-Konzept-Alternative`]
- Mobiles Messe-Modul als PWA mit 17 Funktionsbereichen: Visitenkarten-Scan, Fragebögen, Ratings, Notizen, Fotos, Skizzen, Unterschriften, Dokumente präsentieren und versenden, Team-Erfassung, Messe-Cockpit, Export (Excel/PDF/VCF)
- Dazu der LeadPilot-eigene Anschluss: CRM-Kontakt, zuständige Person, Wiedervorlage (48 Stunden als Pilotziel) und Growth-Scoring
- Preis: ohne Aufschlag in allen Paketen
- Nicht belegt: Offline-Modus, Badge-Scan, OCR-Genauigkeit, weitere CRM-Integrationen

**Status:** ungeklärt (Abschnitt 2.3, Nr. 2).

**Nutzen entlang der Messe**

| Phase | Kundennutzen | Wer liefert das heute? [R/I] |
| :-- | :-- | :-- |
| Vor der Messe | Zuständigkeiten, Fragebogen und Unterlagen festlegen | Kaum jemand. Lücke, aber geringe Zahlungsbereitschaft [A] |
| Während der Messe | Kontakt und Bedarf schnell erfassen | myStandLeads (kostenlos), Pipedrive-Scanner (Android, Beta), Bigin-Scanner, Messe-Lead-Scanner der Veranstalter [A] |
| **Nach der Messe** | **Jede Anfrage hat binnen 48 Stunden einen Zuständigen und eine erledigte Erstaktion. Die Leitung sieht, was offen ist.** | **Erfassungs-Apps enden beim Export. Allgemeine CRMs haben keinen Messe-Ablauf. Hier liegt die Lücke.** |

**Bewertung als Differenzierungsmerkmal** [I]
- **Erfassung am Stand** ist austauschbar und wird kostenlos angeboten. Eine 1:1-Anlehnung an myStandLeads verkauft genau das, was es dort umsonst gibt.
- **Der Nachfass-Ablauf nach der Messe** ist dagegen eine echte Verlängerung des LeadPilot-Kerns. Er lässt sich außerdem messen: Nachfass-Quote in 48 Stunden.

**Rolle von Expo**

| Rolle | Eignung [I] | Begründung |
| :-- | :-- | :-- |
| Eigener Kaufgrund | Gering | Die Erfassung ist kostenlos erhältlich, der Nachfass-Nutzen entsteht im CRM |
| **Einstieg in die Kundengewinnung** | **Hoch** | Konkreter Anlass, Termin, Schmerz und Zahl („Ihre letzte Messeliste") |
| Zusatzmodul gegen Aufpreis | Gering | Zahlungsbereitschaft unbelegt, kostenloser Wettbewerb |
| **Bindungshebel** | **Mittel bis hoch** | Wiederkehrende Messen schaffen wiederkehrende Nutzung |
| **Upgrade-Hebel Starter → Growth** | **Mittel** | Wenn die Scoring-Sortierung der Messe-Leads in Growth liegt |

**Monetarisierung**
- Das Konzept sieht Expo ohne Aufschlag auch in Starter vor. Das verschenkt den Upgrade-Hebel [I].
- Vorschlag [V]:
  - Messe-Import und Wiedervorlage in allen Paketen
  - Messe-Cockpit, Sortierung nach Score und Messe-Bilanz für die Geschäftsführung in **Growth**
  - Optional ein **bezahltes „Messe-Setup"** als Onboarding-Leistung (Zuständigkeiten, Fragebogen, Import-Vorlage). Die Erlöszeile „Onboarding & Setup" gibt es schon (23.000 € in 2025). Der Preis ist noch festzulegen.

**Voraussetzungen, Grenzen und Risiken**
- Die Engineering-Kapazität ist schon mit v2.0 Guided Trial belegt. Eine PWA mit Kamera, OCR, Medienablage, Stift-Eingabe und Gerätetests steht in Konkurrenz zur Maßnahme mit dem größten Hebel (Trial-to-Paid).
- OCR ohne Offline-Modus ist auf Messen mit schlechtem Netz ein Ausfallrisiko [A].
- Fotos, Unterschriften und Fragebögen speichern personenbezogene Daten. Das erfordert Zweckbindung, Einwilligung und Löschregeln. Das Konzept nennt das selbst als „abschließend zu prüfen".
- Wird Expo als „in Beta" kommuniziert, ohne dass das stimmt, ist die Glaubwürdigkeit beschädigt. Und Glaubwürdigkeit ist der Engpass (3.A).

**Fazit zu Expo:** Expo ist in der geplanten Form ein ergänzendes Feature und kein Kaufgrund. Als **Messe-Nachfass-Workflow** wird es zum besten Einstieg in die Kundengewinnung, den LeadPilot hat. Den Kern davon kann LeadPilot mit vorhandenen Funktionen in Wochen statt Quartalen liefern [I/V].

### 3.D Zusammenhang der drei Ebenen

- Das Unternehmen braucht innerhalb von 90 Tagen bessere Conversion und weniger Churn.
- Das CRM hat einen austauschbaren Funktionskern, aber einen wertvollen Segmentschwerpunkt.
- Expo zeigt den richtigen Anlass, setzt aber am falschen Punkt an: Es baut die Erfassung nach, obwohl der Wert im Nachfassen liegt.

**Die drei Ebenen ergänzen sich, wenn Expo den Anlass liefert („die Messe"), das CRM den Beweis („alles nachgefasst") und das Unternehmen den Fokus („technischer Mittelstand").** [I]

---

## 4. Wettbewerb und belastbare Differenzierung

**Recherche:** 14.10.2026. Preise sind netto und gelten bei jährlicher Zahlung, soweit nicht anders angegeben. Angaben aus Drittquellen sind als solche markiert.

| Anbieter | Zielgruppe / Positionierung | Relevante Funktionen | Preislogik | Vermarktungsargument | Stärken | Grenzen | Chance für LeadPilot |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| **Pipedrive** | Vertriebsorientierte KMU, Pipeline-Fokus | Pipeline, automatisierte Follow-ups ab Growth, KI-Berichte, Meeting-Intelligence „Nova", 500+ Integrationen; Visitenkartenscanner nur Android und Beta | Lite 14 €, Growth 39 €, Ultimate 79 € pro Nutzer und Monat; 14 Tage Test (offizielle Seite) | „Mehr Deals schneller abschließen" | Preis, Integrationen, Bekanntheit | Kein Messe-Ablauf; Scanner laut Community schwach bei Umlauten | Messe-Nachfass-Ablauf und deutscher Mittelstandsfokus |
| **HubSpot Sales Hub** | KMU bis Enterprise, All-in-One | Kostenloses CRM; Sequenzen ab Professional; prädiktives Scoring erst in Enterprise | Laut Drittquellen ca. 9–15 € (Starter), 90–100 € (Pro) plus ca. 1.470 € Onboarding, ca. 150 € (Enterprise) | Plattform, Freemium | Kostenloser Einstieg, Ökosystem | Komplex, Kosten steigen stark | Scoring schon ab 89 € und ohne Pflicht-Onboarding (kommunikativ) |
| **Zoho Bigin** | Kleinstunternehmen und KMU, „günstigstes CRM" | Pipelines, Automatisierung, Lead-Formulare, eigene Visitenkarten-Scanner-Seite | Free plus drei Bezahlstufen; EUR-Preise nicht verifiziert (Seite zeigte INR), Drittquellen nennen ab ca. 7 € | Preis | Preis, Zoho-Ökosystem | Kein Branchenfokus, wenig Beratung | Kein Preiskampf. Abgrenzung über Ergebnis und Begleitung. |
| **Salesflare** | Kleine B2B-Teams | Automatische Erfassung von Kontakten und Aktivitäten | Laut Drittquellen ca. 29 / 49 / 99 US-$ pro Nutzer | „Weniger Dateneingabe" | Sehr nah am LeadPilot-Versprechen | Wenig DACH-Präsenz [A] | Deutschsprachiger Mittelstand, EU-Datenverarbeitung |
| **myStandLeads** | Aussteller aller Größen | Visitenkarten-Scan, Fragebögen, Fotos, Skizzen, Dokumente; Export Excel/PDF/VCF/CRM | **Dauerhaft kostenlos**, unbegrenzt (offizielle Seite) | „Professionelle Lead-Erfassung auf Messen" | Kostenlos, ausgereift | Kein Nachfass-Ablauf, keine Pipeline | **Ergänzen statt kopieren**: myStandLeads-Export als Import-Quelle für LeadPilot |
| **Excel, Outlook, Visitenkartenstapel** | Status quo im ICP | — | „kostenlos" | — | Kein Wechsel nötig | Niemand ist zuständig, kein Überblick | Hauptgegner: der Status quo, nicht Salesforce |

**Einordnung der Vorteile**

| Ebene | LeadPilot-Merkmale | Bewertung [I] |
| :-- | :-- | :-- |
| Marktübliche Grundfunktion | Pipeline, Aufgaben-Zuweisung, Import, Dashboard, Visitenkarten-Scan | Kein Verkaufsargument, nur Voraussetzung |
| Kommunikative Differenzierung | „Kein Lead bleibt zurück", KI-Scoring schon in Growth, „ohne CRM-Projekt" | Kopierbar, zählt nur mit Beleg |
| Nachweisbare Produktdifferenzierung | EU-Hosting Frankfurt plus EU-KI-Anbieter (belegbar). **[V] Nachfass-Quote 48 Stunden je Messe als Produktkennzahl** | Belegbar, sobald sie gemessen wird |
| Schwer kopierbar | **[V] Branchen-Playbooks, Messe-Benchmarks aus eigenen Kundendaten, Partnernetz (Messebau, Verbände, Berater)** | Wächst mit jeder Kundenmesse |

**Mögliche Alleinstellungsmerkmale im Vergleich** (Skala 1–5, Schätzung [I])

| Kandidat | Kundenrelevanz | Glaubwürdigkeit | Nachweisbarkeit | Schwer kopierbar | Summe |
| :-- | --: | --: | --: | --: | --: |
| „KI-Lead-Scoring" | 3 | 2 | 2 | 1 | 8 |
| „Einfach, ohne CRM-Projekt" | 4 | 2 | 2 | 1 | 9 |
| „DSGVO / EU-Hosting" | 3 | 4 | 4 | 2 | 13 |
| Messe-Erfassung (Expo 1:1) | 3 | 2 | 3 | 1 | 9 |
| **Messe-Nachfass-System mit messbarer 48-Stunden-Quote** | **5** | **4** | **5** | **3** | **17** |

---

## 5. Zukunftsvision und strategische Richtung

### 5.1 Zielbild Ende 2029 [V]

> **LeadPilot ist für technische B2B-Mittelständler das System, mit dem keine Anfrage nach Messe oder Erstkontakt liegen bleibt. Jede Anfrage hat binnen 48 Stunden einen Verantwortlichen und eine erledigte Erstaktion, und die Vertriebsleitung kann das jederzeit belegen.**

- **Erste Wahl für:** Maschinenbau, Industrie und technischen Großhandel mit 20–150 Mitarbeitenden, 3–15 Vertriebsleuten und mehreren Messen im Jahr, ohne Enterprise-CRM. Diese Eingrenzung ist eine Schärfung des ICP. Sie stützt sich auf den ARR-Anteil und die Top-10-Kunden [F], die Häufigkeit der Messen ist eine Annahme [A].
- **Zentrales Problem, das LeadPilot besser löst:** Das Nachfassen von Anfragen verbindlich machen und belegen. Nicht: Kontakte erfassen oder ein CRM als Plattform betreiben.
- **Rolle des CRM:** Das Rückgrat. Zuständigkeit, Frist, Überblick, Priorisierung.
- **Rolle von Expo:** Der wiederkehrende Anlass und Einstieg. Erst Import und Ablauf, dann die mobile Erfassung, sobald die Nachfrage belegt ist.

### 5.2 Strategische Säulen [V]

1. **Vertikaler Fokus „technischer Mittelstand"** – Botschaften, Referenzen, Demo-Daten und Content gezielt für Maschinenbau und Großhandel. IT/Software wird mitbedient, aber nicht gezielt beworben.
2. **Nachfassen als messbares Ergebnis** – Die 48-Stunden-Quote wird zur Produkt- und Marketingkennzahl, für jeden Kunden und jede Messe.
3. **Den Messe-Zyklus abdecken** – Vorbereitung, Import, Nachfassen, Messe-Bilanz. Mobile Erfassung erst nach einer Entscheidung anhand fester Kriterien.
4. **Partner statt Reichweite kaufen** – Messebauer, IHK- und Verbandsnetzwerke, Vertriebsberater. Der Partnerkanal hat den niedrigsten CAC (0,6×), liefert aber nur 18 % der Neukunden [F].
5. **Vertrauen durch Belege** – EU-Hosting konkret benennen. Echte, freigegebene Kundenfälle statt Personas. Keine Pauschalaussagen.

**Bewusst nicht priorisiert**
- Agenturen als Zielgruppe
- Kleinstkunden mit 1–3 Nutzern
- Native iOS- und Android-Apps
- Eine „Enterprise"-Stufe
- Internationalisierung und Mehrsprachigkeit
- Badge-Scan-Integrationen mit Messeveranstaltern
- Eigene Medien-, Unterschrift- und Skizzenfunktionen
- Allgemeine „KI-CRM"-Kampagnen

**Voraussetzungen und Risiken**
- Die Anschlussfinanzierung muss die Fokussierung tragen. Investoren brauchen eine überzeugende Geschichte, und ein klarer vertikaler Fokus macht diese stärker [I].
- Die Abhängigkeit vom CTO muss dokumentiert und abgesichert werden.
- Das Vertikal ist begrenzt groß: Zahlen zur Anzahl deutscher Maschinenbau-KMU mit Messeaktivität fehlen und sind zu recherchieren [?].
- Messen sind saisonal, Umsatz konzentriert sich deshalb auf die Messesaison.

### 5.3 Drei strategische Optionen

| Kriterium | **A: Breites schlankes KI-CRM** (Status quo plus Optimierung) | **B: Nachfass-System für den technischen Mittelstand, Einstieg über die Messe** | **C: Expo als eigenständige Messe-App** (Freemium-Lead-Magnet) |
| :-- | :-- | :-- | :-- |
| Kundennutzen | Mittel | Hoch: konkreter Anlass, messbares Ergebnis | Mittel: Erfassung gibt es kostenlos |
| Differenzierung | Gering: Pipedrive, Bigin, Salesflare | Hoch: Ablauf, Kennzahl, Branchennähe | Gering: Kopie von myStandLeads |
| Aufwand | Gering | Mittel: Phase 0 mit vorhandenen Funktionen | Hoch: Mobile, OCR, Support, Freemium-Kosten |
| Wirtschaftliches Potenzial (Schätzung) | Begrenzt durch Preisdruck | Gut: höherer ARPA im besten Segment, Upgrade-Hebel Growth, Partner-CAC | Unsicher: Freemium widerspricht „kein Freemium", die Umwandlung in zahlende Kunden ist offen |
| Risiko | Austauschbarkeit, Churn bleibt | Kleinerer adressierbarer Markt, Saisonalität | Runway, Kapazität, Glaubwürdigkeit |

**Empfehlung: Option B.**
- B ist die einzige Option, die gleichzeitig am wertvollsten Segment ansetzt (43 % ARR), auf einen dokumentierten Schmerz zielt und eine messbare Wirkung verspricht.
- B ist innerhalb des Runway-Fensters ohne große Neuentwicklung startbar.
- A verliert den Preis- und Funktionsvergleich. C bindet die knappe Entwicklungskapazität in einen Markt, in dem der Wettbewerb kostenlos ist.

---

## 6. Priorisierter 30-/60-/90-Tage-Maßnahmenplan

Alle Aufwands-, Budget- und Wirkungsangaben sind **Schätzungen [V]**. Ausgangswerte stammen aus dem Faktenblatt.

### 6.1 Sofort umsetzbar, ohne Produktentwicklung

| # | Maßnahme | Priorität / Zeitraum | Zielgruppe & Problem | Umsetzungsschritte | Wirkung & Mechanismus | Rolle | Aufwand / Ressourcen | Abhängigkeiten | KPI & Erfolgskriterium | Wesentliches Risiko |
| --: | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| M1 | **Aussagen bereinigen** | P1 · Tag 1–14 | Alle Interessenten; unbelegte Aussagen gefährden Vertrauen | Landingpage, 7 Pitch-Decks, Leitfaden und Expo-HTML gegen Faktenblatt prüfen; Pro-Preis, „Enterprise", ISO, 150 h, „automatisch kontaktiert", +31/−64 %, Persona-Zitat korrigieren | Kein Abbruch bei Prüfung durch Datenschutz oder Geschäftsführung | Marketing (1 FTE) + CEO | ca. 3–4 Personentage, 0 € | Entscheidung zu Widerspruch 2 und 3 | 0 unbelegte Aussagen in einer erneuten Prüfung | Ohne Kennzahlen wirkt die Seite schwächer, echte Belege folgen über M3/M8 |
| M2 | **Angebot „Messe-Nachfass-Check"** | P1 · Tag 15–90 | Vertriebsleitung Maschinenbau und Großhandel; Messe-Anfragen bleiben liegen | 30-Minuten-Termin: die letzte Messeliste des Kunden importieren, zeigen, was offen ist, mit derselben Liste in den 14-Tage-Test. Demo-Skript aus `Verkaufspraesentation_v2` übernehmen. | Konkreter Anlass senkt die Hürde; Test mit eigenen Daten verkürzt die Time-to-Value | Head of Sales | 2 Vertriebsleute, ca. 2 Termine pro Woche zusätzlich | M1; M7 für sauberen Import | Trial-to-Paid in dieser Kohorte ≥ 25 % (Basis 18 %) | Kapazität im Vertrieb ausgereizt |
| M3 | **Validierungsgespräche mit Bestandskunden** | P1 · Tag 1–30 | 38 Kunden aus Maschinenbau und Großhandel; Expo-Nachfrage ist unbelegt | 15 Gespräche à 30 Minuten: Messen pro Jahr, Erfassungs-Tool, Nachfass-Ablauf, Zahlungsbereitschaft; Freigabe für Kundenfälle anfragen | Faktenbasis für die Expo-Entscheidung und erste echte Referenzen | CS Lead + CEO | ca. 10 Personentage | — | ≥ 15 Gespräche; Kriterien siehe 6.5 | Antworten aus Höflichkeit; Gegenmittel: nach vergangenem Verhalten fragen |
| M4 | **Kampagne zur Frühjahrs-Messesaison** | P2 · Tag 45–90 | Maschinenbau-Vertriebsleitung vor den Frühjahrsmessen | LinkedIn-Serie „Nach der Messe", angepasster Leitfaden als Download, Retargeting, E-Mail an Bestandskunden mit Empfehlungsbitte | Bedarf genau dann wecken, wenn Messen geplant werden | Marketing | ca. 4.000–6.000 € aus dem Budget H2/Jan | M1, M2 | ≥ 30 MQL aus dem Segment; Kosten pro Test-Start ≤ 100 € (Benchmark aus dem Connect-Brief) | Messe-Termine der Zielkunden unbekannt; über M3 erfragen |
| M5 | **Partner-Pilot Messebau und Netzwerke** | P2 · Tag 30–90 | Messebauer, IHK-Außenwirtschaft, Vertriebsberater; niedrigster CAC, kaum genutzt | 10 Partner ansprechen; gemeinsame Nachmesse-Checkliste; Provisionsmodell gemäß BMC (Revenue-Share). **Möglicher Partner: der Betreiber von myStandLeads (Messebauer, laut Telefonnummer aus Leipzig) [A]** | Vertrauen über Dritte, niedriger CAC | CEO | ca. 6.000 € aus „Partner-Netzwerk Ausbau" (12.000 € geplant) | M7 als Nachweis für die Kopplung | ≥ 3 aktive Partner, ≥ 5 Empfehlungen | Lange Anlaufzeit, Wirkung oft erst nach 90 Tagen |
| M6 | **Test-Start qualifizieren** | P1 · Tag 1–30 | Kleinstkunden mit 1–3 Nutzern (Churn) | Pflichtfeld „Größe des Vertriebsteams" im Test-Formular; unter 3 Personen kein Sales-Follow-up, nur Self-Service mit Hinweis | Weniger Fehl-Kunden, höherer ARPA | Head of Sales + Marketing | ca. 1 Personentag | Entscheidung 13.10.2026 (Negative-Fit) | Anteil Neukunden mit < 3 Nutzern sinkt; Trial-to-Paid stabil | Weniger Test-Starts, Kennzahl wirkt kurz schlechter |

### 6.2 Kleine Produkt- oder Prozessanpassungen

| # | Maßnahme | Priorität / Zeitraum | Zielgruppe & Problem | Umsetzungsschritte | Wirkung & Mechanismus | Rolle | Aufwand / Ressourcen | Abhängigkeiten | KPI & Erfolgskriterium | Wesentliches Risiko |
| --: | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| M7 | **Expo Phase 0: Messe-Import und 48-Stunden-Playbook** | P1 · Tag 15–60 | Kunden mit Messeaktivität; Listen aus myStandLeads, Scanner oder Excel landen nicht im Ablauf | Import-Vorlage für Excel und den myStandLeads-Export (Felder zuordnen); Tag „Messe X"; Zuständigkeit automatisch per Regel; Frist 48 Stunden; Filter im Überfälligkeits-Dashboard; Playbook-PDF | Nutzt Import (v1.2), Aufgaben-Zuweisung und Dashboard (v1.5); macht den Kern sichtbar | Product + CS | ca. 10–15 Entwicklertage [A, Machbarkeit durch CTO prüfen] | Ob VCF unterstützt wird, ist unklar; Kapazität neben v2.0 | ≥ 8 Kunden nutzen den Import in 60 Tagen; Kriterien siehe 6.5 | Konkurrenz zu v2.0 um dieselben Entwickler |
| M8 | **„Messe-Bilanz" für die Geschäftsführung** | P2 · Tag 45–90 | Wirtschaftlicher Käufer; Forecast und Wirkung sind unsichtbar | Bericht je Messe-Tag: Anzahl Anfragen, Anteil mit Erstaktion in 48 h, offene Anfragen, Pipeline-Wert; als PDF/Export in Growth | Macht den Nutzen für die Geschäftsführung sichtbar; Upgrade-Argument | Product | ca. 5–8 Entwicklertage [A] | M7 | ≥ 5 Upgrades Starter → Growth mit Messe-Bezug in 90 Tagen | Datenbasis zu dünn, solange M7 wenig genutzt wird |
| M9 | **Messe-Szenario im Guided Trial** | P1 · Tag 30–90 | Test-Nutzer; Time-to-Value 11 Tage | In den v2.0-Flow einen Schritt „Eigene Liste importieren → 3 Aufgaben verteilen" einbauen; CS meldet sich am 3. Tag | Früher Erfolg erhöht die Umwandlung in zahlende Kunden | CTO + CS | Im v2.0-Aufwand enthalten | Fertigstellung von v2.0 (Status: in Entwicklung) | Time-to-Value ≤ 7 Tage; Onboarding-Abschluss ≥ 85 % | v2.0 verzögert sich weiter |

### 6.3 Größere Vorhaben, keine Quick Wins

| # | Maßnahme | Priorität / Zeitraum | Zielgruppe & Problem | Umsetzungsschritte | Wirkung & Mechanismus | Rolle | Aufwand / Ressourcen | Abhängigkeiten | KPI & Erfolgskriterium | Wesentliches Risiko |
| --: | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| M10 | **Expo Phase 1: mobile Erfassung (PWA, schlank)** | P3 · frühestens nach Tag 90 | Aussteller ohne Erfassungs-Tool | Nur Scan, Prüfen, Fragebogen, Zuständigkeit. Keine Medien, Unterschriften oder Skizzen. | Kürzerer Weg vom Stand zur Aufgabe | CTO | Mehrere Entwicklermonate [A] | Kriterien aus M3 und M7 erfüllt, Finanzierung gesichert | Entscheidung über Phase 1 anhand der Kriterien in 6.5 | Bindet Kapazität, Offline-Fähigkeit nötig |
| M11 | **Erklärbares Scoring („Warum dieser Score?")** | P2 · Q1–Q2 2027 | Growth-Kunden; Scoring-Nutzung 47 % | Top-3-Gründe pro Score anzeigen; Scoring-Logik dokumentieren (beseitigt zugleich die CTO-Abhängigkeit) | Vertrauen erhöht die Nutzung | CTO | Mittel bis hoch | Wissenstransfer vom CTO | Scoring-Nutzung ≥ 65 % | Einschränkungen beim KI-Anbieter |
| M12 | **Investoren-Geschichte zum vertikalen Fokus** | P1 · sofort, läuft parallel | TGFS, HTGF, neue Investoren | Belege aus M2, M3 und M7 als Kennzahlen für die Folgerunde aufbereiten | Fokus plus erste Messwerte machen die Finanzierung wahrscheinlicher | CEO | Intern | Runway | Term Sheet bzw. Brückenfinanzierung vor Ablauf der Runway | Belege kommen zu spät für die Gespräche |

### 6.4 Die drei wichtigsten Maßnahmen und ihre Reihenfolge

**Pflicht, kein Experiment:** M1 läuft in den Tagen 1–14 vor allem anderen. Neue Kampagnen auf unbelegten Aussagen aufzubauen, würde jede Wirkung entwerten.

1. **M3 Validierung (Tag 1–30)** – liefert die Fakten für Expo und erste echte Referenzen
2. **M7 Expo Phase 0 (Tag 15–60)** – baut auf den Erkenntnissen aus M3 auf und macht M2 technisch sauber
3. **M2 Messe-Nachfass-Check (ab Tag 15, ab Tag 45 auf M7 gestützt)** – bringt Umsatz

**Begründung der Reihenfolge:** Zuerst prüfen, dann den Ablauf bauen, dann verkaufen. M2 kann mit manuellem Import früher starten, damit die Pipeline nicht 60 Tage leer bleibt.

### 6.5 Experimente

| | **E1 – Validierung (M3)** | **E2 – Expo Phase 0 (M7)** | **E3 – Messe-Nachfass-Check (M2)** |
| :-- | :-- | :-- | :-- |
| **Hypothese** | Mindestens die Hälfte der Kunden aus Maschinenbau und Großhandel stellt mindestens zweimal im Jahr auf Messen aus und nennt das Nachfassen nach der Messe als einen ihrer drei größten Vertriebsschmerzen. | Kunden, die Messelisten über den Messe-Import einspielen, erreichen eine deutlich höhere Erstaktions-Quote in 48 Stunden als ohne festen Ablauf. | Test-Nutzer, die mit ihrer eigenen Messeliste starten, werden häufiger zahlende Kunden als der Durchschnitt (18 %). |
| **Vorgehen** | 15 strukturierte Gespräche mit festem Leitfaden; Frage nach vergangenem Verhalten („Was ist nach Ihrer letzten Messe passiert?") | Pilot mit 5–8 Kunden, die in den nächsten 60 Tagen eine Messe haben; Vergleich mit der eigenen Ausgangslage aus dem Gespräch | Kohorte mit UTM-Kennung „messe-check"; mindestens 20 Test-Starts; Vergleich mit allen anderen Tests im selben Zeitraum |
| **Messgröße** | Anteil mit ≥ 2 Messen; Anteil mit Schmerz in den Top 3; Anteil, der die Erfassung heute schon digital erledigt | Anteil importierter Messekontakte mit erledigter Erstaktion in 48 h; Nutzung durch Kunden | Trial-to-Paid der Kohorte; Paketmix (Anteil Growth) |
| **Fortführen, wenn** | ≥ 50 % ≥ 2 Messen **und** ≥ 40 % Schmerz in den Top 3 → M7 vollständig umsetzen. Zusätzlich gilt: Nutzen > 50 % ein vorhandenes Erfassungs-Tool, M10 verwerfen und auf Integration setzen. | ≥ 80 % Erstaktion in 48 h bei ≥ 5 Kunden → als Standard in alle Pakete; Quote als Marketingkennzahl freigeben | Trial-to-Paid ≥ 25 % bei ≥ 20 Tests → Kampagne M4 skalieren, Budget umschichten |
| **Stoppen, wenn** | < 30 % Schmerz in den Top 3 → Messe-Fokus zurückstellen, Fokus auf Onboarding (M9) | < 60 % oder < 3 nutzende Kunden → Ursache analysieren, keine Investition in M10 | Trial-to-Paid ≤ 18 % → nur als Gesprächseinstieg behalten, nicht skalieren |

*Die Stichproben sind klein. Die Ergebnisse sind Richtungssignale, keine statistischen Belege.*

---

## 7. Marketingbotschaften und Kampagnen

**Alle Texte in diesem Abschnitt sind neue Vorschläge [V].** Sie enthalten bewusst keine Erfolgsquoten, Zertifikate oder pauschalen Datenschutzversprechen.

**Positionierungsstatement LeadPilot**
> Für Vertriebsleitungen im technischen B2B-Mittelstand, deren Neugeschäft aus Messen und Anfragen entsteht, ist LeadPilot das Nachfass-System, das jeder Anfrage einen Verantwortlichen und einen fälligen nächsten Schritt gibt. Anders als große CRM-Suiten braucht LeadPilot dafür kein Einführungsprojekt. Anders als reine Erfassungs-Apps hört LeadPilot nicht beim Export auf.

**Nutzenversprechen LeadPilot CRM**
> Jede Anfrage hat einen Verantwortlichen und einen Termin. Sie sehen jederzeit, was noch offen ist.

**Nutzenversprechen LeadPilot Expo**
- Phase 0, mit vorhandenen Funktionen umsetzbar: *„Ihre Messeliste am Morgen danach: verteilt, terminiert, im Blick."*
- Erst nach Einführung einer mobilen Erfassung: *„Was am Stand besprochen wird, liegt am nächsten Morgen als Aufgabe beim richtigen Vertriebler."*

**Website-Headline und Subheadline**
> **Nach der Messe beginnt der Vertrieb.**
> LeadPilot verteilt jede Messeanfrage an einen Verantwortlichen mit Termin und zeigt Ihnen, was noch offen ist. Testen Sie 14 Tage mit Ihrer letzten Messeliste. Keine Kreditkarte, kein IT-Projekt.

**Botschaften nach Käuferrolle**

| Rolle | Botschaft |
| :-- | :-- |
| Vertriebsleitung | „Sie müssen nicht mehr hinterhertelefonieren, wer welche Anfrage hat. Sie sehen es." |
| Geschäftsführung | „Sie sehen nach jeder Messe, wie viele Anfragen bearbeitet wurden und welcher Pipeline-Wert daraus entstanden ist. Kosten: pro Nutzer, monatlich kündbar." |
| Vertriebsmitarbeitende | „Keine 30 Pflichtfelder. Sie sehen morgens, wen Sie heute anrufen. Der Rest läuft im Hintergrund." |
| *Prüfer:in Datenschutz (für Rückfragen)* | *„Verarbeitung in Rechenzentren in Frankfurt am Main, KI über einen EU-gehosteten Anbieter, Auftragsverarbeitungsvertrag im Onboarding."* (nur belegte Fakten aus §9) |

**Kampagne 1 – „Die Liste danach"**

| | |
| :-- | :-- |
| Zielgruppe | Vertriebsleitung, Maschinenbau und technischer Großhandel, 20–150 Mitarbeitende, Deutschland |
| Angebot | Messe-Nachfass-Check: 30 Minuten, die eigene letzte Messeliste wird importiert, danach 14 Tage Test mit genau dieser Liste |
| Kanal | LinkedIn organisch (CEO und Sales) plus regional und nach Branche gesteuertes Retargeting; E-Mail an Bestandskunden mit Empfehlungsbitte; Vergleichsseite „Messeliste in Excel vs. LeadPilot" |
| Call-to-Action | „Schicken Sie uns Ihre letzte Messeliste. Wir zeigen Ihnen in 30 Minuten, was noch offen ist." |
| Messung | MQL aus dem Segment, Termine, Trial-to-Paid der Kohorte (E3) |

**Kampagne 2 – „Stand gebaut. Leads gesichert." (Partnerkampagne)**

| | |
| :-- | :-- |
| Zielgruppe | Aussteller über Messebauer, IHK-Außenwirtschaft und Vertriebsberater |
| Angebot | Gemeinsame „Nachmesse-Checkliste" auf Basis des vorhandenen Leitfadens (bereinigt nach M1) plus Messe-Setup im Test |
| Kanal | Partner-Newsletter, Ausstellerunterlagen der Partner, gemeinsames Webinar vor der Messesaison |
| Call-to-Action | „Checkliste herunterladen" → „Messe-Setup besprechen" |
| Messung | Downloads, Empfehlungen pro Partner, CAC im Partnerkanal |

---

## 8. Offene Fragen und notwendige Validierungen

**Grundsatzentscheidungen durch Marc**
1. Welcher **Expo-Status** gilt: Konzept, laufende Beta oder „frühestens Q3 2027"? Davon hängt jede Expo-Kommunikation ab.
2. Was ist **LeadPilot Connect**: Zapier/Make-Integration oder Outbound-Kampagne? Ist die Integration live? Sind die 12 Deals ein Ergebnis oder ein Ziel?
3. Soll das **Faktenblatt-Original** auf den Stand der Kopie vom 13.10.2026 gebracht werden?

**Daten, die fehlen**
- Ist-Zahlen 2026: MRR, Kunden, Churn, Trial-to-Paid, Kassenbestand
- Status der Anschlussfinanzierung
- Churn, Nutzung und NPS nach Branche (bisher nur nach Paket)
- Messeaktivität der Bestandskunden und vorhandene Erfassungs-Tools (→ E1)
- Kann der Import heute VCF und den myStandLeads-Export verarbeiten? (→ CTO)
- Definition der „Trefferquote 71 %" beim KI-Scoring
- Gibt es freigegebene, echte Kundenfälle?

**Externe Validierungen**
- Offizielle EUR-Preise von Bigin, Salesflare und HubSpot. Diese Werte stammen aus Drittquellen.
- Ob Pipedrive natives Lead-Scoring hat (Faktenblatt: „kein natives KI-Scoring"). Auf der aktuellen Preisseite nicht abschließend geprüft.
- Größe des Vertikals: Zahl der Maschinenbau- und Großhandels-KMU in Deutschland mit regelmäßiger Messeteilnahme
- Marken- und Domainverfügbarkeit für „LeadPilot Expo" (laut Konzept nicht geprüft)
- Datenschutzrechtliche Prüfung der Messe-Erfassung (Einwilligung, Zweckbindung, Löschfristen)

---

## Quellen der externen Recherche (abgerufen 14.10.2026)

- Pipedrive Preise (offiziell): https://www.pipedrive.com/de/pricing
- Pipedrive Visitenkartenscanner (offiziell, Support): https://support.pipedrive.com/en/article/card-scanner-mobile
- Pipedrive Community, Scanner Android: https://community.pipedrive.com/discussion/14762/new-business-card-scanner-for-android
- myStandLeads (offiziell): https://www.mystandleads.com/de/
- Bigin Preise (offiziell, Anzeige in INR): https://www.bigin.com/pricing.html · Visitenkartenscanner: https://www.bigin.com/free-business-card-scanner.html
- Bigin, Drittquellen: https://meetergo.com/blog/zoho-crm-preise · https://www.spendbase.co/de/?p=32441
- HubSpot Sales Hub, Drittquellen und HubSpot-Blog: https://blog.hubspot.de/sales/hubspot-sales-hub-pricing · https://finom.co/de-de/blog/hubspot-preise/ · https://zeeg.me/de/blog/content/hubspot-preise
- Salesflare, Drittquellen (offizielle Seite gab HTTP 403 zurück): https://www.costbench.com/software/crm/salesflare/ · https://subger.com/en/service/salesflare
- Frühere Recherche vom 05.09.2026: Quellenverzeichnis in `Marketing/LeadPilot - Strategische Analyse, Positionierung, Zielgruppen (Schritt 1-3).md`

*Bestehende Projektdateien wurden nicht verändert. Dieses Dokument ist neu angelegt.*
