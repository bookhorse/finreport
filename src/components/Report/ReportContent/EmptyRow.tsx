import { Column } from '@/lib/_api';
import styles from '../styles.module.scss';

interface Props {
  columns: Column[];
}

const EmptyRow = ({ columns, ...restProps }: Props  & React.HTMLAttributes<HTMLDivElement>) => {
  const renderedCells = columns.map(({id}) => (
    <div key={id} className={styles.cell}></div>
  ));

  return (<div className={styles.row} {...restProps}>
    {renderedCells}
  </div>);
};

export default EmptyRow;
