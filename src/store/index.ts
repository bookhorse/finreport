import { CalculatedSection, CellId, MoveTransactionOptions } from '@/types';
import { create } from 'zustand';
import { calcSections, moveTransaction } from './utils';
import Api from '@/lib/api';
import { FinancialReport } from '@/lib/_api';

export interface Store {
  report: FinancialReport | null,
  selectedCell: CellId | null;
  calculatedSections: CalculatedSection;
  expandedCategories: string[];

  setSelectedCell: (cellId: CellId | null) => void;
  setReport: (report: FinancialReport) => void;
  toggleCategory: (id: string) => void;
  moveTransaction: (options: MoveTransactionOptions) => void;
  recalculateSections: () => void;
  fetchReport: () => void;
};

const initialState = {
  report: null,
  selectedCell: null,
  calculatedSections: {},
  expandedCategories: []
};

const useStore = create<Store>()((set, get) => ({
  ...initialState,
  setReport: (report) => {
    const { recalculateSections } = get();

    set({ report });

    recalculateSections();
  },
  fetchReport: async () => {
    const { setReport } = get();
    const response = await Api.report.getCurrentReport();
    if (response.ok) {
      const report = response.data;
      setReport(report);
      set({ expandedCategories: report.categories.map(el => el.id) }); //expand all
    }
  },
  recalculateSections: () => {
    const { report } = get();

    if (report) {
      const calculatedSections = calcSections(report);
      set({ calculatedSections });
    }
  },
  setSelectedCell: (cellId) => {
    set({ selectedCell: cellId });
  },
  moveTransaction: async (options) => {
    const { report, recalculateSections } = get();
    if (!report) return;

    const data = {
      transactionId: options.transaction.id,
      fromSection: options.from.sectionId,
      toSection: options.to.id
    };

    const response = await Api.report.moveTransaction(data);
    if (response.ok) {
      const updatedReport = moveTransaction(report, options);
      if (updatedReport) {
        set({ report: updatedReport });
        recalculateSections();
      }
    }
  },
  toggleCategory: (id) => {
    const { expandedCategories } = get();

    if (expandedCategories.includes(id)) {
      set({ expandedCategories: expandedCategories.filter(el => el !== id) });
    } else {
      set({ expandedCategories: [...expandedCategories, id]});
    }
  }
}));

export default useStore;
