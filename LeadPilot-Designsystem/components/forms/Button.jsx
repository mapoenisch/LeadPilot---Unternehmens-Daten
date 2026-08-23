import React from 'react';

const SIZES = {
  sm: { padding: '8px 16px', fontSize: 'var(--text-small)', gap: '6px' },
  md: { padding: '12px 22px', fontSize: 'var(--text-body)', gap: '8px' },
  lg: { padding: '16px 28px', fontSize: 'var(--text-body)', gap: '8px' },
};

function variantStyle(variant) {
  switch (variant) {
    case 'secondary':
      return {
        background: 'transparent',
        color: 'var(--color-primary)',
        border: '1.5px solid var(--color-primary)',
      };
    case 'accent':
      return {
        background: 'var(--color-accent)',
        color: 'var(--color-text-inverse)',
        border: '1.5px solid transparent',
      };
    default:
      return {
        background: 'var(--color-primary)',
        color: 'var(--color-text-inverse)',
        border: '1.5px solid transparent',
      };
  }
}

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = variantStyle(variant);
  const sizeStyle = SIZES[size] || SIZES.md;
  const hoverBg = {
    primary: 'var(--color-primary-hover)',
    accent: 'var(--color-accent-hover)',
    secondary: 'var(--color-primary-soft)',
  }[variant];

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: sizeStyle.gap,
        width: fullWidth ? '100%' : 'auto',
        padding: sizeStyle.padding,
        fontSize: sizeStyle.fontSize,
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-semibold)',
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
        ...base,
        background: !disabled && hover && hoverBg ? hoverBg : base.background,
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
