import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Styled } from './styled';

export const Profile = () => {
  return (
    <Styled.Profile>
      <TouchableOpacity>
        <Styled.ProfileCircle />
      </TouchableOpacity>
      <Styled.ProfileTextContainer>
        <Styled.WelcomeText>Welcome!</Styled.WelcomeText>
        <Styled.NameText>Domenik Torreto</Styled.NameText>
      </Styled.ProfileTextContainer>
    </Styled.Profile>
  );
};
