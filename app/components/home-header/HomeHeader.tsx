import React from 'react';
import { Text } from 'react-native';
import { Profile } from './Profile';
import { Settings } from './Settings';
import { Styled } from './styled';

export const HomeHeader = () => {
  return (
    <Styled.HomeHeader>
      <Profile />
      <Settings />
    </Styled.HomeHeader>
  );
};
