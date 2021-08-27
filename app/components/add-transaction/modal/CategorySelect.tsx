import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { theme } from '../../../../theme/theme';
import { ICategory } from '../../../Categories';
import { Styled } from './styled';

interface Props extends ICategory {
  onSelect: () => void;
  isSelect: boolean;
}

export const CategorySelect: React.FC<Props> = ({
  icon,
  name,
  color,
  additionalColor,
  onSelect,
  isSelect,
}) => {
  return (
    <Styled.CategorySelect onPress={onSelect}>
      <LinearGradient
        start={[1, 0]}
        end={[0, 1]}
        colors={[additionalColor, color]}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: isSelect ? 2 : 0,
          borderColor: theme.colors.primary,
        }}
      >
        {icon({ size: 30, color: theme.colors.white })}
      </LinearGradient>
      <Styled.CategoryTitle isSelect={isSelect}>{name}</Styled.CategoryTitle>
    </Styled.CategorySelect>
  );
};
