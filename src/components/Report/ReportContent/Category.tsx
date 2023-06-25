import { shallow } from 'zustand/shallow';
import { MoveTransactionOptions } from '@/types';
import { Category, Column, ReportSection } from '@/lib/_api';
import { makeDisplayCells } from '../utils';
import styles from '../styles.module.scss';
import useStore from '@/store';
import DataRow from './DataRow';
import EmptyRow from './EmptyRow';
import TotalsRow from './TotalsRow';
import CalcRow from './CalcRow';

interface Props {
  category: Category;
  sections: ReportSection[];
  expanded?: boolean;
  columns: Column[];
}

const Category = ({ category, sections, columns, expanded }: Props) => {
  const [selectedCell, setSelectedCell] = useStore(store => [store.selectedCell, store.setSelectedCell], shallow);
  const moveTransaction = useStore(store => store.moveTransaction);

  const handleCategoryDrop = (data: MoveTransactionOptions) => {
    moveTransaction(data);
  };

  const dataRows = sections.map(section => <DataRow
    key={section.id}
    selectedCell={selectedCell}
    section={section}
    onClick={setSelectedCell}
    onDrop={handleCategoryDrop}
    cells={makeDisplayCells(section.data, columns, section.id)}
  />);

  const categoryRow = category.type === 'data'
    ? expanded
      ? <EmptyRow columns={columns} />
      : <TotalsRow columns={columns} sections={sections} category={category}/>
    : <CalcRow category={category} />;

  return (<div className={styles.category}>
    { categoryRow }
    {expanded && dataRows}
  </div>);
};

export default Category;
