import { CellData, FinancialReport, ReportSection, Transaction } from '@/lib/_api';
import { CalculatedSection, CellValue, MoveTransactionOptions } from '@/types';
import { round } from '@/utils';

export const moveTransaction = (
  report: FinancialReport, options: MoveTransactionOptions
) => {
  const { transaction, from, to } = options;
  const fromSection = report.sections.findIndex(el => el.id === from.sectionId);
  const toSection = report.sections.findIndex(el => el.id === to.id);
  const column = report.columns.findIndex(el => el.id === from.columnId);
  if (fromSection === -1 || toSection === -1 || column === -1) {
    console.log(`Unable to move transaction ${transaction.id}`);
    return null;
  }

  const calcTotal = (data: Transaction[]) => {
    return round(data.reduce(
      (acc, cur) => acc + cur.value, 0
    ));
  };

  const pushTransaction = (cells: CellData[]) => cells.map(
    (el, idx) => {
      if (idx === column) {
        const transactions = [...el.transactions, transaction];
        return {...el, transactions, value: calcTotal(transactions) || null };
      } else {
        return el;
      }
    }
  );

  const removeTransaction = (cells: CellData[]) => cells.map(
    (el, idx) => {
      if (idx === column) {
        const transactions = el.transactions.filter(item => item.id !== transaction.id);
        return {...el, transactions, value: calcTotal(transactions) || null };
      } else {
        return el;
      }
    }
  );

  const updated = {
    ...report,
    sections: report.sections.map(el => {
      if (el.id === from.sectionId) {
        return {...el, data: removeTransaction(el.data)};
      } else if (el.id === to.id) {
        return {...el, data: pushTransaction(el.data)};
      } else {
        return el;
      }
    })
  };

  return updated;
};


type ProcessOp = (a: CellValue, b: CellValue) => CellValue;
const minusOp: ProcessOp = (a, b) => round((a ?? 0) - (b ?? 0));

const processCells = (a: CellValue[], b: CellValue[], op: ProcessOp): CellValue[] => {
  return a.map((aval, idx) => {
    const bval = b[idx];
    return op(aval, bval);
  });
};

export const calcSections = (report: FinancialReport): CalculatedSection => {
  const { categories, sections } = report;
  const ret = {} as CalculatedSection;

  const pickSection = (categoryId: string) => sections.find(el => el.category === categoryId);
  const sectionToValues = (section?: ReportSection) => {
    if (!section) return null;
    return section.data.map(el => el.value);
  };

  categories.forEach(category => {
    switch (category.type) {
      case 'profit': {
        const incomeSection = sectionToValues(pickSection('income'));
        const cogsSection = sectionToValues(pickSection('cogs'));
        if (incomeSection && cogsSection) {
          ret.profit = processCells(incomeSection, cogsSection, minusOp);
        }
        break;
      }
      case 'netincome': {
        const profitValues = ret.profit;
        const expensesSection = sectionToValues(pickSection('expenses'));
        if (profitValues && expensesSection) {
          ret.netincome = processCells(profitValues, expensesSection, minusOp);
        }
        break;
      }
    }
  });

  return ret;
};
