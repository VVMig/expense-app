import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { theme } from '../../../theme/theme';
import { Styled } from './styled';

interface Props {
  onPress:
    | ((
        e:
          | React.MouseEvent<HTMLAnchorElement, MouseEvent>
          | GestureResponderEvent
      ) => void)
    | undefined;
}

export const TabAdd: React.FC<Props> = ({ children, onPress }) => {
  return (
    <Styled.AddButtonContainer>
      <LinearGradient
        colors={[theme.colors.lightRed, theme.colors.purple, theme.colors.blue]}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 70,
          height: 70,
          borderRadius: 35,
          bottom: 30,
        }}
      >
        <Styled.AddButton onPress={onPress}>{children}</Styled.AddButton>
      </LinearGradient>
    </Styled.AddButtonContainer>
  );
};
