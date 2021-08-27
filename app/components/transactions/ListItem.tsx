import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';

import { theme } from '../../../theme/theme';
import { getCategory } from '../../Categories';
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

    const category = getCategory(title);

    return (
      <Styled.ItemListContainer>
        <Styled.ListItem>
          <Styled.TitleContainer>
            <LinearGradient
              start={[1, 0]}
              end={[0, 1]}
              colors={[
                category?.additionalColor || theme.colors.white,
                category?.color || theme.colors.yellow,
              ]}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {category?.icon({ size: 30, color: theme.colors.white })}
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
