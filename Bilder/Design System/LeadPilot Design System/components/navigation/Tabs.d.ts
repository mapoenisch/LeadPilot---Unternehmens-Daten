import React from 'react';

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
