import React from 'react';

/**
 * @startingPoint section="Feedback" subtitle="Inline banner — info/success/warning/error with icon" viewport="700x160"
 */
export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children?: React.ReactNode;
  onDismiss?: () => void;
}

/** Inline banner for validation/status messages. `error` uses the dedicated red tone (never orange) per brand rule; `warning` reuses accent orange. */
export function Alert(props: AlertProps): JSX.Element;
