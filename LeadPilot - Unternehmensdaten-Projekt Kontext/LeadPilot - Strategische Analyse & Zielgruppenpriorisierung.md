# LeadPilot GmbH — Strategische Analyse, Positionierung & Zielgruppenpriorisierung

**Fall:** LeadPilot (fiktives Unternehmen, Weiterbildung Digital Sales Manager, DBA) — behandelt als real existierender Wettbewerber im CRM-/Lead-Management-Markt.
**Bearbeitete Schritte:** 1. Strategische Produkt- und Markenanalyse · 2. Positionierung und Messaging · 3. Zielgruppendefinition und -priorisierung
**Explizit nicht Teil dieses Dokuments:** Schritt 4 (Scoring-Engine) und Schritt 5 (externe Profilsuche)
**Recherchemodus:** Standardrecherche (Markt, Zielgruppen, Wettbewerber, Trends, Glaubwürdigkeitsfaktoren) — durchgeführt September 2026
**Datenbasis:** LeadPilot Faktenblatt v1.1 (Single Source of Truth), Business Model Canvas, ICP, Buyer Persona, Content-Strategie, Unternehmens-Check-up 2025, Marketingplanung H2 2026, Connect-Kampagnenbrief, Landingpage, LinkedIn-Assets
**Legende:** **F** = Fakt aus bereitgestellten Unterlagen · **R** = externe Recherche (mit Quelle/Datum) · **A** = plausible Annahme/Hypothese · **E** = strategische Empfehlung · **?** = offene Frage/Informationslücke

---

## 1. Kontext- und Faktenlage

### Was ist gesichert (F)

LeadPilot GmbH ist ein 2022 in Leipzig gegründetes B2B-SaaS-Unternehmen (10 FTE, CEO Marc Pönisch, CTO Tobias Heine), das seit Q1 2024 ein KI-gestütztes Sales-CRM für Lead-Management und Vertriebsautomatisierung im B2B-Mittelstand anbietet. Kernversprechen: Jeder Lead bekommt nach Erstkontakt automatisch den nächsten fälligen Schritt zugewiesen ("Kein Lead bleibt zurück"). Zum 31.12.2025 hat LeadPilot 66 zahlende Kunden (ARR 411.840 €, MRR 34.320 €), verteilt auf Maschinenbau/Industrie (36 %), IT/Software (27 %), Großhandel (21 %) und Agenturen (15 %), ganz überwiegend in Deutschland (61 von 66 Kunden). Drei Pakete: Starter (49 €/Nutzer/Monat, 1–10 Nutzer), Growth (89 €/Nutzer/Monat, 10–50 Nutzer, inkl. KI-Lead-Scoring), Pro (individuell, Referenzwert 80 €/Nutzer/Monat, 50+ Nutzer). Kein Freemium, 14-tägige Testversion, DSGVO-native Architektur mit Hosting in Frankfurt am Main und einem EU-gehosteten KI-Anbieter.

Wirtschaftlich befindet sich LeadPilot in der klassischen Seed-Verlustphase (EBITDA −309.000 €, Runway 14 Monate ab 31.12.2025, Anschlussfinanzierung ab Q3 2026 vorzubereiten). Das Wachstum ist real (ARR-Verdopplung im zweiten vollen Marktjahr), aber sechs von neun SaaS-Kernmetriken lagen 2025 unter Zielwert (🔴): Account-Churn 2,8 %/Monat, Marketing-CAC 862 €, CAC-Payback 13 Monate, LTV:CAC 2,7:1, Trial-to-Paid 18 %, NPS 34. Der zentrale, mit Zahlen belegte Befund des Unternehmens-Check-ups: Der Churn ist **kein Produktproblem, sondern ein Zielkunden-Problem** — fast ausschließlich Kleinstkunden mit 2–3 Nutzern (Ø 129 € MRR) kündigen, während Growth- und Pro-Kunden kaum abwandern. Das einzige echte Differenzierungsmerkmal gegenüber dem eigentlich relevanten Wettbewerber Pipedrive — das native KI-Lead-Scoring — wird von nur 47 % der Kunden aktiv genutzt (Ziel 65 %).

### Was ist wahrscheinlich, aber nicht abschließend belegt (A)

Dass die Buyer Persona "Vertriebsleiter-Volker" (47, Head of Sales, Maschinenbau-Zulieferer, 85 MA, 7-köpfiges Team) repräsentativ für die gesamte Kundenbasis ist, ist plausibel und mit dem ICP konsistent, aber nicht durch eine breitere Personas-Validierung (z. B. für IT/Software- oder Agentur-Kunden) abgesichert — die Persona wurde erkennbar am Maschinenbau-Segment entwickelt. Ebenso ist anzunehmen, dass die auf der Landingpage gezeigten Kundenreferenzen (Katrin Hellberg/Hellberg Maschinenbau, Stefan Kranz/Kranz IT-Systeme) als exemplarisch markiert sind und keine realen, zitierfähigen Referenzkunden darstellen — die Seite weist das im Footer selbst so aus.

### Was fehlt für eine belastbare Bewertung (?)

Vier Lücken sind für die weitere Arbeit (insbesondere für eine spätere Scoring-Engine) relevant, werden hier aber nur benannt, nicht geschlossen:

Erstens fehlt eine technische Beschreibung der KI-Scoring-Logik jenseits von "EU-gehosteter Anbieter" — welches Modell, welche Trainingsdaten, welche Erklärbarkeit gegenüber dem Kunden geboten wird, ist nicht dokumentiert. Das begrenzt, wie tief die "methodische Glaubwürdigkeit" in Abschnitt 4 belegt werden kann. Zweitens gibt es keine dokumentierte Mindestgröße für den Self-Service-Funnel; der Check-up empfiehlt sie zu prüfen, aber Stand heute können auch 1–2-Nutzer-Accounts frei abschließen — genau die Gruppe mit dem höchsten Kündigungsrisiko. Drittens ist unklar, ob und wie sich das Ideal Customer Profile durch die für 2026 geplante "ICP-Schärfung im Vertriebsprozess" konkret ändert (engere Branchen, höhere Mindestgröße?) — das Faktenblatt bezeichnet das bestehende ICP als "unverändert gültig", der Maßnahmenplan sieht aber ausdrücklich eine Schärfung vor. Viertens liegen keine belastbaren Zahlen zu Feature-Nutzung, NPS oder Churn getrennt nach Branche vor (nur nach Paket) — eine branchenspezifische Priorisierung in Abschnitt 5 stützt sich daher auf Plausibilität, nicht auf harte Segmentdaten.

### Ein entdeckter Widerspruch in den Unterlagen (F — Datenqualitätshinweis)

Die Landingpage (`LeadPilot - Landingpage.html`, aktueller Stand im Marketing-Ordner) zeigt eine vierte Preisstufe **"Enterprise"** ("Komplexe Organisationen mit eigenen Anforderungen") und einen Pro-Einstiegspreis von **199 €/Nutzer/Monat**. Das Faktenblatt v1.1 — laut eigenem Status "Single Source of Truth" — schließt die Bezeichnung *Enterprise* ausdrücklich aus ("ungültig und dürfen nicht mehr verwendet werden") und nennt für Pro einen Referenzwert von **80 €/Nutzer/Monat**. Diese Analyse folgt durchgehend dem Faktenblatt; die Landingpage sollte vor der nächsten Kampagne (siehe Abschnitt 11) korrigiert werden, da sie sonst potenziellen Kunden ein anderes Preismodell zeigt als das offiziell gültige. Zusätzlich formuliert die Landingpage im FAQ-Bereich, dass "viele Teams LeadPilot zudem parallel zu einem bestehenden System betreiben" — das steht in leichter Spannung zum Business Model Canvas, das LeadPilot ausdrücklich als *Alternative*, nicht als *Ergänzung* zu HubSpot/Pipedrive/Salesforce positioniert. Beides wird in Abschnitt 4 wieder aufgegriffen.

### Einflussreichste offene Fragen für Positionierung, Zielgruppe und späteres Scoring

Die größte Hebelwirkung haben zwei Fragen: Wie eng wird die für 2026 angekündigte ICP-Schärfung tatsächlich gefasst (Ausschluss von Kleinstteams schon im Self-Service, oder nur im aktiven Vertrieb)? Und: Lässt sich die KI-Scoring-Nutzung ursächlich auf das Onboarding zurückführen (Check-up legt das nahe: langes Onboarding → geringe Aktivierung → geringe Feature-Nutzung → Kündigung), oder spielen auch Vertrauens-/Erklärbarkeitsfragen beim "Black-Box"-Charakter von KI-Scoring eine Rolle? Beide Fragen wirken direkt auf Abschnitt 5 und sollten vor einer Scoring-Engine (Schritt 4) mit dem Team geklärt werden.

---

## 2. Rechercheentscheidung

Recherchemodus: **Standard**, wie von Marc vorgegeben — Markt, Zielgruppen, Wettbewerber, Trends und Glaubwürdigkeitsfaktoren, behandelt als reale Wettbewerbssituation. Durchgeführt am 05.09.2026 über Websuche; Quellen und Daten sind bei jeder externen Aussage einzeln ausgewiesen (siehe Abschnitte 3–4 und Quellenverzeichnis am Ende). Es wurden keine personenbezogenen oder für ein späteres Scoring nutzbaren Merkmale recherchiert — passend zu Schritt 4/5, die hier ausdrücklich nicht bearbeitet werden.

---

## 3. Produkt- und Problemanalyse

### Was ist das Produkt?

LeadPilot ist ein B2B-SaaS-Sales-CRM, das sich bewusst auf eine einzige Kernfunktion konzentriert: Nach jedem Kundenkontakt legt das System automatisch die nächste fällige Aktivität an (Anruf, E-Mail, Angebot nachfassen) und weist sie einer verantwortlichen Person mit Termin zu **(F)**. Darum herum liegen eine zentrale Lead-Pipeline (Import aus Excel/Google-Listen, Formularen, LinkedIn, E-Mail), ein Dashboard für die Vertriebsleitung mit Überfälligkeits-Ansicht sowie — als Kernfeature ab dem Growth-Paket — ein KI-gestütztes Lead-Scoring, das Abschlusswahrscheinlichkeit und Dringlichkeit bewertet **(F)**. Produktkategorie: schlankes, fokussiertes Sales-CRM/Lead-Management-Tool — explizit *nicht* als "noch ein CRM" oder All-in-One-Suite positioniert, sondern als Einstiegs- bzw. Alternativlösung für Unternehmen ohne CRM oder mit reiner Excel-Nutzung **(F)**.

Kernfunktion ist die automatische Nächster-Schritt-Zuweisung; das KI-Scoring ist die strategisch wichtigste, aber am wenigsten genutzte Zusatzfunktion (47 % Nutzung, **F**). Nebenfunktionen sind Integrationen (Microsoft 365, Google Workspace seit v1.4/August 2025) und der seit August 2026 verfügbare LeadPilot-Connect-Baustein (Zapier/Make-Anbindung) **(F)**. Für 2026 geplant, aber zum Analysezeitpunkt noch nicht ausgeliefert: ein geführter Trial-Flow (v2.0, Q1 2026) **(F)**.

### Zentrale Produktidee

> LeadPilot hilft Vertriebsleitern im B2B-Mittelstand, keine Leads mehr durch fehlende Nachverfolgung zu verlieren, indem es jedem Lead automatisch einen konkreten nächsten Schritt mit Verantwortlichem zuweist, damit das Team mehr Kontakte tatsächlich zum Abschluss bringt, ohne ein aufwändiges CRM-Projekt anzustoßen.

### Belastbare Kurzbeschreibung — drei Varianten

**Ein-Satz-Beschreibung:** LeadPilot ist das KI-gestützte Sales-CRM für den B2B-Mittelstand, das jedem Lead automatisch den nächsten fälligen Schritt zuweist.

**Kurzbeschreibung mit Nutzen und Zielgruppe:** Für Vertriebsleiter im B2B-Mittelstand, deren Team Leads über Excel-Listen und verstreute Postfächer verwaltet, sorgt LeadPilot dafür, dass jeder Lead einen klaren nächsten Schritt und eine verantwortliche Person hat — ohne CRM-Projekt, startklar in einem Tag.

**Ausführliche Beschreibung (Website/Pitch/Kundenkommunikation):** LeadPilot ist ein fokussiertes, KI-gestütztes Sales-CRM für B2B-Unternehmen mit 0–200 Mitarbeitenden, das sich auf eine zentrale Aufgabe konzentriert: automatische Lead-Nachverfolgung. Leads aus Website, Messen, LinkedIn und E-Mail laufen in einer Pipeline zusammen; nach jedem Kontakt legt LeadPilot automatisch die nächste fällige Aktivität an und macht überfällige Leads für die Vertriebsleitung sichtbar. Ab dem Growth-Paket bewertet ein KI-Lead-Scoring zusätzlich Abschlusswahrscheinlichkeit und Dringlichkeit. Anders als große CRM-Suiten wie HubSpot oder Salesforce verzichtet LeadPilot bewusst auf Marketing-Module, komplexe Konfiguration und lange Einführungsprojekte — dafür läuft die Plattform vollständig DSGVO-konform mit europäischem Hosting in Frankfurt am Main.

Keine Superlative, keine unbelegten Leistungsversprechen: Aussagen wie "40+ Integrationen", eine mobile App, mehrsprachige Oberfläche oder eine LinkedIn-Sales-Navigator-Integration existieren laut Faktenblatt ausdrücklich nicht und dürfen nicht kommuniziert werden **(F)**.

---

## 4. Positionierung und Differenzierung

### Welches Problem wird gelöst?

Das konkrete Problem: In B2B-Vertriebsteams des Mittelstands hängt die Nachverfolgung eines Leads nach dem Erstkontakt vom einzelnen Mitarbeitenden ab. Ist diese Person im Urlaub, im Kundentermin oder schlicht überlastet, bleibt der Lead liegen — nicht aus mangelndem Willen, sondern aus fehlendem Prozess **(F, Content-Strategie/Buyer Persona)**. Das tritt typischerweise bei mehreren parallelen Lead-Quellen (Messe, Website, Empfehlung) und fehlendem oder rein excelbasiertem CRM auf **(F, ICP)**. Die Folgen sind wirtschaftlich (verlorener Umsatz, weil Interessenten zur Konkurrenz abwandern), organisatorisch (aufwändiges manuelles Monatsreporting, siehe Buyer Persona: "manuelles, zeitaufwändiges Monatsreporting an die Geschäftsführung") und emotional (Unsicherheit der Vertriebsleitung, ob das Team wirklich alle Leads im Griff hat, siehe Empathy Map: "Insgeheim unsicher, ob sein Team wirklich alle Leads im Griff hat") **(F)**.

Bestehende Alternativen reichen nach eigener Einschätzung von LeadPilot aus zwei Gründen oft nicht aus: Große CRM-Suiten (HubSpot, Salesforce, Zoho) sind für ein 2–20-köpfiges Vertriebsteam ohne IT-Abteilung zu komplex und zu teuer in Einführung und Betrieb; die naheliegende Alternative ohne System — Excel — bietet keine Automatisierung und wird laut Persona-Dokumentation typischerweise nur von einer Person wirklich gepflegt **(F)**. Externe Recherche bestätigt die Grundannahme, dass Lead-Nachverfolgung ein branchenweit reales, gut dokumentiertes Problem ist: Mehrere deutschsprachige Fachquellen referieren eine Untersuchung, wonach ein erheblicher Teil der Marketing-Leads im B2B nie kontaktiert wird; die zitierten Werte schwanken zwischen rund 30 % und 70 % je nach Quelle und Studienjahr **(R, September 2026, u. a. vertriebszeitung.de, dievertriebswikinger.de; zugrunde liegende akademische Quelle: Altenscheidt/Ernst/Schmitz, *Journal of Personal Selling & Sales Management*, 2023)**. Der auf Landingpage und im eigenen Content verwendete Wert "bis zu 70 %" liegt am oberen Rand dieser Bandbreite und sollte im weiteren Marketing eher als "bis zu" oder mit Bandbreite kommuniziert werden, nicht als feste, präzise Zahl — die exakte Quelle für die "70 %"-Zahl selbst konnte in der Recherche nicht eindeutig auf eine einzelne Primärstudie zurückgeführt werden **(?)**.

### Rationaler und emotionaler Nutzen

Rational verschafft LeadPilot Zeitgewinn (kein manuelles Nachtragen in Excel), geringere Fehlerquote (kein Lead "vergisst sich" mehr), bessere Priorisierung (KI-Scoring statt Bauchgefühl) und ein schnelleres, klareres Reporting an die Geschäftsführung **(F, abgeleitet aus Value Proposition und Feature-Liste)**. Emotional adressiert das Produkt vor allem Kontrolle und Erleichterung — die Vertriebsleitung gewinnt Überblick und die stille Sorge, "wie unorganisiert wir eigentlich sind" (Empathy Map), verliert an Schärfe; sekundär spielt Kompetenz eine Rolle, weil ein funktionierendes System dem Vertriebsleiter gegenüber der eigenen Geschäftsführung Handlungsfähigkeit demonstriert **(A, aus Empathy Map und Hero Statement abgeleitet)**.

### Warum sollte jemand das Produkt jetzt ausprobieren?

Der unmittelbare Mehrwert ist mit der eigenen Excel-Liste sofort erlebbar: Der Import dauert laut Landingpage-Copy "Minuten, nicht Wochen", und schon in der 14-tägigen, kartenlosen Testphase zeigt das Dashboard, wie viele Leads aktuell unbeobachtet liegen **(F)**. Das Risiko ist gering (kein Vertragsrisiko durch Kreditkarten-freien Trial, monatliche Kündbarkeit), die Erkenntnis unmittelbar quantifizierbar (Anzahl überfälliger Leads), und der Zeitpunkt "jetzt" lässt sich inhaltlich gut an Wachstumsphasen anknüpfen, in denen das bisherige Excel-System spürbar an Grenzen stößt (genau das im ICP beschriebene Trigger-Signal) **(F)**.

### Warum wirkt LeadPilot glaubwürdig?

Die methodische Glaubwürdigkeit stützt sich auf eine nachvollziehbare, eng gefasste Produktlogik ("eine Aufgabe, richtig gelöst" statt Suite) und auf belegte, teils unbequeme Selbstauskunft: Das Faktenblatt und der Check-up benennen offen, dass sechs von neun Kernmetriken 2025 rot sind, dass das KI-Scoring nur von 47 % genutzt wird und dass der CTO ein Single Point of Failure für die Scoring-Logik ist. Diese Transparenz über Grenzen ist ungewöhnlich offen für ein Marketingprofil und erhöht die Glaubwürdigkeit der übrigen Aussagen — vorausgesetzt, sie bleibt intern und fließt nicht 1:1 in Außenkommunikation ein. Nach außen sichtbar und aktiv nutzbar ist vor allem die DSGVO-native Architektur (europäisches Hosting, EU-gehosteter KI-Anbieter, kein Zugriff auf US-Hyperscaler) **(F)** — ein Vertrauensfaktor, der laut aktueller Recherche 2026 an Bedeutung gewinnt: Deutsche Mittelständler ohne eigene Data-Science-Abteilung suchen zunehmend geprüfte, "souveräne" KI-Lösungen mit europäischem Datenschutzniveau, und Hosting bei europäischen Anbietern gilt als pragmatischster Weg zu echter Datensouveränität **(R, September 2026, u. a. luehmann-it.de, sest.gmbh)**. LeadPilots Positionierung "ohne Rückfragen an die Rechtsabteilung" trifft damit einen 2026 eher wachsenden als schwindenden Trend.

Ein methodischer Schwachpunkt bleibt: Die KI-Scoring-Logik selbst ist gegenüber Kunden und in den Unterlagen nicht als nachvollziehbares Verfahren beschrieben (nur "EU-gehosteter Anbieter", Trefferquote 71 % laut Release v1.3 **(F)**, aber kein Hinweis auf Erklärbarkeit einzelner Scores). Aussagen zur Funktionsweise der KI sollten deshalb vorerst als "bewertet automatisch" formuliert werden, nicht als detailliert erklärbares Verfahren — alles andere wäre eine Behauptung ohne Beleg **(E)**.

### Wichtige Einschränkung — wofür LeadPilot (noch) nicht geeignet ist

LeadPilot ist ausdrücklich nicht für Unternehmen über 200 Mitarbeitende, für etablierte Enterprise-CRM-Landschaften, für reine B2C-Vertriebe, für Ein-Personen-Vertriebe sowie für Kunden mit Anforderungen an ISO 27001/TISAX oder mehrjährige Rahmenverträge geeignet **(F, ICP Ausschlusskriterien)**. Beta- bzw. Neukund:innen sollten wissen, dass das Produkt bewusst schmal ist: kein Marketing-Modul, wenig Reporting-Tiefe, wenige Integrationen — wer mittelfristig eine umfassende Vertriebs- und Marketingplattform braucht, wird bei LeadPilot an eine Grenze stoßen **(F, SWOT)**. Zusätzlich sollte laut Churn-Befund niemand mit einem 1–2-Personen-Vertriebsteam ohne dedizierte Vertriebsleitung über Self-Service einsteigen — dieses Segment kündigt überproportional **(F, Check-up)**, auch wenn es aktuell technisch noch möglich ist **(?, siehe Abschnitt 1)**.

### Warum ist LeadPilot nicht austauschbar?

Funktional unterscheidet sich LeadPilot von den großen Suiten durch radikale Fokussierung: eine Kernfunktion statt eines Funktionsbaukastens. Strategisch liegt der Unterschied in der Denkweise "schmal und schnell eingeführt" statt "möglichst viel abdecken". Emotional adressiert LeadPilot explizit die Zeitknappheit und geringe Geduld der Zielgruppe für komplexe Tool-Einführungen — ein Kontrast zur oft techniklastigen Kommunikation der großen Anbieter. Im Nutzungserlebnis positioniert sich LeadPilot selbst gegen die eigene fehlende Größe: "Wir sind nicht das größte CRM. Sondern das, das Ihr Team wirklich nutzt" (Landingpage-Copy) **(F)**.

Der wirklich relevante Wettbewerber ist nach eigener Analyse nicht Salesforce oder HubSpot, sondern **Pipedrive** — gleiche Zielgruppe, ähnlich aktivitätsgetriebene Methodik, aber ohne natives KI-Scoring als Kernfunktion **(F)**. Aktuelle Recherche bestätigt, dass Pipedrive im September 2026 weiterhin als die naheliegende Empfehlung für vertriebszentrierte KMU im DACH-Raum gilt, mit Einstiegspreisen ab rund 14 €/Nutzer/Monat (Lite) bis 79 €/Nutzer/Monat (Ultimate) **(R, September 2026, u. a. hanseperformance.de, online-vertriebsberatung.de)** — das unterbietet LeadPilots Starter-Einstieg von 49 €/Nutzer/Monat auf der untersten Stufe deutlich. Salesforce ist mit einer "Starter Suite" mittlerweile ebenfalls ab rund 25 €/Nutzer/Monat einsteigbar, wird für den klassischen Mittelstand aber weiterhin meist als "Over-Engineering" bzw. zu teuer/komplex eingeordnet, sobald Enterprise-Funktionen dazukommen **(R, September 2026)**. HubSpot bietet ein dauerhaft kostenloses CRM mit unbegrenzten Kontakten an und verkauft Zusatzmodule separat **(R, September 2026)** — das unterläuft LeadPilots "kein Freemium"-Logik an der Einstiegsschwelle, auch wenn HubSpot in der Tiefe (KI-Lead-Scoring nur im teuren Enterprise-Plan, Faktenblatt) für die eigentliche Kernfunktion von LeadPilot weiterhin komplexer und teurer bleibt.

Über die im Faktenblatt gelistete Konkurrenz hinaus zeigt die Recherche eine Gruppe kleinerer, spezialisierter Herausforderer, die im internen Wettbewerbs-Screening bislang fehlen: **Zoho Bigin** positioniert sich explizit als besonders günstiger, direkter Pipedrive-Klon (Einstieg ca. 7 US-Dollar/Nutzer/Monat) **(R, September 2026, engagebay.com)**; **Salesflare** wirbt gezielt mit starker Automatisierung der Kontakt- und Aktivitätserfassung und reduziertem manuellem Dateneingabeaufwand gegenüber Pipedrive — inhaltlich sehr nah an LeadPilots eigenem Kernversprechen "automatischer nächster Schritt" **(R, September 2026, blog.salesflare.com)**; und **Attio** positioniert sich als "KI-natives" CRM mit flexiblem, datengetriebenem Modell statt starrer Datensätze **(R, September 2026, folk.app)**. Keiner dieser drei ist heute in Deutschland/DACH-B2B-Mittelstand nachweislich etabliert, aber sie zeigen, dass der von LeadPilot besetzte Nischen-Winkel — "schmal, automatisiert, KI-gestützt" — auch international zunehmend adressiert wird. Das ist eine Recherche-Ergänzung zur bestehenden SWOT-Aussage "neue, KI-native Wettbewerber mit ähnlich schmalem Fokus könnten schneller wachsen" **(F, SWOT)** — die Ergänzung liefert dazu erstmals konkrete Namen.

Ein mittelfristiges strukturelles Risiko liegt in der 2026 stark diskutierten Entwicklung hin zu **agentischer KI im Vertrieb**: Autonome KI-Agenten, die CRM-Einträge selbstständig pflegen, Gesprächszusammenfassungen erstellen und sogar erste Qualifizierungsgespräche führen, werden von mehreren Fachquellen als der prägende CRM-Trend 2026/27 beschrieben, mit einem laut Marktschätzungen sehr schnell wachsenden Gesamtmarkt für autonome KI-Agenten **(R, September 2026, u. a. bigin.com, it-boltwise.de; Marktschätzung mit Vorsicht zu behandeln, da Prognosen für einen sehr jungen Markt naturgemäß stark streuen)**. Für LeadPilot bedeutet das: Die heutige Differenzierung "automatische Zuweisung des nächsten Schritts" könnte mittelfristig zur Grundfunktion werden, während der eigentliche Wettbewerbsvorteil zunehmend darin liegt, wie autonom und erklärbar das System handelt — ein Punkt, der die oben genannte Lücke bei der Erklärbarkeit der KI-Scoring-Logik strategisch relevanter macht, als sie heute behandelt wird **(A/E)**.

### USP

**Kern-USP:** LeadPilot ist das einzige CRM in seinem Preissegment, das automatische Lead-Nachverfolgung und natives KI-Scoring als eine einzige, in einem Tag einführbare Kernfunktion kombiniert — ohne CRM-Projekt und ohne die Komplexität einer vollständigen Suite.

Drei unterstützende Differenzierungsargumente: Erstens die radikale Funktionsfokussierung, die eine Einführung ohne IT-Abteilung ermöglicht (Zielwert Time-to-Value < 7 Tage, aktuell 11 Tage — noch nicht erreicht, aber Richtung klar definiert). Zweitens die DSGVO-native Architektur mit europäischem Hosting als aktiv nutzbares, nicht nur passives Compliance-Argument. Drittens der transparente, planbare Pro-Nutzer-Preis ohne versteckte Stufen, positioniert zwischen einfachen Einzeltools und teuren Enterprise-Suiten.

Ein möglicher Einwand gegen den USP: "Pipedrive kann das Gleiche und ist günstiger" (ab 14 €/Nutzer/Monat in der Einstiegsstufe, siehe oben). Eine glaubwürdige Antwort darauf ist, dass Pipedrive kein natives KI-Lead-Scoring als Kernfunktion bietet (F, eigene Wettbewerbsanalyse) — der Preisvorteil von Pipedrive bezieht sich auf eine funktional schlankere Einstiegsstufe ohne KI-Priorisierung; sobald ein Team Priorisierung "statt Bauchgefühl" will, verschiebt sich der faire Vergleich zu LeadPilots Growth-Paket (89 €/Nutzer/Monat) gegen vergleichbare KI-Funktionen bei der Konkurrenz, die dort in der Regel erst in höheren, teureren Stufen verfügbar sind (z. B. HubSpots prädiktives Scoring nur im teuren Enterprise-Plan, F). Diese Antwort ist strategisch tragfähig, sollte aber im aktiven Vertrieb mit einer sauberen Feature-für-Feature-Vergleichsseite unterlegt werden — genau das ist für Oktober 2026 im Marketingplan ohnehin vorgesehen ("LeadPilot vs. Pipedrive/HubSpot für den Mittelstand", F).

---

## 5. Zielgruppen und Priorisierung

### Primäre Zielgruppen im Überblick

| Kriterium | Ausprägung |
| :-- | :-- |
| Rolle/Jobtitel | Vertriebsleiter:in, Head of Sales; sekundär Geschäftsführung in kleineren Strukturen |
| Verantwortungsbereich | Steuerung eines 2–20-köpfigen B2B-Vertriebsteams |
| Unternehmensart/-größe | 0–200 Mitarbeitende, wirtschaftlicher Sweet Spot 20–100 |
| Branche | Maschinenbau/Industrie, IT/Software, Großhandel, Agenturen |
| Problemintensität | Hoch bei mehreren parallelen Lead-Quellen und Excel-/Kopf-basierter Nachverfolgung |
| Entscheidungsbefugnis | Vertriebsleitung allein oder mit Geschäftsführung, kurze Wege |
| Offenheit für neue Lösungen | Mittel — offen, aber ungeduldig bei komplexer Einführung |
| Dringlichkeit/Zahlungsbereitschaft | Vorhanden, Budgetrahmen 49–89 €/Nutzer/Monat |

*(F, konsolidiert aus ICP und Buyer Persona)*

### Die wirtschaftlich beste Zielgruppe für 2026

Anders als bei einem Beta-Produkt ohne Kundenbasis (wofür die Projektvorlage ursprünglich formuliert ist) verfügt LeadPilot bereits über zwei volle Marktjahre Realdaten. Die Frage ist hier deshalb nicht "wer testet zuerst", sondern **welches Segment die Vertriebs- und Marketingressourcen 2026 vorrangig bekommen sollte** — und die Antwort liefert der Check-up bereits datenbasiert:

> Die wirtschaftlich beste Zielgruppe ist ein B2B-KMU aus Maschinenbau/Industrie, IT/Software oder Großhandel mit 20–100 Mitarbeitenden und einem 3–15-köpfigen Vertriebsteam, das aktuell ohne CRM oder mit Excel arbeitet — **weil** genau dieses Segment die 57 % des ARR liefernde Growth-Kohorte bildet, kaum kündigt und das differenzierende KI-Scoring am ehesten aktiv nutzen kann, sobald es eingeführt ist.

Begründung entlang der im Projekt vorgesehenen Kriterien: Problemintensität ist bei dieser Gruppe hoch (genug Lead-Volumen, dass manuelle Nachverfolgung spürbar bricht, aber noch überschaubar), die Fähigkeit zu sinnvollem Feedback ist hoch (ein 7-köpfiges Team wie im Beispiel Hellberg Maschinenbau hat genug Praxis, um Produktschwächen konkret zu benennen), die Bereitschaft zum Ausprobieren ist durch die 14-tägige Testversion niedrigschwellig, der Zugang ist über LinkedIn (Hauptkanal der Persona, 38 % der Neukunden 2025) gut erschließbar, die Entscheidungsgeschwindigkeit ist hoch (kurze Wege, keine formale IT-Beschaffung), die Glaubwürdigkeit als frühe Referenzgruppe ist gegeben (deckt sich mit dem realen Kundenschwerpunkt), und der Multiplikatoreffekt ist über Fachnetzwerke und Branchenverbände plausibel, auch wenn er heute kaum aktiv bespielt wird **(F/A)**. Am wichtigsten: Diese Gruppe ist keine Hypothese, sondern in den Zahlen bereits sichtbar — sie ist identisch mit dem Segment, das im Growth-Paket kaum kündigt.

### Primär, sekundär, Influencer, Entscheider, nicht-primär, Ausschluss

| Kategorie | Beschreibung für LeadPilot |
| :-- | :-- |
| **Primäre Zielgruppe** | Vertriebsleiter/Head of Sales in B2B-KMU (20–100 MA, Sweet Spot), 3–15-köpfiges Team, Maschinenbau/IT/Großhandel/Agentur, aktuell Excel oder kein CRM — entspricht der Buyer Persona Vertriebsleiter-Volker |
| **Sekundäre Zielgruppe** | Geschäftsführer:innen kleinerer Unternehmen (< 20 MA), die Vertrieb noch selbst mitsteuern; Customer-Success- und Sales-Ops-Rollen bei Bestandskunden (Feature-Adoption KI-Scoring) |
| **Influencer** | Sales Development Representatives/Account Executives im Team (nutzen das Tool täglich, beeinflussen Zufriedenheit und Weiterempfehlung); Digital-Sales-Berater:innen und CRM-Implementierungspartner als externe Multiplikatoren |
| **Entscheider** | Vertriebsleitung allein oder gemeinsam mit Geschäftsführung; bei Pro-Accounts (50+ Nutzer) zusätzlich Einkauf/IT bei der Vertragsprüfung |
| **Nicht primäre Zielgruppe** | Unternehmen mit 100–200 Mitarbeitenden am oberen ICP-Rand (technisch im ICP, aber näher an Enterprise-Bedürfnissen, die LeadPilot heute nicht bedient); reine Vertriebsteams in Konzern-Tochtergesellschaften mit zentraler IT-Vorgabe |
| **Ausschlusszielgruppe** | Unternehmen > 200 MA, etabliertes Enterprise-CRM im Einsatz, reines B2C, Ein-Personen-Vertrieb, ISO-27001/TISAX-Anforderung, mehrjährige Rahmenverträge — **sowie neu, datenbasiert seit dem Check-up 2025:** Kleinstteams mit 2–3 Nutzern ohne dedizierte Vertriebsleitung, da dieses Segment 33 % des Accountbestands, aber nur 12 % des MRR-Verlusts durch Kündigung erklärt und strukturell zum Negative-Fit passt |

*(F/A, konsolidiert aus ICP, BMC und Check-up; die letzte Zeile der Ausschlussgruppe ist eine Zuspitzung basierend auf realen Zahlen, keine im ICP-Dokument bereits so benannte Kategorie)*

### Regionale Einordnung

DACH mit klarem Schwerpunkt Deutschland ist Zielregion; Österreich (3 Kunden) und Schweiz (2 Kunden) sind reale, aber kleine Nebenmärkte — die im Faktenblatt selbst vorgegebene Formulierung "erste Kunden in AT und CH", nicht "DACH-Vollabdeckung", sollte für jede weitere Zielgruppenkommunikation beibehalten werden **(F)**. Innerhalb Deutschlands zeigt die eigene Content-Recherche zudem, dass das Suchinteresse an "Lead Management CRM" regional in Hessen, Berlin und Bayern am höchsten ist **(F, Content-Strategie, Google-Trends-Auswertung)** — eine sinnvolle Ergänzung für die geografische Aussteuerung von LinkedIn- und SEO-Maßnahmen, ohne dass daraus eine Änderung des ICP folgt.

---

## 6. Nutzenargumentation und Botschaften

### Hauptbotschaft

**"LeadPilot verbindet Leads mit dem nächsten Schritt — automatisch, nachvollziehbar, ohne CRM-Projekt."**

### Drei Varianten für unterschiedliche Zielgruppen/Kontexte

Für Neuinteressenten mit Excel-Chaos: *"Kein Lead geht mehr verloren — auch nicht am Freitagnachmittag."* Für Bestandskunden zur KI-Scoring-Aktivierung: *"Ihr Team hat die Daten schon. LeadPilot macht daraus eine Reihenfolge, die stimmt."* Für vergleichende, preissensible Prüfer (Pipedrive-Wechsler): *"Gleiche Einfachheit, plus die KI-Priorisierung, die Pipedrive nicht mitbringt."*

### Kurze Beta-/Testeinladung

*"Testen Sie LeadPilot 14 Tage kostenlos — mit Ihren echten Leads. Keine Kreditkarte, keine Vertragsbindung."*

### CTA-orientierte Variante

*"In 20 Minuten zeigen wir Ihnen an Ihrer eigenen Lead-Liste, wo das Nachfassen abreißt. Demo buchen."* (bereits so auf der Landingpage umgesetzt, F)

### Sachlich-methodische Variante

*"LeadPilot ordnet jedem Lead nach Kontakt automatisch eine nächste Aktivität mit Termin und Verantwortlichem zu und bewertet ab dem Growth-Paket zusätzlich Abschlusswahrscheinlichkeit und Dringlichkeit per KI-Scoring. Betrieb ausschließlich auf europäischer Infrastruktur, DSGVO-konform."*

Alle Varianten sind mit den im Faktenblatt zulässigen Aussagen konsistent und vermeiden nicht belegbare Zusätze (keine Erfolgsquoten-Versprechen über die dokumentierten 90-Tage-Durchschnittswerte hinaus, keine Marktanteilsbehauptung für LeadPilot selbst, die laut Faktenblatt bei unter 0,1 % liegt).

---

## 7. Markenemotion, Design- und CTA-Logik

### Gewünschte Emotion je Phase

Beim ersten Kontakt soll Wiedererkennen entstehen ("genau mein Problem"), während des Verstehens Erleichterung ("das lässt sich lösen, ohne mein Team umzukrempeln"), vor dem Ausprobieren Zuversicht (geringes Risiko durch kartenlosen Trial), nach dem ersten Erfolgserlebnis Kontrolle/Kompetenz (Dashboard zeigt sichtbaren Fortschritt gegenüber der eigenen Geschäftsführung) **(A, konsistent mit Empathy Map und Landingpage-Copy)**.

**Emotionale Abfolge:** Wiedererkennen → Erleichterung → Vertrauen (durch DSGVO/EU-Hosting und transparente Preise) → Zuversicht → Handlungsbereitschaft (Demo/Trial).

### Was wäre nicht passend

Künstliche Dringlichkeit oder Angstmache passt nicht zu einer Zielgruppe, die laut eigener Persona-Beschreibung ohnehin schon "unter Druck durch steigende Erwartungen der Geschäftsführung" steht — Verstärkung dieses Drucks würde eher abschrecken als aktivieren. Ebenso unpassend: technischer Selbstzweck bei der KI-Kommunikation (Buzzword-Nutzung von "KI" ohne konkreten Nutzen) und ein elitärer, "Enterprise"-Ton, der der Positionierung als bewusst schmales, mittelstandsnahes Tool widerspricht.

### Design- und Conversion-Logik

Primärer CTA passend zur aktuellen Produktphase (etabliertes, wachsendes Produkt, nicht mehr Beta): Demo buchen bzw. 14 Tage kostenlos testen — beides bereits so auf der Landingpage umgesetzt **(F)**. Sekundäre Handlung nach Erstkontakt: Vergleichsseite/FAQ lesen (adressiert die "vorsichtig, vergleichend" beschriebene Kaufentscheidung der Persona). Die auf der Landingpage umgesetzten Prinzipien — klare Informationshierarchie, sichtbare Methodik ("Drei Schritte. Kein CRM-Projekt."), Transparenz bei Preisen ohne versteckte Stufen, konkrete 90-Tage-Kennzahlen statt abstrakter Werbeaussagen — entsprechen bereits weitgehend den im Projekt geforderten Prinzipien für "Vertrauen ohne Langeweile" und sollten als Vorlage für künftige Kampagnen-Assets dienen, sobald die in Abschnitt 1 benannten Preis-Widersprüche (Pro-Preis, "Enterprise"-Stufe) korrigiert sind.

---

## 8. Verdichteter Markenkern

**Markenversprechen:** Kein Lead bleibt zurück — ohne dass dafür ein CRM-Projekt nötig ist.

**Markenspannung:** Zwischen der Einfachheit eines fokussierten Tools und dem Anspruch, mit KI-Priorisierung trotzdem intelligenter zu arbeiten als eine große, komplexe Suite.

**Markenpersönlichkeit:** Pragmatisch, direkt, unaufgeregt kompetent — eher der erfahrene Kollege, der eine Excel-Liste in zehn Minuten sortiert bekommt, als der visionäre KI-Vordenker.

**Tonalität:** Klar, kurze Sätze, keine Anglizismen-Häufung, kein Fachjargon ohne Erklärung — konsistent mit der bestehenden Content-Strategie und dem LinkedIn-Ton ("Kein Copy-Paste. Kein doppeltes Erfassen. Kein Lead bleibt zurück.").

**Zentrale Metapher:** Der Autopilot für das Nachfassen — das Team muss nicht mehr an jeden Lead denken, das System hält den Kurs.

**Verdichteter Satz:** *LeadPilot ist der Autopilot fürs Nachfassen: ein System, kein Projekt.*

---

## 11. Konkrete nächste Schritte

Für den unmittelbaren Anschluss an diese drei Schritte empfiehlt sich Folgendes, ohne bereits in Schritt 4 (Scoring-Engine) oder Schritt 5 (externe Profilsuche) einzusteigen: Erstens die in Abschnitt 1 benannte Preis- und Paket-Inkonsistenz zwischen Landingpage und Faktenblatt korrigieren, bevor neue Kampagnen (z. B. die für Oktober 2026 geplante Pipedrive/HubSpot-Vergleichsseite) darauf aufbauen. Zweitens die offene Frage zur konkreten Ausgestaltung der ICP-Schärfung 2026 mit dem Vertriebsteam klären — insbesondere, ob eine Mindestgröße für den Self-Service-Funnel eingeführt wird, da dies die in Abschnitt 5 vorgeschlagene Zielgruppenpriorisierung direkt operationalisieren würde. Drittens die "70 %"-Lead-Statistik im eigenen Content auf eine belastbarere Quellenangabe oder eine vorsichtigere Formulierung ("bis zu 70 %, je nach Studie auch niedriger") umstellen. Erst danach ist der Boden für Schritt 4 bereitet: Eine Scoring-Engine für Vertriebs- oder Beta-Zielpersonen auf Basis der in Abschnitt 5 geschärften Zielgruppen- und Ausschlusslogik ist der logische nächste Schritt, sobald du ihn beauftragen möchtest.

---

## Quellenverzeichnis (externe Recherche, Stand 05.09.2026)

- CRM-Markt/KI-Wachstum Deutschland/global: [BDU](https://www.bdu.de/news/deutsche-unternehmensberatungen-erwarten-2026-eine-rueckkehr-zum-wachstumskurs/), [CRM System.de](https://www.crmsystem.de/news/crm-markt-marktanteile-und-umsatzentwicklung), [Statista Prognose](https://de.statista.com/outlook/tmo/software/unternehmenssoftware/customer-relationship-management-software/deutschland)
- Wettbewerbsvergleich Pipedrive/HubSpot/Salesforce 2026: [Hanse Performance](https://hanseperformance.de/crm-vergleich/), [online-vertriebsberatung.de](https://online-vertriebsberatung.de/vertriebsblog/pipedrive-vs-hubspot), [SoftwareChecks.de](https://softwarechecks.de/pipedrive-vs-hubspot/)
- Neue schlanke/KI-native Wettbewerber: [folk.app (Attio)](https://www.folk.app/articles/ai-native-crm), [blog.salesflare.com](https://blog.salesflare.com/best-pipedrive-alternative), [engagebay.com (Zoho Bigin)](https://www.engagebay.com/blog/pipedrive-alternatives/)
- DSGVO/souveräne KI als Vertrauensfaktor 2026: [luehmann-it.de](https://luehmann-it.de/blog/dsgvo-konformes-ki-hosting-2026), [sest.gmbh](https://sest.gmbh/europaeische-ki-anbieter-datensouveraenitaet-unternehmen/)
- Lead-Follow-up-Statistik: [vertriebszeitung.de](https://vertriebszeitung.de/marketing-leads-werden-vom-vertrieb-nicht-nachverfolgt-was-tun/), [dievertriebswikinger.de](https://dievertriebswikinger.de/glossar/follow-up/)
- CRM-Adoption Deutschland nach Unternehmensgröße: offizielle Destatis-Zahl referenziert über [saphirgmbh.de](https://saphirgmbh.de/crm-fur-kleine-unternehmen-warum-ausgerechnet-die-die-gut-verdienen-oft-ganz-am-anfang-stehen/) und Sekundärschätzungen über [findstack.com](https://findstack.com/resources/crm-statistics)
- Agentische KI im Vertrieb 2026: [bigin.com](https://www.bigin.com/articles/seven-crm-trends-that-will-define-2026-and-2027.html), [it-boltwise.de](https://www.it-boltwise.de/ki-agenten-im-vertrieb-von-revops-bis-crm-steigt-die-abschlussdynamik.html)

*Hinweis: Bei den referenzierten Blog-/Ratgeberquellen handelt es sich überwiegend um Sekundärquellen (Marketing- und Beratungsseiten), nicht um Primärstudien. Für belastbare externe Zahlen in offizieller Kommunikation (z. B. Investorenunterlagen) empfiehlt sich, wo möglich auf Primärquellen wie Destatis oder zitierte Fachstudien zurückzugreifen.*
