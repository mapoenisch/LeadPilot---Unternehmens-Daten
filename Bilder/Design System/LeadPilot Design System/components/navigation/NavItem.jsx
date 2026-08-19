import React from 'react';

export function NavItem({ icon, label, active = false, badge, onClick, href }) {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag
      href={href}
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
        padding: '10px 14px', borderRadius: 'var(--radius-md)', cursor: 'pointer',
        background: active ? 'var(--color-primary-soft)' : 'transparent',
        color: active ? 'var(--color-primary)' : 'var(--color-text-muted)',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-small)', fontWeight: 'var(--weight-medium)',
        textDecoration: 'none', transition: 'background var(--duration-fast) var(--ease-standard)',
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = 'var(--color-surface-raised)'; }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent'; }}
    >
      {icon}
      <span style={{ flex: 1 }}>{label}</span>
      {badge}
    </Tag>
  );
}
