import { observer } from 'mobx-react-lite';
import React, { useRef, useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-get-random-values';
import { v4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AddExpenseNavigationProp } from '../../../screens/interfaces';
import { theme } from '../../../theme/theme';
import { Currency } from '../../Currency';
import { store } from '../../store/store';
import { AddButton } from './AddButton';
import { CategoryModal } from './modal/CategoryModal';
import { DateOption } from './DateOption';
import { Header } from './Header';
import { Option } from './Option';

import { Styled } from './styled';
import { DefaultCategories } from '../../Categories';
import { StorageKeys } from '../../StorageKeys';

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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState('');
  const [category, setCategory] = useState(DefaultCategories[0].name);

  useEffect(() => {
    Animated.timing(appearAnim, {
      toValue: 0,
      duration: animationDurationMs,
      useNativeDriver: false,
    }).start();
  }, []);

  const onPressAdd = () => {
    store.addTransaction({
      id: v4(),
      category,
      date,
      isExpense,
      note,
      money: +amount,
    });

    try {
      AsyncStorage.setItem(
        StorageKeys.Transactions,
        JSON.stringify(store.transactions)
      );
    } catch (error) {
      store.setErrorMessage(error);
    }

    navigation.goBack();
  };

  const onToggleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onChangeAmount = (text: string) => {
    if (text.match(/,/g)?.length === 2 || text.match(/,...+/)) {
      return;
    }

    setAmount(text == ',' ? '0,' : text);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Animated.View
        style={{
          top: appearAnim,
          ...Styles.container,
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
          <Styled.CurrencyContainer
            isExpense={isExpense}
            onPress={() => setIsExpense(!isExpense)}
          >
            <Icon
              name={currencyIconName}
              size={40}
              color={theme.colors.white}
            />
          </Styled.CurrencyContainer>
        </Styled.AmountContainer>
        <Styled.OptionsContainer>
          <Option
            iconName="th-large"
            title={category}
            onPress={onToggleModalVisible}
          />
          <Option
            iconName="sticky-note"
            title="Note"
            isInput
            onChange={(text: string) => setNote(text)}
            value={note}
          />
          <DateOption date={date} setDate={setDate} />
        </Styled.OptionsContainer>
        <AddButton onPress={onPressAdd} />
        <CategoryModal
          isModalVisible={isModalVisible}
          onToggleModalVisible={onToggleModalVisible}
          defaultCategory={category}
          onSave={(categoryName: string) => setCategory(categoryName)}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
});

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
