import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import { theme } from '../../../theme/theme';
import { Stats } from './Stats';

import { Styled } from './styled';

export const Total = () => {
  return (
    <Styled.Total>
      <Stats money={2500000} isIncome />
      <Stats money={800} />
    </Styled.Total>
  );
};
