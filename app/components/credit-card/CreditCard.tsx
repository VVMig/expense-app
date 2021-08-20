import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Styled } from './styled';
import { theme } from '../../../theme/theme';

import texture from '../../../assets/card-texture.png';
import { Total } from './Total';

export const CreditCard = () => {
  return (
    <Styled.Container>
      <LinearGradient
        colors={[theme.colors.blue, theme.colors.purple, theme.colors.lightRed]}
        start={[0, 0]}
        end={[1, 1]}
        style={{
          width: '100%',
          height: 220,
          borderRadius: 30,
          alignItems: 'center',
        }}
      >
        <Styled.CardTexture source={texture} resizeMode="cover" />
        <Styled.CardTitle>Total Balance</Styled.CardTitle>
        <Styled.Balance>$ 4800</Styled.Balance>
        <Total />
      </LinearGradient>
    </Styled.Container>
  );
};
