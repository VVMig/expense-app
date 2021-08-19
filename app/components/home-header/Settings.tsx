import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../../../theme/theme';

import { Styled } from './styled';

export const Settings = () => {
  return (
    <Styled.SettingsContainer>
      <TouchableOpacity>
        <Styled.Settings>
          <Icon name="settings" size={25} color={theme.colors.lightGray} />
        </Styled.Settings>
      </TouchableOpacity>
    </Styled.SettingsContainer>
  );
};
