import useStore from '@/store';
import { useMemo } from 'react';
import { shallow } from 'zustand/shallow';

const useSelectionData = () => {
  const [report, selectedCell, setSelectedCell] = useStore(store => [store.report, store.selectedCell, store.setSelectedCell], shallow);

  const selection = useMemo(() => {
    if (!report || !selectedCell) return null;
    const columnIdx = report.columns.findIndex(el => el.id === selectedCell.columnId);
    const column = report.columns[columnIdx];
    const section = report.sections.find(el => el.id === selectedCell.sectionId);

    if (!section || !column) return null;
    const transactions = section.data[columnIdx].transactions;

    return {
      column,
      section,
      transactions
    };
  }, [report, selectedCell]);

  return { selection, selectedCell, setSelectedCell };
};

export default useSelectionData;
