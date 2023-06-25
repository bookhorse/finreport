import styles from '../styles.module.scss';
import classnames from 'classnames';
import { DnDTypes } from '../const';
import { useDrop } from 'react-dnd';
import { CellId, DisplayCellData, DragTransactionData, MoveTransactionOptions } from '@/types';
import { ReportSection } from '@/lib/_api';

interface Props {
  calculated?: boolean;
  selectedCell: CellId | null;
  section: ReportSection;
  cells: DisplayCellData[];
  onClick: (cell: CellId) => void;
  onDrop: (data: MoveTransactionOptions) => void;
}

const DataRow = ({ calculated, cells, section, selectedCell, onClick, onDrop }: Props) => {
  const [{ canDrop, isOver }, dropRef] = useDrop(() => ({
    accept: DnDTypes.TRANSACTION,
    drop: (item: DragTransactionData) => {
      onDrop({...item, to: section});
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const renderedCells = cells.map((cell) => {
    const cls = classnames(styles.cell, {
      [styles.calcRow]: calculated,
      [styles.dropOver]: isOver,
      [styles.dropAllow]: canDrop,
      [styles.selectedCell]: selectedCell?.key === cell.id.key
    });

    return (
      <div key={cell.id.key} className={cls} onClick={() => onClick(cell.id)}>
        {cell.value}
      </div>
    );
  });

  return (<div ref={dropRef} className={styles.row}>
    {renderedCells}
  </div>);
};

export default DataRow;
