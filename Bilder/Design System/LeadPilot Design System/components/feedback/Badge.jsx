import React from 'react';

const VARIANTS = {
  cyan: { border: 'var(--color-primary)', color: 'var(--color-primary)' },
  orange: { border: 'var(--color-accent)', color: 'var(--color-accent)' },
  neutral: { border: 'var(--color-border)', color: 'var(--color-text-muted)' },
};

export function Badge({ variant = 'cyan', children, icon, style }) {
  const v = VARIANTS[variant] || VARIANTS.cyan;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '5px',
        background: 'var(--color-bg-deep)', border: `1px solid ${v.border}`,
        color: v.color, borderRadius: 'var(--radius-pill)',
        padding: '4px 12px', fontSize: 'var(--text-tiny)',
        fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)',
        textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)',
        ...style,
      }}
    >
      {icon}
      {children}
    </span>
  );
}
