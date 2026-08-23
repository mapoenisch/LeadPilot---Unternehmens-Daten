import React from 'react';

/**
 * @startingPoint section="Feedback" subtitle="Small pill label — cyan, orange, or neutral outline" viewport="700x140"
 */
export interface BadgeProps {
  variant?: 'cyan' | 'orange' | 'neutral';
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

/** Small uppercase pill for status/labels like "New" or "Live". Outline style — deep-surface fill with a colored border and matching text. */
export function Badge(props: BadgeProps): JSX.Element;
