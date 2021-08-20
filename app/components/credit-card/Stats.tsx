import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import { theme } from '../../../theme/theme';
import { Styled } from './styled';

interface Props {
  isIncome?: boolean;
  money: number;
}

export const Stats: React.FC<Props> = ({ money, isIncome }) => {
  const formatedMoney = new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 2,
  }).format(money);

  return (
    <Styled.StatsContainer>
      <Styled.Arrow>
        <Icon
          name={isIncome ? 'arrowdown' : 'arrowup'}
          color={isIncome ? theme.colors.green : theme.colors.lightRed}
          size={20}
        />
      </Styled.Arrow>
      <Styled.StatsTextContainer>
        <Styled.StatsTitle>
          {isIncome ? 'Income' : 'Expenses'}
        </Styled.StatsTitle>
        <Styled.StatsMoney>{formatedMoney}</Styled.StatsMoney>
      </Styled.StatsTextContainer>
    </Styled.StatsContainer>
  );
};
