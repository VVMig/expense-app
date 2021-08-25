import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { theme } from '../../../theme/theme';
import { Styled } from './styled';

interface Props {
  onPress?: () => void;
}

export const AddButton: React.FC<Props> = ({ onPress }) => {
  return (
    <Styled.AddButtonContainer>
      <Styled.AddButton onPress={onPress}>
        <LinearGradient
          start={[0, 0]}
          end={[1, 1]}
          style={{
            width: '100%',
            height: 60,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          colors={[theme.colors.blue, theme.colors.purple, theme.colors.yellow]}
        >
          <Styled.AddButtonText>Add</Styled.AddButtonText>
        </LinearGradient>
      </Styled.AddButton>
    </Styled.AddButtonContainer>
  );
};
