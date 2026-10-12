import React from 'react';

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
