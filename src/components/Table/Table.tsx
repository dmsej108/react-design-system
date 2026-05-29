import React from 'react';
import styles from './Table.module.css';

// ── Row 데이터 타입 ──────────────────────────────

export interface TableCell {
  label: string;
  value: React.ReactNode;
  labelSpan?: number;
  valueSpan?: number;
  /** value td가 나머지 열을 모두 채울지 여부 */
  fullValue?: boolean;
}

export interface TableRow {
  cells: TableCell[];
}

// ── Props ────────────────────────────────────────

export type TableLayout = 'fixed' | 'auto';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  rows: TableRow[];
  /** 열 수 (label+value 쌍 기준, 기본 2열 = label 1 + value 1) */
  columns?: number;
  layout?: TableLayout;
  bordered?: boolean;
  striped?: boolean;
}

// ── Component ────────────────────────────────────

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      rows,
      columns = 2,
      layout = 'fixed',
      bordered = true,
      striped = false,
      className = '',
      ...rest
    },
    ref,
  ) => {
    const rootClass = [
      styles.table,
      bordered ? styles.bordered : '',
      striped ? styles.striped : '',
      styles[layout],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={styles.wrapper}>
        <table ref={ref} className={rootClass} {...rest}>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {row.cells.map((cell, cellIdx) => {
                  const labelColSpan = cell.labelSpan ?? 1;
                  const valueColSpan = cell.fullValue
                    ? columns * 2 - labelColSpan
                    : cell.valueSpan ?? 1;

                  return (
                    <React.Fragment key={cellIdx}>
                      <th
                        className={styles.th}
                        colSpan={labelColSpan}
                        scope="row"
                      >
                        {cell.label}
                      </th>
                      <td
                        className={styles.td}
                        colSpan={valueColSpan}
                      >
                        {cell.value}
                      </td>
                    </React.Fragment>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
);

Table.displayName = 'STable';
