import { ReportSection, Transaction } from '@/lib/_api';

export type Sign = -1 | 1;
export type CategoryType = 'data' | 'profit' | 'netincome';

export type CellValue = number | null;

export type CellId = {
  key: string;
  sectionId: string;
  columnId: string;
};

export type DisplayCellData = {
  id: CellId;
  value: CellValue;
};

export type CalculatedSection = Record<string, CellValue[]>;

export type MoveTransactionOptions = {
  transaction: Transaction;
  from: CellId;
  to: ReportSection;
};

export type DragTransactionData = Omit<MoveTransactionOptions, 'to'> & {
  type: string;
};

