import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../../../theme/theme';

import { Styled } from './styled';

interface Props {
  iconName: string;
  isFocused: boolean;
}

export const TabIcon: React.FC<Props> = ({ iconName, isFocused }) => {
  return (
    <Styled.Tab>
      <Icon
        name={iconName}
        size={30}
        color={isFocused ? theme.colors.purple : theme.colors.lightGray}
      />
    </Styled.Tab>
  );
};
