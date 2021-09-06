import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';

import { theme } from '../../../theme/theme';
import { getCategory } from '../../Categories';
import { Styled } from './styled';
import { observer } from 'mobx-react-lite';
import { store } from '../../store/store';
import { useRef } from 'react';
import { Animated } from 'react-native';

interface Props {
  title: string;
  money: number;
  date: Date | number;
  isExpense: boolean;
  isContextModalShow: boolean;
  onToggleModal: () => void;
}

const modalTimeForShowMs = 500;

export const ListItem: React.FC<Props> = observer(
  ({ title, money, date, isExpense, isContextModalShow, onToggleModal }) => {
    const formatedMoney = new Intl.NumberFormat(store.user?.locale, {
      style: 'currency',
      currency: store.user?.currency,
    }).format(money);
    const transformAnim = useRef(new Animated.Value(1)).current;

    const formatedDate = moment(date).fromNow();

    const category = getCategory(title);

    const onLongPressEnd = () => {
      Animated.timing(transformAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }).start();
    };

    const onLongPressStart = () => {
      Animated.timing(transformAnim, {
        toValue: 0.9,
        duration: modalTimeForShowMs,
        useNativeDriver: false,
      }).start(({ finished }) => {
        if (finished) {
          onToggleModal();
          onLongPressEnd();
        }
      });
    };

    return (
      <Animated.View
        onTouchStart={onLongPressStart}
        onTouchEnd={onLongPressEnd}
        style={{
          paddingBottom: 10,
          transform: [{ scale: transformAnim }],
        }}
      >
        <Styled.ListItem>
          <Styled.TitleContainer>
            <LinearGradient
              start={[1, 0]}
              end={[0, 1]}
              colors={[
                category?.additionalColor || theme.colors.white,
                category?.color || theme.colors.yellow,
              ]}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {category?.icon({ size: 30, color: theme.colors.white })}
            </LinearGradient>
            <Styled.ItemTitle>{title}</Styled.ItemTitle>
          </Styled.TitleContainer>
          <Styled.TransactionInfo>
            <Styled.MoneyData>
              {isExpense ? '-' : '+'}
              {formatedMoney}
            </Styled.MoneyData>
            <Styled.TransactionDate>{formatedDate}</Styled.TransactionDate>
          </Styled.TransactionInfo>
        </Styled.ListItem>
      </Animated.View>
    );
  }
);
