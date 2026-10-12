import React from 'react';

export function SectionHeader({ eyebrow, title, description, actions }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
      <div>
        {eyebrow && (
          <div style={{ color: 'var(--color-primary)', fontSize: 'var(--text-tiny)', fontWeight: 'var(--weight-semibold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)', marginBottom: 'var(--space-2)' }}>
            {eyebrow}
          </div>
        )}
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-text)', letterSpacing: 'var(--tracking-tight)' }}>
          {title}
        </h2>
        {description && (
          <p style={{ margin: 'var(--space-2) 0 0', color: 'var(--color-text-muted)', fontSize: 'var(--text-body)', maxWidth: '520px' }}>
            {description}
          </p>
        )}
      </div>
      {actions && <div style={{ display: 'flex', gap: 'var(--space-3)' }}>{actions}</div>}
    </div>
  );
}
