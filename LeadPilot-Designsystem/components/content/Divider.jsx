import React from 'react';

export function Divider({ orientation = 'horizontal', spacing = 'var(--space-5)', style }) {
  if (orientation === 'vertical') {
    return <div style={{ width: '1px', alignSelf: 'stretch', background: 'var(--color-border)', opacity: 0.6, margin: `0 ${spacing}`, ...style }} />;
  }
  return <div style={{ height: '1px', width: '100%', background: 'var(--color-border)', opacity: 0.6, margin: `${spacing} 0`, ...style }} />;
}
