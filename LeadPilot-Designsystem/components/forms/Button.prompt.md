Pill-shaped button — the primary interactive element across LeadPilot surfaces. Use `primary` for the main CTA, `secondary` for lower-emphasis actions, and `accent` only for a single high-priority highlight per screen.

```jsx
<Button variant="primary" size="md">Get started</Button>
<Button variant="secondary" iconLeft={<Icon name="plus" size={16} />}>Add lead</Button>
```

Variants: `primary` (cyan fill), `secondary` (cyan outline, transparent fill), `accent` (orange fill — sparingly). Sizes: `sm`, `md`, `lg`. Supports `disabled`, `fullWidth`, `iconLeft`/`iconRight`.
