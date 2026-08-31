# LeadPilot — Änderungsprotokoll zur Vereinheitlichung

**Stand:** Juli 2026 · Umstellung aller Projektdokumente auf **Szenario B (Early-Stage)** gemäß Faktenblatt v1.1

---

## 1. Was neu erstellt wurde

| Datei | Ersetzt | Inhalt |
| :-- | :-- | :-- |
| `LeadPilot_Faktenblatt_v1.1.md` | Faktenblatt v1.0 | Verbindliche Stammdaten – Single Source of Truth |
| `LeadPilot_Geschaeftsbericht_2025.xlsx` | `LeadPilot_-_Geschaeftsbericht_2_025.pdf/.numbers` | Deckblatt, Unternehmensdashboard, Finanzen, Kunden & Vertrieb, Produkt & Technik, Personal, Markt & Strategie |
| `LeadPilot_Jahresabschluss_2025.xlsx` | `LeadPilot_Jahresabschluss_2025.xlsx/.numbers` | Bilanz, GuV, Kennzahlen – vollständig formelbasiert |
| `LeadPilot_CRM.xlsx` | `LeadPilot_CRM.xlsx/.numbers` | Deal-Werte nach neuem Preismodell, korrigiertes Dashboard |
| `LeadPilot_Unternehmens-Check-up_2025.md` | `Lead_Pilot_-_Ja_hrlicher_Unternehmens-Check-up.md` | Analyse auf Basis der neuen Zahlen |
| `LeadPilot_Gesellschafterliste.md` | `FIKTIVE_GESELLSCHAFTERLISTE_LEADPILOT_GMBH.md` | Cap Table nach Seed-Runde |

---

## 2. Ersetzte Kernangaben

| Alt | Neu | Ursprung des Fehlers |
| :-- | :-- | :-- |
| ARR 2.400.000 € | 411.840 € | Geschäftsbericht |
| MRR Dezember 200.000 € | 34.320 € | Geschäftsbericht |
| 320 Kunden | 66 Kunden | Geschäftsbericht |
| 31 Mitarbeitende | 10 FTE | Geschäftsbericht |
| Series A 3,5 Mio. €, Bayern Kapital | Seed 950.000 €, TGFS Sachsen + HTGF | Geschäftsbericht |
| EBITDA-Marge 18 %, Jahresüberschuss 462.450 € | EBITDA −309.000 €, Jahresfehlbetrag −334.000 € | Geschäftsbericht |
| Liquide Mittel 1.240.000 € | 363.000 € | Geschäftsbericht |
| Stammkapital 50.000 € | 31.250 € | Jahresabschluss |
| Vier Paketpreise pro Account (149/299/599/1.200 €) | Drei Pakete pro Nutzer (49/89/individuell) | Geschäftsbericht |
| Tiers „Starter Plus", „Professional", „Enterprise", „Enterprise Plus" | Starter, Growth, Pro | Geschäftsbericht, CRM |
| Gründung „Q1 2024" | 21.07.2022, Produkt-Launch Q1 2024 | Check-up |
| DACH-Vollabdeckung | Erste Kunden in AT (3) und CH (2) | Geschäftsbericht |
| Materialaufwand 720.000 €, Vorräte 50.000 € | Entfällt – SaaS hat keinen Wareneinsatz | Jahresabschluss |
| Grundstück im Eigentum, Grundschuld 1.500.000 € | LeadPilot ist Mieter | Grundbucheintrag |
| GPT-4 über AWS/GCP/Azure | EU-gehosteter KI-Anbieter, Rechenzentrum Frankfurt | Geschäftsbericht |
| HubSpot-Zertifizierung, Mobile App, 40+ Integrationen | Realistische Roadmap für 4 Entwickler | Geschäftsbericht |
| Share of Voice DACH 5,5 %, 6.800 LinkedIn-Follower, DA 38 | Marktanteil < 0,1 %, 1.400 Follower, DA 14 | Geschäftsbericht |

---

## 3. Präzisierte Kennzahlen aus dem Check-up

| Kennzahl | Alt | Neu | Begründung |
| :-- | --: | --: | :-- |
| Win Rate | 19 % | 43 % | 3,9 Neukunden aus 9 Angeboten pro Monat ergeben rechnerisch 43 % |
| Expansion-MRR | +576 €/Monat | +2.400 €/Monat | Nur so ergibt sich die ausgewiesene NRR von 101 % |
| CAC | 820 € | 862 € (Marketing) / 4.447 € (fully loaded) | Zwei getrennte Kennzahlen statt einer vermischten |
| CAC-Payback | 9 Monate | 13 Monate | Fully-Loaded CAC ÷ Deckungsbeitrag von 333 €/Monat |
| Fluktuation | 20 % | 22 % | 2 Abgänge bei Ø 9 FTE |
| Gründungsjahr | Q1 2024 | 21.07.2022 | Satzung, Gesellschafterliste, Handelsregisteranmeldung |

**Refinement gegenüber Faktenblatt v1.0:** Die Erlös- und Kostenpositionen wurden aus der monatlichen MRR-Reihe rückgerechnet. Umsatzerlöse 336.000 € statt 343.000 €, Umsatzkosten 121.000 € statt 123.000 €, OPEX 524.000 € statt 529.000 €. Jahresfehlbetrag, Bilanz, ARR und alle SaaS-Kernmetriken bleiben unverändert.

---

## 4. Noch zu erledigen

| Dokument | Maßnahme |
| :-- | :-- |
| `GRUNDBUCHEINTRAG_LEADPILOT_GMBH.md` | **Aus der Unternehmensfiktion entfernen** oder ausdrücklich als reine Formular-Übung zum Thema Grundbuch kennzeichnen. Zwei Gründe: (1) Die Eintragung der GmbH als Eigentümerin am 02.05.2022 liegt vor der Beurkundung des Gesellschaftsvertrags am 21.07.2022 und ist damit rechtlich unmöglich. (2) Ein 1.420 m² großes Grundstück am Augustusplatz und eine Grundschuld über 1.500.000 € sind mit einer Bilanzsumme von 479.000 € nicht vereinbar. LeadPilot mietet. |
| `LeadPilot_-_Meine_Gescha_ftsidee.md` | In der SWOT die Schwäche „Noch keine Referenzkunden oder Erfolgsgeschichten" streichen – es gibt 66 Kunden und benannte Referenzen (Corvion Software GmbH). Ergänzen: „Markenbekanntheit unter 0,1 % Marktanteil". |
| `LeadPilot_-_Business_Model_Canvas.md` | Preismodell bleibt gültig (49/89/individuell). Formulierungen wie „Startkapital für Produktentwicklung" und „erste Kundengewinnung" auf den Stand nach Seed-Runde anheben. Bei „Abgrenzung zum Wettbewerb" HubSpot als Wettbewerber, nicht als Partner führen. |
| `FIKTIVE_SATZUNG_...`, `ANMELDUNG_ZUM_HANDELSREGISTER_...` | Bleiben unverändert gültig (Stammkapital 25.000 €, Gründung 21.07.2022). Sie beschreiben den Gründungszeitpunkt, die Gesellschafterliste den Stand nach der Kapitalerhöhung. |
| Alte Dateien | `LeadPilot_-_Geschaeftsbericht_2_025.pdf/.numbers`, `Unternehmensanalyse1.pdf`, `LeadPilot_Unternehmensanalyse_v2.numbers` und die alten Jahresabschluss-/CRM-Dateien aus dem Projektwissen entfernen, damit keine widersprüchlichen Zahlen mehr gezogen werden. |

---

## 5. Prüfsummen der neuen Dateien

| Prüfung | Ergebnis |
| :-- | :-- |
| Bilanz: Aktiva = Passiva (2025 und 2024) | 479.000 € / 765.000 € – Differenz 0 |
| GuV: Summe der Quartale = Jahreswert | Umsatz 336.000 €, EBITDA −309.000 €, Jahresfehlbetrag −334.000 € |
| Burn Rate = EBITDA ÷ 12 | 25.750 € |
| Runway = Liquide Mittel ÷ Burn Rate | 14,1 Monate |
| MRR-Brücke ergibt MRR Dezember | 34.320 € |
| Summe der monatlichen MRR = Abo-Umsatz | 307.600 € |
| Paketverteilung ergibt MRR Dezember | 34.320 € bei 66 Kunden, ARPA 520 € |
| Funnel: Neukunden = Summe der Quartale | 47 |
| Kanalanteile | 100 % / 47 Neukunden |
| CRM: Wert = Nutzer × Preis × 12 in allen 24 Chancen | erfüllt |
| Formelfehler in allen drei Arbeitsmappen | 0 |
