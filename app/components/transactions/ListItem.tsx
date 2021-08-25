import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import { theme } from '../../../theme/theme';

import { Styled } from './styled';
import { observer } from 'mobx-react-lite';
import { store } from '../../store/store';

interface Props {
  title: string;
  money: number;
  date: number;
  isExpense: boolean;
}

export const ListItem: React.FC<Props> = observer(
  ({ title, money, date, isExpense }) => {
    const formatedMoney = new Intl.NumberFormat(store.user?.locale, {
      style: 'currency',
      currency: store.user?.currency,
    }).format(money);

    const formatedDate = moment(date).fromNow();

    return (
      <Styled.ItemListContainer>
        <Styled.ListItem>
          <Styled.TitleContainer>
            <LinearGradient
              colors={['yellow', 'orange']}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon name="fast-food" size={30} color={theme.colors.white} />
            </LinearGradient>
            <Styled.ItemTitle>{title}</Styled.ItemTitle>
          </Styled.TitleContainer>
          <Styled.TransactionInfo>
            <Styled.MoneyData>
              {isExpense ? '-' : '+'}
              {formatedMoney}
            </Styled.MoneyData>
            <Styled.TransactionDate>{formatedDate}</Styled.TransactionDate>
          </Styled.TransactionInfo>
        </Styled.ListItem>
      </Styled.ItemListContainer>
    );
  }
);
