import { observer } from 'mobx-react-lite';
import React, { useRef, useEffect, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AddExpenseNavigationProp } from '../../../screens/interfaces';
import { theme } from '../../../theme/theme';
import { Currency } from '../../Currency';
import { store } from '../../store/store';
import { AddButton } from './AddButton';
import { Header } from './Header';
import { Option } from './Option';

import { Styled } from './styled';

const { height } = Dimensions.get('window');

const animationDurationMs = 250;

interface Props {
  navigation: AddExpenseNavigationProp;
}

const currencyNameSwitch = (userCurrency?: Currency) => {
  switch (userCurrency) {
    case Currency.EUR:
      return 'euro';
    case Currency.USD:
      return 'dollar';
  }

  return 'dollar';
};

export const AddTransaction: React.FC<Props> = observer(({ navigation }) => {
  const appearAnim = useRef(new Animated.Value(height)).current;
  const currencyIconName = currencyNameSwitch(store.user?.currency);

  const [amount, setAmount] = useState('');

  useEffect(() => {
    Animated.timing(appearAnim, {
      toValue: 0,
      duration: animationDurationMs,
      useNativeDriver: false,
    }).start();
  }, []);

  const onChangeAmount = (text: string) => {
    if (text.match(/,/g)?.length === 2 || text.match(/,...+/)) {
      return;
    }

    setAmount(text == ',' ? '0,' : text);
  };

  return (
    <Animated.View
      style={{
        top: appearAnim,
        ...Styles.container,
      }}
      onTouchStart={() => {
        Keyboard.dismiss();
      }}
    >
      <Header navigation={navigation} />
      <Styled.AmountContainer>
        <Styled.AmountInput
          keyboardType="numeric"
          value={amount}
          onChangeText={onChangeAmount}
          placeholder="0"
          placeholderTextColor={theme.colors.purple}
        />
        <Styled.CurrencyContainer>
          <Icon name={currencyIconName} size={40} color={theme.colors.purple} />
        </Styled.CurrencyContainer>
      </Styled.AmountContainer>
      <Styled.OptionsContainer>
        <Option iconName="th-large" title="Category" />
        <Option iconName="sticky-note" title="Note" />
        <Option iconName="calendar-o" title="Today" />
      </Styled.OptionsContainer>
      <AddButton />
    </Animated.View>
  );
});

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
