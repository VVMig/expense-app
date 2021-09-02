import { ITransaction } from './interfaces';
import { RootStore } from './rootStore';

export const store = RootStore.create({
  user: {
    firstName: 'Vova',
    lastName: 'Migay',
  },
});
