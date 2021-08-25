import { types } from 'mobx-state-tree';
import { Currency } from '../Currency';

export const User = types
  .model('User', {
    firstName: types.optional(types.string, ''),
    lastName: types.optional(types.string, ''),
    currency: types.optional(
      types.enumeration(Object.values(Currency)),
      Currency.USD
    ),
  })
  .views((self) => ({
    get locale() {
      return self.currency === Currency.USD ? 'en-US' : 'de-DE';
    },
  }));
