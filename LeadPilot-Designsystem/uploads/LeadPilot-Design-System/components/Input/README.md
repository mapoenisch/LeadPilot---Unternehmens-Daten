Single-line text input with optional label, helper text, and error state.

```jsx
<Input label="Work email" placeholder="you@company.com" />
<Input label="Company" error="This field is required" />
```

Focus shows a cyan border + soft glow ring. Error state swaps the border/helper text to the semantic error red — never orange (orange stays reserved for accent/CTA emphasis).
