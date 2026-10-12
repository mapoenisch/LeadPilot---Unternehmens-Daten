import React from 'react';

/**
 * @startingPoint section="Forms" subtitle="Pill button: primary, secondary, accent" viewport="700x220"
 */
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

/** Pill-shaped action button. Primary (cyan) is the default and only main-CTA color; accent (orange) is reserved for one high-priority action per screen. */
export function Button(props: ButtonProps): JSX.Element;
