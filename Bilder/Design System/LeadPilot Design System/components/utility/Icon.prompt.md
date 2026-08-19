Renders one glyph from LeadPilot's outline icon set — a lightweight Heroicons-style substitute since the source brand files defined no icon system.

```jsx
<Icon name="checkCircle" size={18} color="var(--color-primary)" />
```

Notable: `color` defaults to `currentColor` so icons inherit the surrounding text color; pair with `size` matched to the adjacent type (16–18px for body text, 20–24px for buttons/nav). Full name list is exported as `ICON_NAMES`.
