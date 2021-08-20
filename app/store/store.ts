import { ITransaction } from './interfaces';
import { RootStore } from './rootStore';

const mockData: ITransaction[] = [
  {
    category: 'Food',
    date: Date.now(),
    id: '1',
    isExpense: true,
    money: 100,
    note: 'Breakfast in burger king',
  },
  {
    category: 'Food',
    date: Date.now(),
    id: '2',
    isExpense: true,
    money: 100,
    note: 'Breakfast in burger king',
  },
  {
    category: 'Food',
    date: Date.now(),
    id: '3',
    isExpense: false,
    money: 100,
    note: 'Breakfast in burger king',
  },
  {
    category: 'Food',
    date: Date.now(),
    id: '4',
    isExpense: true,
    money: 100,
    note: 'Breakfast in burger king',
  },
  {
    category: 'Food',
    date: Date.now(),
    id: '5',
    isExpense: true,
    money: 100,
    note: 'Breakfast in burger king',
  },
  {
    category: 'Food',
    date: Date.now(),
    id: '6',
    isExpense: true,
    money: 100,
    note: 'Breakfast in burger king',
  },
];

export const store = RootStore.create({
  user: {
    firstName: 'Vova',
    lastName: 'Migay',
  },
  transactions: mockData,
});
