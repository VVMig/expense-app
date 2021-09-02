import { types } from 'mobx-state-tree';

export const Transaction = types.model('Transaction', {
  id: types.string,
  category: types.string,
  money: types.number,
  isExpense: types.boolean,
  date: types.Date,
  note: types.string,
});
