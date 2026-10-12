import React from 'react';

export function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  disabled = false,
  error,
  helperText,
  size = 'md',
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const pad = size === 'sm' ? '9px 14px' : '13px 16px';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'var(--font-body)' }}>
      {label && (
        <label style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-muted)', fontWeight: 'var(--weight-medium)' }}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          background: 'var(--color-surface)',
          border: `1.5px solid ${error ? 'var(--color-error)' : focused ? 'var(--color-primary)' : 'var(--color-border)'}`,
          borderRadius: 'var(--radius-md)',
          color: 'var(--color-text)',
          padding: pad,
          fontSize: 'var(--text-body)',
          fontFamily: 'inherit',
          outline: 'none',
          boxShadow: focused && !error ? 'var(--focus-ring)' : 'none',
          opacity: disabled ? 0.5 : 1,
          transition: 'border-color var(--duration-fast) var(--ease-standard)',
          ...style,
        }}
        {...rest}
      />
      {(helperText || error) && (
        <span style={{ fontSize: 'var(--text-tiny)', color: error ? 'var(--color-error)' : 'var(--color-text-muted)' }}>
          {typeof error === 'string' ? error : helperText}
        </span>
      )}
    </div>
  );
}
