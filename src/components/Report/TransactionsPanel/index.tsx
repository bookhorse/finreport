import TransactionItem from './TransactionItem';
import styles from './styles.module.scss';
import CloseIcon from '@/icons/close.svg';
import useSelectionData from '../hooks/useSelectionData';

const TransactionsPanel = () => {
  const {selection, selectedCell, setSelectedCell} = useSelectionData();

  const handleClose = () => {
    setSelectedCell(null);
  };

  if (!selectedCell || !selection) return null;

  const {column, section, transactions} = selection;

  const renderedTransactions = transactions.map((el) => (
    <TransactionItem
      key={el.id}
      transaction={el}
      cell={selectedCell}
    />
  ));

  return (<div className={styles.panel}>
    <header className={styles.header}>
      <div className={styles.title}>
        {section.name}
      </div>
      <div className={styles.closeBtn}>
        <CloseIcon onClick={handleClose} />
      </div>
    </header>
    <div className={styles.date}>{column.title}</div>
    <div className={styles.transactions}>
      {renderedTransactions}
    </div>
  </div>);
};

export default TransactionsPanel;
