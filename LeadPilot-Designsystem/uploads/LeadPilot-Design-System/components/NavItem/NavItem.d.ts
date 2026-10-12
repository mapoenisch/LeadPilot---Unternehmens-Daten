import React from 'react';

/**
 * @startingPoint section="Navigation" subtitle="Sidebar row: icon, label, active state, optional badge" viewport="700x140"
 */
export interface NavItemProps {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

/** Sidebar/nav-rail row. Active state fills with primary-soft cyan and tints text+icon cyan. */
export function NavItem(props: NavItemProps): JSX.Element;
