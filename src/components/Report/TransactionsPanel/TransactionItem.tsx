import { CellId, DragTransactionData } from '@/types';
import { useDrag } from 'react-dnd';
import styles from './styles.module.scss';
import { DnDTypes } from '../const';
import classnames from 'classnames';
import { Transaction } from '@/lib/_api';

interface Props {
  transaction: Transaction;
  cell: CellId;
  sign: number;
}

const TransactionItem = ({transaction, cell, sign}: Props) => {
  const {date, name, value} = transaction;
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: DnDTypes.TRANSACTION,
      item: {
        type: DnDTypes.TRANSACTION,
        transaction,
        from: cell,
      } as DragTransactionData,
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }),
    []
  );

  const cls = classnames(styles.transactionItem, {
    [styles.drag]: isDragging
  });

  return (
    <div ref={dragRef} className={cls}>
      <div className={styles.transactionDate}>{date}</div>
      <div className={styles.spaceBetween}>
        <div>{name}</div>
        <div>{value * sign}</div>
      </div>
    </div>
  );
};


export default TransactionItem;
