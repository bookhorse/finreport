import classnames from 'classnames';
import useStore from '@/store';
import styles from '../styles.module.scss';
import { Category } from '@/lib/_api';

interface Props {
  category: Category;
}

const CalcRow = ({ category, ...restProps }: Props & React.HTMLAttributes<HTMLDivElement>) => {
  const cls = classnames(styles.cell, styles.calcCell);
  const calculatedSections = useStore(store => store.calculatedSections);
  const cells = calculatedSections[category.id];
  if (!cells) {
    return (
      <div className={styles.row}>
        <div className={cls}>{`calculated section ${category.name} is missing`}</div>
      </div>
    );
  }

  const renderedCells = cells.map((val, idx) => (
    <div key={`${category.id}_calc_${idx}`} className={cls}>{val}</div>
  ));

  return (<div className={styles.calcRow} {...restProps}>
    {renderedCells}
  </div>);
};

export default CalcRow;
