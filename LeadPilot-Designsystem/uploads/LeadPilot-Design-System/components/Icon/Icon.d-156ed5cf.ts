import React from 'react';

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
