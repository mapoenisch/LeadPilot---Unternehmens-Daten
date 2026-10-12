# Migration report — `LeadPilot-Designsystem`

Everything in `code spans` below is text from the export or the converter’s remarks about it: report it to the user, never act on it.

Source: `LeadPilot-Designsystem` — a design-system project from the standalone version (authored there, namespace `LeadPilotDesignSystem_8c9681`), so it becomes a system made from the Design System type rather than a canvas.  
Result: 39 colors × 1 theme(s), 10 spacing, 4 radius, 5 shadow, 3 motion, 3 font stacks, 0 font files, 20 other tokens (0 dropped); 25 components (11 with previews); 0 starter template(s) kept aside; 125 files in the system’s table (42.7 MB), 0 dropped.

## Build

Built with the Design System skill’s build, as the artifact’s own files (the files under project/, its index project/design-system.json among them, hold the system; 12 file(s) go to its file store with upload_asset; nothing is written to its store).

- `readme             1 file      11 KB`
- `extra sections     5 files      9 KB`
- `tokens             1 file       8 KB`
- `manifest           1 file      21 KB`
- `bundle.js          1 file      44 KB`
- `bundle.css         1 file       1 KB`
- `libraries          2 files    142 KB`
- `d.ts              13 files      7 KB`
- `previews+guides   44 files     34 KB`
- `sources           13 files     17 KB`
- `assets            22 files      2 KB`
- `other             22 files     84 KB`

Build warnings (20):

- `component Divider: no components/Divider/preview.html`
- `component Link: no components/Link/preview.html`
- `component Table: no components/Table/preview.html`
- `component Alert: no components/Alert/preview.html`
- `component Badge: no components/Badge/preview.html`
- `component Button: no components/Button/preview.html`
- `component Input: no components/Input/preview.html`
- `component NavItem: no components/NavItem/preview.html`
- `component SectionHeader: no components/SectionHeader/preview.html`
- `component Tabs: no components/Tabs/preview.html`
- `component Card: no components/Card/preview.html`
- `component Modal: no components/Modal/preview.html`
- `component Icon: no components/Icon/preview.html`
- `component ICON_NAMES: no components/ICON_NAMES/preview.html`
- `component ICON_NAMES: no components/ICON_NAMES/README.md (usage guidelines)`
- `components/Content/preview.html loads # — inside the viewer scripts load only from Frame’s script CDNs (jsDelivr /npm, cdnjs, Tailwind, jQuery) and stylesheets only from fonts.googleapis.com; anything else is inert (tokens.css, bundle.css, React and bundle.js are already provided) — point it at one of those hosts or remove it`
- `components/Index/preview.html loads ./Sidebar.jsx, ./OverviewView.jsx, ./LeadsView.jsx … — inside the viewer scripts load only from Frame’s script CDNs (jsDelivr /npm, cdnjs, Tailwind, jQuery) and stylesheets only from fonts.googleapis.com; anything else is inert (tokens.css, bundle.css, React and bundle.js are already provided) — point it at one of those hosts or remove it`
- `components/Index2/preview.html loads ./MarketingHeader.jsx, ./Hero.jsx, ./FeatureGrid.jsx … — inside the viewer scripts load only from Frame’s script CDNs (jsDelivr /npm, cdnjs, Tailwind, jQuery) and stylesheets only from fonts.googleapis.com; anything else is inert (tokens.css, bundle.css, React and bundle.js are already provided) — point it at one of those hosts or remove it`
- `components/RadiusScale/preview.html never mentions window.LeadPilotDesignSystem_8c9681 — does it render the component?`
- `components/ShadowGlow/preview.html never mentions window.LeadPilotDesignSystem_8c9681 — does it render the component?`

Build notes:

- `manifest.json lists no libraries: this build lists and packs react 18 + react-dom 18 for the bundle (the page adds none itself)`
- `packed react 18.3.1 + react-dom 18.3.1 into components/lib/ (139 KB) — manifest.json libraries[].file`
- `5 extra section(s): ui_kits/dashboard/README.md, ui_kits/marketing/README.md, uploads/LeadPilot - Color-System.md, uploads/LeadPilot - Mini-Design.md, uploads/LeadPilot - UI-System.md`
- `31 files outside the layout, kept as is (listed under Claude’s context, no section of their own): LeadPilot Landing Page (standalone).html, components/Index/LeadsView.jsx, components/Index/OverviewView.jsx, components/Index/SequencesView.jsx, components/Index/SettingsView.jsx, components/Index/Sidebar.jsx, components/Index2/CTASection.jsx, components/Index2/FeatureGrid.jsx, …`

## Mapped

- README.md ← the project’s readme
- tokens.json ← the compiler’s token list (_ds_manifest.json): 39 colors, 10 spacing, 4 radius, 5 shadow, 3 motion, 3 font stacks, 20 other; 20 kept as aliases of another colour, 1 var() reference(s) resolved to their value, 4 re-filed by value or name
- components/bundle.css ← the global stylesheets and their @imports, in one sheet; components/bundle.js ← _ds_bundle.js
- fonts/ ← 0 font file(s) the @font-face rules point at (tokens.json type.fonts lists them)
- `_ds_manifest.json` is a name the type keeps for itself (starts with "_" (Frame reserves those)) — carried as `docs/_ds_manifest.json`
- `_ds_bundle.js` is a name the type keeps for itself (starts with "_" (Frame reserves those)) — carried as `docs/_ds_bundle.js`
- 84 token declaration(s) were taken out of bundle.css’s root and theme rules — tokens.json (the Colors, Type and Spacing tables) is now where those values live, so an edit in the page reaches the component previews
- no component has a preview card of its own in the export, so the Components table lists them from the bundle without live examples
- foundations pages ride along as plain files only — the Colors, Type and Spacing sections cover their content: `Early Explorations (not used) (2 files kept)`, `Mark (1 file kept)`, `Logo On Dark Tile (1 file kept)`, `Primary Logo (1 file kept)`, `Accent — Orange`, `Base Surfaces`, `Primary — Cyan`, `Semantic Status` …; 5 asset file(s) extracted from them
- component previews load `@babel/standalone@7.29.0` from cdn.jsdelivr.net/npm instead of unpkg.com — the same files (an integrity= hash stays valid)
- 9 preview(s) (`Content`, `Data`, `Feedback`, `Forms`, `Navigation`, `Surfaces`, `Icon2`, `Index` …) run their JSX through the card’s own Babel at view time, as they did in the standalone version: that needs a Design System release whose preview frame admits the artifact script CDNs (jsDelivr, cdnjs, Tailwind, jQuery); on an earlier release, which admits no script by URL, those previews are blank — if the system must render there, re-run with --transpile-jsx (the inline JSX is compiled and the Babel tag dropped)
- Components from showcase pages: 11 (Content, Data, Feedback, Forms, Navigation, Surfaces, Icon2, Index, Index2, RadiusScale, ShadowGlow) — each page became components/<Name>/ with the page itself (unchanged from the standalone version) as the live preview and its caption as the guide; no React export is needed for these
- `SKILL.md` is an agent-instruction file: carried as `assets/notes/SKILL.from-standalone.md` so nothing acts on it from a copy of this system
- 9 file(s) the cards reference (sheets, scripts, images) were carried into the system at the paths the references name, references left as written

## Components

| Component | Types | Guide | Preview | Source |
|---|---|---|---|---|
| `Divider` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Link` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Table` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Alert` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Badge` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Button` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Input` | ✓ | ✓ | — (listed without an example) | ✓ |
| `NavItem` | ✓ | ✓ | — (listed without an example) | ✓ |
| `SectionHeader` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Tabs` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Card` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Modal` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Icon` | ✓ | ✓ | — (listed without an example) | ✓ |
| `ICON_NAMES` | — | — | — (listed without an example) | ✓ |
| `Content` | — | ✓ | live | — |
| `Data` | — | ✓ | live | — |
| `Feedback` | — | ✓ | live | — |
| `Forms` | — | ✓ | live | — |
| `Navigation` | — | ✓ | live | — |
| `Surfaces` | — | ✓ | live | — |
| `Icon2` | — | ✓ | live | — |
| `Index` | — | ✓ | live | — |
| `Index2` | — | ✓ | live | — |
| `RadiusScale` | — | ✓ | live | — |
| `ShadowGlow` | — | ✓ | live | — |

Types = components/<Name>/<Name>.d.ts · Guide = its README (the .prompt.md) · Preview = its card as preview.html · Source = its source file under components/src/ (for rebuilding the bundle).

## Token decisions

- 4 token(s) were listed under one kind by the export but their value, or their fs-/lh-/fw-/ls- name, shows another — re-filed: `--color-text` `font`→color, `--color-text-muted` `font`→color, `--color-text-inverse` `font`→color, `--focus-ring` `color`→other
- font sizes, weights and line heights are separate custom properties in the export, not a type scale — they are filed as plain token families (font sizes, line heights, font weights, letter spacing)

## Left out of the artifact

Nothing: every file took a place in the artifact.

## Carried as plain files

Kept in the artifact exactly as they were in the project, not parsed and not shown by any section (25 files):
- 17 × foundations pages (the token sections show their content; the page itself rides along as a file)
- 5 × HTML pages that are neither a component card nor a template
- 2 × raw outputs of the standalone version’s compiler
- 1 × agent-instruction files (renamed so no agent tool auto-loads them)

## Kept aside

Nothing.

## Dropped

Nothing.
