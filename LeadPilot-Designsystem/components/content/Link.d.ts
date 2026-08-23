import React from 'react';

export interface LinkProps {
  href?: string;
  children?: React.ReactNode;
  /** Show underline on hover/focus only (default true) — links stay unadorned otherwise. */
  underlineOnHover?: boolean;
}

/** Cyan text link; brightens to the hover-cyan tint and underlines only on hover/focus. */
export function Link(props: LinkProps): JSX.Element;
