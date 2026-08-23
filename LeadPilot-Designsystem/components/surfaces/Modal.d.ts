import React from 'react';

/**
 * @startingPoint section="Surfaces" subtitle="Dialog shell with backdrop, title, footer actions" viewport="700x420"
 */
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

/** Centered dialog shell over a dark scrim. Click outside or the × to close. */
export function Modal(props: ModalProps): JSX.Element | null;
