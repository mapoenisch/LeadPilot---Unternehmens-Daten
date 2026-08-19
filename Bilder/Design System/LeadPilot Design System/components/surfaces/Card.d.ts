import React from 'react';

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
