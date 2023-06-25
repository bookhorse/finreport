import styles from '../styles.module.scss';
import Header from './Header';
import Category from './Category';
import useStore from '@/store';
import { FinancialReport } from '@/lib/_api';
import useCategories from '../hooks/useCategories';

interface Props {
  report: FinancialReport;
}

const ReportContent = ({report}: Props) => {
  const expandedCategories = useStore(store => store.expandedCategories);
  const categories = useCategories();

  const renderedRows = categories.map(({category, sections}) => <Category
    key={category.id}
    columns={report.columns}
    category={category}
    expanded={expandedCategories.includes(category.id)}
    sections={sections}
  />);

  return (
    <div className={styles.report}>
      <Header columns={report.columns} />
      { renderedRows }
    </div>
  );
};

export default ReportContent;
