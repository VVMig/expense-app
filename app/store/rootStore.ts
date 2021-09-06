import { cast, types } from 'mobx-state-tree';
import { ITransaction } from './interfaces';
import { Transaction } from './Transaction';
import { User } from './User';

export const RootStore = types
  .model({
    user: types.maybe(User),
    transactions: types.optional(types.array(Transaction), []),
    errorMessage: types.maybe(types.string),
  })
  .views((self) => ({
    get transactionsShortList() {
      return self.transactions.slice(-4).reverse();
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
  }))
  .actions((self) => ({
    addTransaction(transaction: ITransaction) {
      self.transactions.push(transaction);
    },
    setTransactions(transactions: ITransaction[]) {
      self.transactions = cast(transactions);
    },
    setErrorMessage(message: string) {
      self.errorMessage = message;
    },
  }));
