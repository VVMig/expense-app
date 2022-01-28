import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { observer } from 'mobx-react-lite';

import { Styled } from './styled';
import { theme } from '../../../theme/theme';

import texture from '../../../assets/card-texture.png';
import { Total } from './Total';
import { store } from '../../store/store';

const lastModeIndex = 2;

const titleSwitch = (displayModeIndex: number) => {
  switch (displayModeIndex) {
    case 0:
      return 'Total expenses';
    case 1:
      return 'Total income';
    case 2:
      return 'Balance';
  }
};

export const CreditCard = observer(() => {
  const [displayModeIndex, setDisplayModeIndex] = useState(0);

  const onPressSwitchMode = () => {
    setDisplayModeIndex((prev) => (prev === lastModeIndex ? 0 : prev + 1));
  };

  const moneySwitch = () => {
    let money: number = 0;

    switch (displayModeIndex) {
      case 0:
        money = store.allExpenses;
        break;
      case 1:
        money = store.allIncome;
        break;
      case 2:
        money = store.balance;
        break;
    }

    return new Intl.NumberFormat(store.user?.locale, {
      style: 'currency',
      currency: store.user?.currency,
    }).format(money);
  };

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
        <Styled.SwitchButton onPress={onPressSwitchMode}>
          <Styled.CardTitle>{titleSwitch(displayModeIndex)}</Styled.CardTitle>
          <Styled.Balance>{moneySwitch()}</Styled.Balance>
        </Styled.SwitchButton>

        <Total />
      </LinearGradient>
    </Styled.Container>
  );
});
