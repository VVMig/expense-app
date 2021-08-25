import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { theme } from '../../../theme/theme';
import { Styled } from './styled';

interface Props {
  iconName: string;
  title: string;
  onPress?: () => void;
}

export const Option: React.FC<Props> = ({ iconName, title, onPress }) => {
  return (
    <Styled.Option onPress={onPress}>
      <Styled.OptionSelect>
        <Icon name={iconName} size={30} color={theme.colors.lightGray} />
        <Styled.OptionTitle>{title}</Styled.OptionTitle>
      </Styled.OptionSelect>
    </Styled.Option>
  );
};
