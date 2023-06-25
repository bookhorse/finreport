import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { round } from '@/utils';
import { Category, CellData, Column, FinancialReport, Transaction } from './_api';

const dateFormat = 'MMM YYYY';

type Sign = Category['sign'];

export const produceMockReport = ({ columnsToMake = 6, sectionsToMake = 3 }) => {

  const makeData = (name: string, columns: Column[], sign: Sign) => {
    const ret = [] as CellData[];
    for (let i = 0; i < columnsToMake; i++) {
      const transactionCount = faker.number.int(3);
      const transactions = [] as Transaction[];
      let total = 0;

      for (let i = 0; i < transactionCount; ++i) {
        const val = faker.number.float({ min: 1, max: 500, precision: 0.1 }) * sign;
        const date = dayjs(columns[i].date)
          .add(faker.number.int(28), 'day')
          .format(dateFormat);

        transactions.push({
          id: faker.string.uuid(),
          name: `${name} transaction ${i}`,
          value: val,
          date
        });

        total += val;
      }

      ret.push({
        transactions: transactions,
        value: total ? round(total) : null
      });
    }

    return ret;
  };

  const makeColumns = () => {
    const ret = [];
    let curDate = dayjs().startOf('month');
    for (let i = 0; i < columnsToMake; i++) {
      ret.push({
        id: faker.string.uuid(),
        title: curDate.format(dateFormat),
        date: curDate.toISOString()
      });
      curDate = curDate.subtract(1, 'month');
    }
    return ret;
  };

  const generateSections = (report: FinancialReport, categoryName: string, nameGen: () => string) => {
    const category = report.categories.find(el => el.id === categoryName);
    if (!category) throw new Error(`Missing "${categoryName}" category`);

    const sections = Array(sectionsToMake).fill(0).map((_, idx) => {
      const name = nameGen();
      return {
        id: `${categoryName}_${idx}`,
        name,
        category: categoryName,
        data: makeData(name, report.columns, category.sign)
      };
    });

    report.sections = [...report.sections, ...sections];
  };

  const report: FinancialReport = {
    categories: [
      { id: 'banks', name: 'Banks', position: 0, sign: 1, type: 'data' },
      { id: 'income', name: 'Income', position: 1, sign: 1, type: 'data' },
      { id: 'cogs', name: 'Cost of Goods Sold', position: 2, sign: 1, type: 'data' },
      { id: 'profit', name: 'Gross profit', position: 3, sign: 1, type: 'profit' },
      { id: 'expenses', name: 'Expenses', position: 4, sign: -1, type: 'data' },
      { id: 'netincome', name: 'Net income', position: 5, sign: 1, type: 'netincome' },
    ],
    columns: makeColumns(),
    sections: []
  };

  const incomeGenerator = () => {
    const data = ['Sales', 'Dividents', 'Interest'];
    let counter = 0;
    const len = data.length;

    return () => {
      const ret = `${data[counter % len]} ${Math.floor(counter / len) + 1}`;
      counter++;
      return ret;
    };
  };

  generateSections(report, 'banks', () => faker.company.name() + ' bank');
  generateSections(report, 'expenses', faker.commerce.product);
  generateSections(report, 'cogs', faker.commerce.product);
  generateSections(report, 'income', incomeGenerator());

  return report;
};
