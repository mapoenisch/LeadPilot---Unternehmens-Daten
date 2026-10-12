import React from 'react';

/**
 * @startingPoint section="Forms" subtitle="Text field with label, focus ring, error state" viewport="700x260"
 */
export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  /** Error message string (also switches border/helper to error color), or `true` for error styling with no message. */
  error?: string | boolean;
  helperText?: string;
  size?: 'sm' | 'md';
}

/** Single-line text field: dark surface, cyan focus ring, red border+text on error. */
export function Input(props: InputProps): JSX.Element;
