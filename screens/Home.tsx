import React from 'react';

import { HomeHeader } from '../app/components/home-header/HomeHeader';
import { Styled } from './styled';

export const Home = () => {
  return (
    <Styled.Container>
      <HomeHeader />
    </Styled.Container>
  );
};
