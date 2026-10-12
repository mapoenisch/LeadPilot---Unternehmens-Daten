import React from 'react';

export function Modal({ open, onClose, title, children, footer, size = 'md' }) {
  if (!open) return null;
  const width = { sm: '360px', md: '480px', lg: '640px' }[size] || '480px';
  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: 'rgba(14,16,19,.7)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width, maxWidth: '90vw', background: 'var(--color-surface)',
          border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-modal)', padding: 'var(--space-6)',
          display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', color: 'var(--color-text)' }}>{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{ background: 'transparent', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', fontSize: '20px', lineHeight: 1 }}
          >
            ×
          </button>
        </div>
        <div style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-body)', lineHeight: 'var(--leading-open)' }}>{children}</div>
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)' }}>{footer}</div>}
      </div>
    </div>
  );
}
