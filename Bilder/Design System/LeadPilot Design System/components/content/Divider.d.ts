import React from 'react';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  /** CSS length for the margin around the divider line. Default var(--space-5). */
  spacing?: string;
}

/** Subtle low-opacity rule for separating content blocks. Keep thin and quiet — never a strong structural line. */
export function Divider(props: DividerProps): JSX.Element;
