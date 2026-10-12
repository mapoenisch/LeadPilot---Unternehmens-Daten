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

/**
 * @startingPoint section="Surfaces" subtitle="Dark panel, optional cyan glow for featured content" viewport="700x260"
 */
export interface CardProps {
  featured?: boolean;
  padding?: string;
  children?: React.ReactNode;
}

/** Dark surface panel — the base container for stats, feature blocks, and list rows. `featured` adds a cyan border + soft glow for the one card that should stand out. */
export function Card(props: CardProps): JSX.Element;

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  /** CSS length for the margin around the divider line. Default var(--space-5). */
  spacing?: string;
}

/** Subtle low-opacity rule for separating content blocks. Keep thin and quiet — never a strong structural line. */
export function Divider(props: DividerProps): JSX.Element;

export type IconName =
  | 'chevronDown' | 'chevronRight' | 'chevronLeft' | 'check' | 'close' | 'plus' | 'minus'
  | 'search' | 'arrowRight' | 'arrowUpRight' | 'bell' | 'mail' | 'user' | 'settings'
  | 'trash' | 'externalLink' | 'alertTriangle' | 'info' | 'checkCircle' | 'xCircle'
  | 'star' | 'filter' | 'moreHorizontal' | 'calendar' | 'logout' | 'send' | 'upload';

export interface IconProps {
  /** Which glyph to render. */
  name: IconName;
  /** Pixel size (square). Default 20. */
  size?: number;
  /** Stroke width. Default 1.75. */
  strokeWidth?: number;
  /** Stroke color, defaults to currentColor so it inherits text color. */
  color?: string;
  style?: React.CSSProperties;
}

/** Outline icon set (Heroicons-style substitution — no icon assets were provided in the source brand files). */
export function Icon(props: IconProps): JSX.Element | null;

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

export interface LinkProps {
  href?: string;
  children?: React.ReactNode;
  /** Show underline on hover/focus only (default true) — links stay unadorned otherwise. */
  underlineOnHover?: boolean;
}

/** Cyan text link; brightens to the hover-cyan tint and underlines only on hover/focus. */
export function Link(props: LinkProps): JSX.Element;

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

/**
 * @startingPoint section="Navigation" subtitle="Eyebrow + title + description + actions row" viewport="900x180"
 */
export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

/** Page/section title block: optional cyan uppercase eyebrow, display title, muted description, right-aligned actions. */
export function SectionHeader(props: SectionHeaderProps): JSX.Element;

export interface TableColumn<T = any> {
  key: string;
  label: string;
  render?: (row: T) => React.ReactNode;
}

/**
 * @startingPoint section="Data" subtitle="Simple row table with uppercase muted header" viewport="900x320"
 */
export interface TableProps {
  columns: TableColumn[];
  rows: Record<string, any>[];
}

/** Minimal data table: uppercase muted header row, thin low-contrast row dividers, no zebra striping or heavy borders. */
export function Table(props: TableProps): JSX.Element;

export interface TabItem { id: string; label: string; }

/**
 * @startingPoint section="Navigation" subtitle="Underline tab row, cyan active state" viewport="700x120"
 */
export interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange?: (id: string) => void;
}

/** Underline tab row. Active tab and its underline turn cyan; inactive tabs stay muted gray. */
export function Tabs(props: TabsProps): JSX.Element;
