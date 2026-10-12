import React from 'react';

export function Table({ columns = [], rows = [] }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)', fontSize: 'var(--text-small)' }}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              style={{
                textAlign: 'left', padding: '10px var(--space-4)', color: 'var(--color-text-muted)',
                fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-tiny)', textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-caps)', borderBottom: '1px solid var(--color-border)',
              }}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: '1px solid var(--color-border-soft)' }}>
            {columns.map((col) => (
              <td key={col.key} style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text)' }}>
                {col.render ? col.render(row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
