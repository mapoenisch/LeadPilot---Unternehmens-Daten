import React from 'react';

export function Tabs({ items = [], activeId, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-5)', borderBottom: '1px solid var(--color-border)' }}>
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <button
            key={item.id}
            onClick={() => onChange && onChange(item.id)}
            style={{
              background: 'transparent', border: 'none', cursor: 'pointer',
              padding: '0 0 var(--space-3) 0', marginBottom: '-1px',
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)',
              fontWeight: 'var(--weight-semibold)',
              color: active ? 'var(--color-primary)' : 'var(--color-text-muted)',
              borderBottom: `2px solid ${active ? 'var(--color-primary)' : 'transparent'}`,
              transition: 'color var(--duration-fast) var(--ease-standard)',
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
