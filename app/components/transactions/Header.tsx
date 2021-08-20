import React from 'react';
import { Styled } from './styled';

export const Header = () => {
  return (
    <Styled.Header>
      <Styled.HeaderTitle>Transactions</Styled.HeaderTitle>
      <Styled.ViewAllButton>
        <Styled.ViewAllText>View All</Styled.ViewAllText>
      </Styled.ViewAllButton>
    </Styled.Header>
  );
};
