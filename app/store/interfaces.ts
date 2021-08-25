import { SnapshotIn } from 'mobx-state-tree';
import { Transaction } from './Transaction';
import { User } from './User';

export type ITransaction = SnapshotIn<typeof Transaction>;
export type IUser = SnapshotIn<typeof User>;
