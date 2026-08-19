import React from 'react';
import { Icon } from '../utility/Icon.jsx';

const MAP = {
  info: { color: 'var(--color-primary)', bg: 'var(--color-primary-soft)', icon: 'info' },
  success: { color: 'var(--color-success)', bg: 'var(--color-success-soft)', icon: 'checkCircle' },
  warning: { color: 'var(--color-warning)', bg: 'var(--color-warning-soft)', icon: 'alertTriangle' },
  error: { color: 'var(--color-error)', bg: 'var(--color-error-soft)', icon: 'xCircle' },
};

export function Alert({ variant = 'info', title, children, onDismiss, style }) {
  const v = MAP[variant] || MAP.info;
  return (
    <div
      style={{
        display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start',
        background: v.bg, border: `1px solid ${v.color}`, borderRadius: 'var(--radius-md)',
        padding: 'var(--space-4)', color: 'var(--color-text)', fontFamily: 'var(--font-body)',
        ...style,
      }}
    >
      <Icon name={v.icon} size={18} color={v.color} style={{ flexShrink: 0, marginTop: '2px' }} />
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontWeight: 'var(--weight-semibold)', marginBottom: children ? '2px' : 0 }}>{title}</div>}
        {children && <div style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-muted)' }}>{children}</div>}
      </div>
      {onDismiss && (
        <button onClick={onDismiss} aria-label="Dismiss" style={{ background: 'transparent', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
          <Icon name="close" size={16} />
        </button>
      )}
    </div>
  );
}
