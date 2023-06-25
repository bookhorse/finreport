import { useMemo } from 'react';
import styles from '../styles.module.scss';
import { Category, Column, ReportSection } from '@/lib/_api';

interface Props {
  category: Category;
  sections: ReportSection[];
  columns: Column[];
}

const sumReducer = (acc: Array<number | null>, cur: ReportSection) => {
  return acc.map((el, idx) => el
    ? el + (cur.data[idx].value || 0)
    : cur.data[idx].value
  );
};

const round = (el: number | null) => el && Math.round(el * 100) / 100;

const calcTotals = (sections: ReportSection[], size: number) => {
  return sections.reduce(sumReducer, Array(size).fill(null)).map(round);
};

const TotalsRow = ({ category, sections, columns }: Props) => {
  const cells = useMemo(() => {
    return calcTotals(sections, columns.length);
  }, [sections, columns]);

  const renderedCells = cells.map((cell, idx) => (
    <div key={`${category.id}_total_${idx}`} className={styles.cell}>
      {cell}
    </div>
  ));

  return (<div className={styles.totalsRow}>
    {renderedCells}
  </div>);
};

export default TotalsRow;
