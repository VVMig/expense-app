import { types } from 'mobx-state-tree';
import { Transaction } from './Transaction';
import { User } from './User';

export const RootStore = types
  .model({
    user: types.maybe(User),
    transactions: types.optional(types.array(Transaction), []),
  })
  .views((self) => ({
    get transactionsShortList() {
      return self.transactions.slice(0, 4);
    },
    get allExpenses() {
      return self.transactions.reduce(
        (total, transaction) =>
          transaction.isExpense ? total + transaction.money : total,
        0
      );
    },
    get allIncome() {
      return self.transactions.reduce(
        (total, transaction) =>
          transaction.isExpense ? total : total + transaction.money,
        0
      );
    },
    get balance() {
      return self.transactions.reduce(
        (total, transaction) =>
          transaction.isExpense
            ? total - transaction.money
            : total + transaction.money,
        0
      );
    },
  }));
