import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { AddExpenseNavigationProp } from '../../../screens/interfaces';
import { theme } from '../../../theme/theme';
import { Styled } from './styled';

interface Props {
  navigation: AddExpenseNavigationProp;
}

export const Header: React.FC<Props> = ({ navigation }) => {
  return (
    <Styled.Header>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="close" size={30} color={theme.colors.lightGray} />
      </TouchableOpacity>
      <Styled.TitleContainer>
        <Styled.Title>Add Transaction</Styled.Title>
      </Styled.TitleContainer>
    </Styled.Header>
  );
};
