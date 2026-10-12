# Lead Pilot UI System

A compact UI system for Lead Pilot: dark-first, cyan-led, orange as accent, built to stay consistent across landing pages, dashboards, and product UI.

## 1) Design principles

- Dark by default.
- Cyan is the primary action color.
- Orange is reserved for emphasis and single-purpose highlights.
- White is used for text and clarity.
- Keep layouts spacious and minimal.
- Use high contrast and simple shapes.

## 2) Color tokens

### Base
- `bg` `#14161A`
- `surface` `#1B1F24`
- `surface-2` `#0E1013`
- `border` `#2A3038`

### Text
- `text-primary` `#FFFFFF`
- `text-secondary` `#A7B0BA`
- `text-inverse` `#14161A`

### Brand
- `primary` `#00D9C6`
- `primary-hover` `#7CEFE6`
- `primary-soft` `rgba(0, 217, 198, 0.12)`
- `accent` `#FF7A3D`
- `accent-hover` `#FF9A66`
- `accent-soft` `rgba(255, 122, 61, 0.14)`

## 3) Type scale

Use a simple, modern sans-serif style.

- `display` 48–64 px, bold
- `h1` 32–40 px, semibold/bold
- `h2` 24–28 px, semibold
- `h3` 18–20 px, semibold
- `body` 16 px, regular
- `small` 13–14 px, regular

### Type rules
- Headlines can be tight.
- Body text should stay readable and open.
- Use all caps only for labels, chips, or short UI text.

## 4) Spacing system

Use an 8 px base grid.

- `space-1` 4 px
- `space-2` 8 px
- `space-3` 12 px
- `space-4` 16 px
- `space-5` 24 px
- `space-6` 32 px
- `space-8` 48 px
- `space-10` 64 px

## 5) Radius and shadow

### Radius
- `radius-sm` 8 px
- `radius-md` 12 px
- `radius-lg` 20 px
- `radius-pill` 999 px

### Shadow
- `shadow-glow-cyan`: soft cyan glow for key actions
- `shadow-glow-orange`: subtle orange glow for emphasis
- Keep shadows light; the dark background should do most of the work.

## 6) Core components

### Button
#### Primary button
- Background: `primary`
- Text: `text-inverse`
- Radius: `radius-pill`
- Hover: `primary-hover`
- Use for main CTA only.

#### Secondary button
- Background: transparent
- Border: `primary`
- Text: `primary`
- Hover background: `primary-soft`

#### Accent button
- Background: `accent`
- Text: `text-inverse`
- Use only for one high-priority action on a screen.

### Input
- Background: `surface`
- Border: `border`
- Text: `text-primary`
- Focus ring: `primary`
- Radius: `radius-md`
- Placeholder: `text-secondary`

### Card
- Background: `surface`
- Border: `border`
- Radius: `radius-lg`
- Padding: `space-5`
- Optional subtle glow for featured cards.

### Badge / chip
- Background: `surface-2`
- Border: `primary`
- Text: `primary`
- Radius: `radius-pill`

### Link
- Text: `primary`
- Hover: `primary-hover`
- Underline only on hover or focus.

### Divider
- Color: `border`
- Opacity: low
- Keep them subtle.

## 7) UI states

### Default
- Neutral surfaces, cyan for interactive items.

### Hover
- Slightly brighter background or border.
- No large movement.

### Active
- Cyan fill or cyan border.
- Strong contrast.

### Disabled
- Reduced opacity.
- No glow.

### Error
- Use a separate red tone only for validation or critical failures.
- Do not replace orange with red for normal warnings.

## 8) Layout patterns

### Page structure
- Large dark canvas.
- One strong hero section.
- Compact content blocks.
- Clear CTA placement.

### Content density
- Use generous spacing.
- Keep one primary action per section.
- Avoid multiple competing highlights.

### Visual balance
- Cyan should guide the eye.
- Orange should punctuate the moment.
- White should support readability.

## 9) Recommended component set for version 1

- Buttons.
- Inputs.
- Cards.
- Badges.
- Alerts.
- Tabs.
- Section headers.
- Navigation items.
- Simple table styles.
- Modal shell.

## 10) Quick rulebook

- Use cyan for action.
- Use orange for emphasis.
- Use dark backgrounds everywhere.
- Keep white for clarity.
- Do not introduce extra brand colors unless needed.
- Stay minimal, sharp, and consistent.
