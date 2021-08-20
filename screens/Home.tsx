import React from 'react';

import { HomeHeader } from '../app/components/home-header/HomeHeader';
import { CreditCard } from '../app/components/credit-card/CreditCard';
import { Transactions } from '../app/components/transactions/Transactions';
import { Styled } from './styled';

export const Home = () => {
  return (
    <Styled.Container>
      <HomeHeader />
      <CreditCard />
      <Transactions />
    </Styled.Container>
  );
};
