import { CellData, Column } from '@/lib/_api';
import { DisplayCellData } from '@/types';

export const makeCellKey = (section: string, column: string) => {
  return `${section}_${column}`;
};

export const makeDisplayCells = (data: CellData[], columns: Column[], sectionId: string) : DisplayCellData[] => {
  return data.map((cell, idx) => {
    const col = columns[idx];
    return {
      id: {
        key: makeCellKey(sectionId, col.id),
        sectionId: sectionId,
        columnId: col.id
      },
      value: cell.value
    };
  });
};

