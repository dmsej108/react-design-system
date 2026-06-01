import React from 'react';
import styles from './Table.module.css';

// ── 타입 ─────────────────────────────────────────

/** columns + data 방식에서 열 정의 */
export interface TableColumn<T = Record<string, unknown>> {
  key: keyof T & string;
  label: string;
  /** value td가 나머지 열을 모두 채울지 여부 */
  fullValue?: boolean;
  /** 값을 커스텀 렌더링 */
  render?: (value: unknown, data: T) => React.ReactNode;
}

/** rows 방식에서 셀 정의 */
export interface TableCell {
  label: string;
  value: React.ReactNode;
  labelSpan?: number;
  valueSpan?: number;
  fullValue?: boolean;
}

export interface TableRow {
  cells: TableCell[];
}

export type TableLayout = 'fixed' | 'auto';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  /** columns + data 방식 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns?: TableColumn<any>[];
  data?: Record<string, unknown>;
  /** rows 방식 */
  rows?: TableRow[];
  /** 한 행에 배치할 label+value 쌍 수 (기본 1) */
  columnsPerRow?: number;
  layout?: TableLayout;
  bordered?: boolean;
  striped?: boolean;
}

// ── columns + data → rows 변환 ────────────────────

function buildRows(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: TableColumn<any>[],
  data: Record<string, unknown>,
  columnsPerRow: number,
): TableRow[] {
  const rows: TableRow[] = [];
  let i = 0;

  while (i < columns.length) {
    const col = columns[i];

    // fullValue 항목은 단독 행으로 분리
    if (col.fullValue) {
      rows.push({
        cells: [{
          label: col.label,
          value: col.render ? col.render(data[col.key], data) : (data[col.key] as React.ReactNode) ?? '-',
          fullValue: true,
        }],
      });
      i += 1;
      continue;
    }

    // 일반 항목은 columnsPerRow 단위로 묶되, fullValue 항목 직전까지만
    const chunk: typeof columns = [];
    while (chunk.length < columnsPerRow && i < columns.length && !columns[i].fullValue) {
      chunk.push(columns[i]);
      i += 1;
    }

    rows.push({
      cells: chunk.map((c) => ({
        label: c.label,
        value: c.render ? c.render(data[c.key], data) : (data[c.key] as React.ReactNode) ?? '-',
        fullValue: c.fullValue,
      })),
    });
  }

  return rows;
}

// ── Component ─────────────────────────────────────

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      columns,
      data,
      rows: rowsProp,
      columnsPerRow = 1,
      layout = 'fixed',
      bordered = true,
      striped = false,
      className = '',
      ...rest
    },
    ref,
  ) => {
    const rows: TableRow[] =
      rowsProp ??
      buildRows(columns ?? [], data ?? {}, columnsPerRow);

    const totalCols = columnsPerRow * 2;

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
                    ? totalCols - labelColSpan
                    : (cell.valueSpan ?? 1);

                  return (
                    <React.Fragment key={cellIdx}>
                      <th className={styles.th} colSpan={labelColSpan} scope="row">
                        {cell.label}
                      </th>
                      <td className={styles.td} colSpan={valueColSpan}>
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
