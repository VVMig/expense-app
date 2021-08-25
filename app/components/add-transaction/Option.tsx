import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { theme } from '../../../theme/theme';
import { Styled } from './styled';

interface Props {
  iconName: string;
  title: string;
  isInput?: boolean;
  onPress?: () => void;
  onChange?: (text: string) => void;
  value?: string;
}

export const Option: React.FC<Props> = ({
  iconName,
  title,
  onPress,
  isInput,
  onChange,
  value,
}) => {
  return (
    <Styled.Option onPress={onPress}>
      <Styled.OptionSelect>
        <Icon name={iconName} size={30} color={theme.colors.lightGray} />
        {isInput ? (
          <Styled.OptionInput
            placeholder={title}
            placeholderTextColor={theme.colors.lightGray}
            onChangeText={onChange}
            value={value}
          />
        ) : (
          <Styled.OptionTitle>{title}</Styled.OptionTitle>
        )}
      </Styled.OptionSelect>
    </Styled.Option>
  );
};
