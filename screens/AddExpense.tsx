import React from 'react';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { AddTransaction } from '../app/components/add-transaction/AddTransaction';
import { AddExpenseNavigationProp } from './interfaces';
import { Styled } from './styled';

interface Props {
  navigation: AddExpenseNavigationProp;
}

export const AddExpense: React.FC<Props> = ({ navigation }) => {
  return (
    <Styled.Container>
      <AddTransaction navigation={navigation} />
    </Styled.Container>
  );
};
