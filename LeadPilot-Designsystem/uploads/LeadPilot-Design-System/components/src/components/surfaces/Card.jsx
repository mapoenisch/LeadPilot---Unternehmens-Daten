import React from 'react';

export function Card({ featured = false, padding = 'var(--space-5)', children, style, ...rest }) {
  return (
    <div
      style={{
        background: 'var(--color-surface)',
        border: `1px solid ${featured ? 'var(--color-primary)' : 'var(--color-border)'}`,
        borderRadius: 'var(--radius-lg)',
        padding,
        boxShadow: featured ? 'var(--shadow-glow-cyan)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
