import { ITransaction } from './interfaces';
import { RootStore } from './rootStore';

const mockData: ITransaction[] = [
  {
    category: 'food',
    date: Date.now(),
    id: '1',
    isExpense: true,
    money: 100,
    note: 'Breakfast in burger king',
  },
  {
    category: 'travel',
    date: Date.now(),
    id: '2',
    isExpense: true,
    money: 100,
    note: '',
  },
  {
    category: 'shopping',
    date: Date.now(),
    id: '3',
    isExpense: false,
    money: 1200,
    note: '',
  },
  {
    category: 'pets',
    date: Date.now(),
    id: '4',
    isExpense: true,
    money: 100,
    note: 'Breakfast in burger king',
  },
  {
    category: 'pets',
    date: Date.now(),
    id: '5',
    isExpense: true,
    money: 100,
    note: 'Breakfast in burger king',
  },
  {
    category: 'shopping',
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
