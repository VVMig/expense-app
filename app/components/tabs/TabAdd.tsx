import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { AddExpense } from '../../../screens';
import { theme } from '../../../theme/theme';
import { Styled } from './styled';

export const TabAdd: React.FC = ({ children }) => {
  const [isShowModal, setIsShowModal] = useState(false);

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
        <Styled.AddButton onPress={() => setIsShowModal(true)}>
          {children}
        </Styled.AddButton>
      </LinearGradient>
      <AddExpense
        onModalClose={() => setIsShowModal(false)}
        isShowModal={isShowModal}
      />
    </Styled.AddButtonContainer>
  );
};
