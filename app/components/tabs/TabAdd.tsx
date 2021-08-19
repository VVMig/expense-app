import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { theme } from '../../../theme/theme';

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
    <LinearGradient
      colors={[theme.colors.blue, theme.colors.purple, theme.colors.lightRed]}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderRadius: 50,
        bottom: 30,
      }}
      start={{
        x: 1,
        y: 0.5,
      }}
    >
      <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
    </LinearGradient>
  );
};
