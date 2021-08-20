import { observer } from 'mobx-react-lite';
import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import { theme } from '../../../theme/theme';
import { store } from '../../store/store';
import { Stats } from './Stats';

import { Styled } from './styled';

export const Total = observer(() => {
  return (
    <Styled.Total>
      <Stats money={store.allIncome} isIncome />
      <Stats money={store.allExpenses} />
    </Styled.Total>
  );
});
