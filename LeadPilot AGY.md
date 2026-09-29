# Homepage Redesign mit LeadPilot Designsystem

Das aktuelle Design ist bereits auf dem LeadPilot-Designsystem aufgebaut (Off-White `#F9F8F6`, Ink `#1A1A1A`, Brand-Orange `#E56014`, Teal `#23BAA4`). Die Aufgabe ist eine **visuelle Aufwertung** aller Homepage-Sektionen, ohne Funktionen zu verändern. Der Fokus liegt auf mehr Raffinesse, Hierarchie und Designkonsistenz.

## Design-Delta: Was sich ändert

Die aktuelle Homepage nutzt das Designsystem, aber sehr sparsam/flat. Die Überarbeitung bringt:

| Element | Vorher | Nachher |
|---|---|---|
| Backgrounds | Nur Flat-Colors | Subtile Texturen, Noise-Overlays, Diagonal-Grids |
| Sektions-Trenner | Nur `border-b` | Gestaffelte Übergänge, dekorative horizontale Linien |
| Typografie-Hierarchie | Einheitlich | Stärker kontrastiert: Display-Größen, variierte Gewichte |
| Hero-Layout | Einfaches Grid | Vollbreit mit Diagonal-Akzenten & Ticker-Band |
| Navigation | Flach | Scroll-aware mit Backdrop-Blur-Effekt |
| Karten/Blöcke | Kein Hover-Feedback | Raffinierte Hover-States mit Farbübergängen |
| Dekorative Elemente | Minimal | Brand-Typo-Decorations, Linien, Zähler-Indices |
| CTA-Buttons | Einfaches Fill | Pill-Accent-Badge + Animation |

## Designsystem-Tokens (unverändert beibehalten)

```
Farben:
  --background: #F9F8F6   (Off-White/Parchment)
  --ink:        #1A1A1A   (Near-Black)
  --orange:     #E56014   (Brand-Orange, CTAs)
  --teal:       #23BAA4   (Teal-Akzent, Highlights)

Typografie:
  --font-sans:  Inter (Uppercase Tracking, Bold/Black)
  --font-serif: Playfair Display (Italic, Numbers, Zitate)

Raster: max-w-7xl, 12-Col-Grid
Abstände: py-32 (sections), px-4/6/10
```

## Open Questions

> [!IMPORTANT]
> **Wichtig zu bestätigen vor Umsetzung:** Soll der Hero-Hintergrund ein dezentes geometrisches SVG-Grid-Pattern erhalten (reines CSS, keine externen Assets), oder ausschließlich Flat-Color mit Typografie-Dekoration? Beide Varianten sind realisierbar ohne den Off-White-Grundcharakter zu verändern.

> [!NOTE]
> Die Funktionen – Modals, State, Event-Handler, API-Hooks – bleiben zu 100% unberührt. Nur JSX-Struktur/Classnames/Layout werden überarbeitet.

## Proposed Changes

### App-Wrapper

#### [MODIFY] [App.tsx](file:///Users/marcpoenisch/antigravity/LeadPilot/src/App.tsx)
- Dekorativer Scroll-Fortschrittsbalken oben (Orange → Teal Gradient)
- Subtile Noise-Texture via `index.css`

---

### Design-Tokens & CSS

#### [MODIFY] [index.css](file:///Users/marcpoenisch/antigravity/LeadPilot/src/index.css)
- CSS Custom Properties für alle Designsystem-Farben
- Subtle Noise-Background-Texture (inline SVG Data-URL)
- Animierte Unterstreich-Effekte für Links
- Scroll-driven Reveal-Keyframes

---

### Navigation

#### [MODIFY] [Navbar.tsx](file:///Users/marcpoenisch/antigravity/LeadPilot/src/components/Navbar.tsx)
- `backdrop-blur` + Semi-transparenter Hintergrund beim Scrollen (via scroll-listener)
- Aktiver Nav-Link durch untergeordneten oranger Balken-Indikator
- Logo links + Nav zentriert + CTA rechts (statt jusify-between)
- Mobile Menu mit Slide-Down-Animation (statt sofort erscheinen)

---

### Hero

#### [MODIFY] [Hero.tsx](file:///Users/marcpoenisch/antigravity/LeadPilot/src/components/Hero.tsx)
- Fullwidth-Section mit dekorativem diagonalen Trennstrich
- Linkes, übergroßes Typografie-Highlight mit Stagger-Animation
- Rechte Seite: Scrolling Ticker-Band mit KPI-Werten (statt statische Zahlen)
- Floating KPI-Badges mit Glassmorphism-Effekt
- Trust-Indikatoren unter CTA-Buttons (Logos/Icons, keine Kreditkarte, DSGVO)

---

### ProblemSection

#### [MODIFY] [ProblemSection.tsx](file:///Users/marcpoenisch/antigravity/LeadPilot/src/components/ProblemSection.tsx)
- Nummerierte Problempunkte als große taktische Karten statt Liste
- Linke Seite: Stats-Callout mit großer Typografie (`70%` als visuell dominante Aussage)
- Rechte "Lösung"-Box: Dunkle Karte mit Teal-Akzenten (visuell abgehoben)

---

### Features

#### [MODIFY] [Features.tsx](file:///Users/marcpoenisch/antigravity/LeadPilot/src/components/Features.tsx)
- Icon-Treatment: Teal-gefüllte quadratische Badges statt nackte Icons
- Hover-State-Animation: Gesamte Karte translates subtil nach oben
- Feature-Nummern als dekorativer Hintergrund-Text
- Subtext-Highlight im Heading mit Orange-Unterline

---

### InterfaceTour

#### [MODIFY] [InterfaceTour.tsx](file:///Users/marcpoenisch/antigravity/LeadPilot/src/components/InterfaceTour.tsx)
- Screenshot-Frame: Browser-Chrome-Imitation (Adressleiste, Dots)
- Tab-Navigation statt Arrow-Buttons für die Slides
- Progress-Bar unter Slides
- Annotationen: Verbesserte Callout-Bubbles mit Connector-Linien

---

### KeyMetrics

#### [MODIFY] [KeyMetrics.tsx](file:///Users/marcpoenisch/antigravity/LeadPilot/src/components/KeyMetrics.tsx)
- Große Stat-Zahlen über den Charts als eigenständige Sektion
- Chart-Karten: Kontrastreicher Hintergrund (#1A1A1A) mit weißen Charts
- Animated Counter für die Zahlen beim Einblenden in Viewport

---

### CaseStudy

#### [MODIFY] [CaseStudy.tsx](file:///Users/marcpoenisch/antigravity/LeadPilot/src/components/CaseStudy.tsx)
- Anführungszeichen: Übergroße Dekorations-Typografie im Hintergrund
- Pull-Quote: Linksbündige orangene Verticallinie als Editorial-Marker
- Key-Result-Cards: Horizontales Grid auf dunklem Hintergrund

---

### ClientVoices

#### [MODIFY] [ClientVoices.tsx](file:///Users/marcpoenisch/antigravity/LeadPilot/src/components/ClientVoices.tsx)
- Testimonial-Karte: Großes dekoratives Zitat-Zeichen als bg-Element
- Slide-Indikatoren: Punkte statt nur Pfeil-Buttons
- Autoren-Block: Avatar-Placeholder + Firmen-Badge

---

### ImplementationStrategy

#### [MODIFY] [ImplementationStrategy.tsx](file:///Users/marcpoenisch/antigravity/LeadPilot/src/components/ImplementationStrategy.tsx)
- Timeline: Dunkles Hintergrundmuster + Teal-Konnektorlinie
- Schritte als große nummerierte Karten (statt zig-zag)
- Week-Badge: Orange-Pills

---

### Pricing

#### [MODIFY] [Pricing.tsx](file:///Users/marcpoenisch/antigravity/LeadPilot/src/components/Pricing.tsx)
- Highlighted-Plan: Dunkle Karte mit invertiertem Styling
- Preis-Toggle: Pill-Design mit Orange-Indikator-Animation
- Feature-List: Checkmark-Icons statt Punkte

---

### FAQ

#### [MODIFY] [FAQ.tsx](file:///Users/marcpoenisch/antigravity/LeadPilot/src/components/FAQ.tsx)
- Accordion: Breiterer vertikaler Abstand, orangene Linie links beim Öffnen
- Linke Seite: Grosses dekoratives `?` als bg-Element

---

### CTASection

#### [MODIFY] [CTASection.tsx](file:///Users/marcpoenisch/antigravity/LeadPilot/src/components/CTASection.tsx)
- Hintergrund: Diagonal-Pattern auf Dunkel
- CTA-Button: Übergroß mit Orange → Hover-Animation
- Dekorative Elemente: Grid-Lines, LP.-Watermark dramatisiert

---

### Footer

#### [MODIFY] [Footer.tsx](file:///Users/marcpoenisch/antigravity/LeadPilot/src/components/Footer.tsx)
- Newsletter-Form: Aufgewertet mit Border-Animation beim Focus
- Spalten-Trennung: Deutlicher durch vertikale Linien

---

### SignupModal & Modals

#### [MODIFY] [SignupModal.tsx](file:///Users/marcpoenisch/antigravity/LeadPilot/src/components/SignupModal.tsx)
- Form-Inputs: Unterline-Design statt Box
- Success-State: Animierter Checkmark und Teal-Akzent

## Verification Plan

### Automated Tests
- `bun run build` — Zero TypeScript/Build-Errors
- `bun run dev` — Visueller Review aller Sektionen in Browser

### Manual Verification
- Alle Interaktionen bleiben identisch: Modals öffnen/schließen, FAQ toggles, Testimonial-Slider, Pricing-Toggle, etc.
- Responsive-Check: Mobile (375px), Tablet (768px), Desktop (1440px)
