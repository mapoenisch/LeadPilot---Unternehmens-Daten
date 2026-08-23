# Lead Pilot Color System

A compact color system for the Lead Pilot brand, tuned to the existing logo direction: dark base, cyan primary, orange accent, white support.

## Core palette

| Token | Hex | Use |
|---|---:|---|
| `color.bg` | `#14161A` | Main dark background |
| `color.surface` | `#1B1F24` | Cards, panels, elevated sections |
| `color.surfaceAlt` | `#0E1013` | Deeper contrast surface |
| `color.text` | `#FFFFFF` | Primary text on dark backgrounds |
| `color.textMuted` | `#A7B0BA` | Secondary text, labels, helper copy |
| `color.cyan` | `#00D9C6` | Primary brand color, links, active states |
| `color.cyanSoft` | `#7CEFE6` | Hover, glow, subtle fills |
| `color.orange` | `#FF7A3D` | Accent, CTA, highlight, emphasis |
| `color.orangeSoft` | `#FFD1B8` | Soft accent fill, badges |
| `color.border` | `#2A3038` | Dividers, outlines, input borders |

## Usage ratios

- Dark / black: 80–85%
- Cyan: 10–15%
- Orange: 3–5%
- White: mostly text and structural contrast

## Recommended roles

### Backgrounds
- Use `color.bg` for the main canvas.
- Use `color.surface` for cards and modals.
- Use `color.surfaceAlt` for deeper sections or dark overlays.

### Typography
- Use `color.text` for headlines and important UI text.
- Use `color.textMuted` for metadata, descriptions, and helper text.

### Actions
- Use `color.cyan` for primary interactive elements.
- Use `color.orange` for the strongest CTA or key highlight only.
- Do not use both as equal-priority action colors on the same screen.

### Borders and detail
- Use `color.border` for subtle structure.
- Keep borders thin and low-contrast so the colors stay dominant.

## Component examples

### Primary button
- Background: `#00D9C6`
- Text: `#14161A`
- Hover: `#7CEFE6`

### Secondary button
- Border: `#00D9C6`
- Text: `#00D9C6`
- Hover background: `rgba(0, 217, 198, 0.12)`

### Accent button
- Background: `#FF7A3D`
- Text: `#14161A`
- Use only for one key CTA per screen.

### Badge / chip
- Background: `#1B1F24`
- Border: `#00D9C6`
- Text: `#00D9C6`

## Design principle

Keep the interface mostly dark and calm, then let cyan guide the user and orange mark the moment of action. That keeps the brand energetic without making the UI feel noisy.
