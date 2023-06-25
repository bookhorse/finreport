import { Column } from '@/lib/_api';
import styles from '../styles.module.scss';

interface Props {
  columns: Column[];
}

const Header = ({columns}: Props) => {

  const headerCells = columns.map(el =>
    <div key={el.id} className={styles.headerCell}>{el.title}</div>
  );

  return (
    <div className={styles.header}>{headerCells}</div>
  );
};

export default Header;
