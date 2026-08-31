# Änderungsprotokoll: Grundbucheintrag entfernt → Mietvertrag ergänzt

**Datum:** August 2026 · **Betrifft:** LeadPilot GmbH, Projektwissen "LeadPilot – Entwickeln einer fiktiven Geschäftsidee"

## Ausgangslage

Das Dokument `GRUNDBUCHEINTRAG LEADPILOT GMBH.md` wies die LeadPilot GmbH als Eigentümerin eines 1.420 m² großen Grundstücks am Augustusplatz mit einer Grundschuld über 1.500.000 € aus (Eintragung 02.05.2022). Das ist unhaltbar: Die Eintragung datiert vor der Beurkundung des Gesellschaftsvertrags (21.07.2022) — eine GmbH kann vor ihrer Errichtung kein Eigentum erwerben. Zu diesem Thema gab es nie eine Übungsaufgabe; das Dokument war ein isolierter Fremdkörper. Alle anderen Dokumente (Faktenblatt v1.1, Bilanz/GuV, Check-up 2025, Dashboard) gingen bereits korrekt von angemieteten Büroflächen aus — dieser eine Fund war der einzige Widerspruch im gesamten Projektbestand.

## Was zu tun ist

**Bitte lösche manuell aus dem Claude-Projektwissen:** `GRUNDBUCHEINTRAG LEADPILOT GMBH.md`
Cowork hat nur Lesezugriff auf die Projektwissensdatenbank und kann die Datei nicht selbst entfernen. Alle unten aufgeführten aktualisierten Dateien kannst du im Anschluss als Ersatz für die bisherigen Versionen ins Projektwissen hochladen.

## Neu erstellt

| Datei | Inhalt |
| :-- | :-- |
| `LeadPilot GmbH - Mietvertrag Augustusplatz 9.docx` | Vollständiger fiktiver Gewerberaummietvertrag (12 §§), Vermieterin Augustusplatz Immobilien Leipzig GmbH & Co. KG, Mietbeginn 01.09.2022 (nach Gründung), Laufzeit bis 31.08.2027 |

## Wirkungskette der Miete auf die Finanzdokumente

Die Bilanz/GuV enthielten bereits **keine** Position "Grundstücke/Gebäude" im Anlagevermögen und bereits eine Sammelposition "Miete, Recht, Buchhaltung, Versicherung" (52.000 €, GJ 2025) mit dem Hinweis "Büroflächen Augustusplatz 9 – angemietet". Finanziell war das Projekt also schon konsistent mit einer Mieterin-Rolle — nur der Grundbuchauszug widersprach dem. Entsprechend waren **keine Zahlenänderungen** nötig, nur die Auflösung der Sammelposition in nachvollziehbare Einzelbeträge, mit dem Mietvertrag als Beleg:

| Position | Betrag/Jahr |
| :-- | --: |
| Nettokaltmiete (2.850 €/Monat) | 34.200 € |
| Nebenkosten (316,67 €/Monat) | 3.800 € |
| Stellplätze (2 × 75 €/Monat) | 1.800 € |
| **Miete gesamt** | **39.800 €** |
| Rechtsberatung | 5.000 € |
| Buchhaltung/Steuerberatung | 5.700 € |
| Versicherungen | 1.500 € |
| **Summe = GuV-Position "Miete, Recht, Buchhaltung, Versicherung"** | **52.000 €** |

Die Kaution (8.550 €, drei Nettokaltmieten) ist in der Bilanzposition "Sonstige Vermögensgegenstände" (14.000 €, zusammen mit USt-Forderungen) enthalten und bleibt zahlenmäßig unverändert.

## Aktualisierte Dateien (bereitgestellt)

| Datei | Änderung |
| :-- | :-- |
| `LeadPilot - Faktenblatt v1.1.md` | Sitz-Zeile um Mietvertragsdatum/-laufzeit ergänzt; Kostenaufschlüsselung Miete/Recht/Buchhaltung/Versicherung ergänzt; Bilanz-Fußnote zur Kaution ergänzt; Hinweis auf Entfernung des Grundbuchauszugs im Änderungsverlauf |
| `LeadPilot - Unternehmens - Check-up 2025.md` | Sitz-Zeile um Mietvertragsdatum ergänzt; Hinweis zur Dokumentenbereinigung im Kopf |
| `LeadPilot - Jahresabschluss 2025.xlsx` | Bilanz: Fußnote zur Kautions-Zusammensetzung ergänzt (Zeile 26). GuV: Fußnote zur Aufschlüsselung der Mietposition ergänzt (Zeile 44). Keine Formeln oder Zahlen verändert |
| `LeadPilot - Geschäftsbericht 2025.xlsx` | Deckblatt: Sitz-Zeile um Mietvertragsdaten ergänzt. Finanzen-Tab: Fußnote zur Kostenaufschlüsselung ergänzt |
| `LeadPilot - Unternehmens-Check-up 2025.xlsx` | Unternehmensprofil-Tab: Sitz-Zeile um "(angemietet, Mietvertrag …)" ergänzt |
| `LeadPilot_Unternehmens-Dashboard.html` | Abschnitt "Sitz & Räumlichkeiten": Tabelle und Hinweisbox aktualisiert, verweist auf neuen Mietvertrags-Abschnitt. Abschnitt "Grundbuchauszug" vollständig ersetzt durch neuen Abschnitt "Mietvertrag" (Eckdatentabelle, §§ 1–11 im zweispaltigen Layout, Unterschriftenblock). Navigation und Dokumentenübersicht aktualisiert (Grundbuch → Mietvertrag) |

## Geprüft, keine Änderung nötig

- `LeadPilot - Gesellschafterliste.md`, `FIKTIVE SATZUNG DER LEADPILOT GMBH.md`, `ANMELDUNG ZUM HANDELSREGISTER LEADPILOT GMBH.md`, `GESCHÄFTSFÜHRER ANSTELLUNGSVERTRAG LEADPILOT GMBH.md` — keine Grundbuch- oder Immobilienbezüge
- CRM-Datei (Kontakte/Opportunities) — kein Bezug zum Thema
