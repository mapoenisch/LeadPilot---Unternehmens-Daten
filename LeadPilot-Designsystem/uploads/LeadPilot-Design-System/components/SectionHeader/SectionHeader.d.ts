import React from 'react';

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
