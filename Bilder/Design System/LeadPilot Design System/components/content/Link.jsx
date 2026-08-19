import React from 'react';

export function Link({ href = '#', children, underlineOnHover = true, style, ...rest }) {
  return (
    <a
      href={href}
      style={{
        color: 'var(--color-primary)',
        fontFamily: 'var(--font-body)',
        textDecoration: 'none',
        transition: 'color var(--duration-fast) var(--ease-standard)',
        ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary-hover)'; if (underlineOnHover) e.currentTarget.style.textDecoration = 'underline'; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.textDecoration = 'none'; }}
      {...rest}
    >
      {children}
    </a>
  );
}
