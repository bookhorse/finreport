import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useEffect } from 'react';
import ReportContent from './ReportContent';
import SideBar from './Sidebar';
import Toolbar from './Toolbar';
import styles from './styles.module.scss';
import useStore from '@/store';
import { shallow } from 'zustand/shallow';
import TransactionsPanel from './TransactionsPanel';

const Report = () => {
  const [report, fetchReport] = useStore(store => [store.report, store.fetchReport], shallow);

  useEffect(() => {
    fetchReport();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!report) return <div>Loading...</div>;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.wrapper}>
        <Toolbar />
        <div className={styles.container}>
          <SideBar/>
          <ReportContent report={report} />
          <TransactionsPanel />
        </div>
      </div>
    </DndProvider>
  );
};

export default Report;
