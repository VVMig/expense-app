import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { default as FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome5';
import { default as EntypoIcon } from 'react-native-vector-icons/Entypo';
import { CategoryColors } from './CategoryColors';

interface IconProps {
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const DefaultCategories = [
  {
    name: 'food',
    icon: (props: IconProps) => <Icon name="fast-food" {...props} />,
    ...CategoryColors.yellow,
  },
  {
    name: 'shopping',
    icon: (props: IconProps) => (
      <FontAwesomeIcon name="shopping-bag" {...props} />
    ),
    ...CategoryColors.purple,
  },
  {
    name: 'travel',
    icon: (props: IconProps) => <FontAwesomeIcon name="plane" {...props} />,
    ...CategoryColors.turquoise,
  },
  {
    name: 'pets',
    icon: (props: IconProps) => <EntypoIcon name="baidu" {...props} />,
    ...CategoryColors.blue,
  },
];

export const getCategory = (categoryName: string) =>
  DefaultCategories.find(
    (category) => category.name.toLowerCase() === categoryName.toLowerCase()
  );

export type ICategory = typeof DefaultCategories[0];
