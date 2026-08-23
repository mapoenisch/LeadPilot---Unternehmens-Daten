Inline alert banner with icon, optional title, and dismiss button.

```jsx
<Alert variant="success" title="Lead imported">42 contacts added to your pipeline.</Alert>
<Alert variant="error" title="Sync failed" onDismiss={() => {}}>Check your CRM connection.</Alert>
```

Variants: `info` (cyan), `success` (mint), `warning` (orange), `error` (coral red — reserved for validation/critical failures only, per the color system's rule that red never substitutes for orange).
