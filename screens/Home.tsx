import React from 'react';

import { HomeHeader } from '../app/components/home-header/HomeHeader';
import { CreditCard } from '../app/components/credit-card/CreditCard';
import { Styled } from './styled';

export const Home = () => {
  return (
    <Styled.Container>
      <HomeHeader />
      <CreditCard />
    </Styled.Container>
  );
};
