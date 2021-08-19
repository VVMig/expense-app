import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { AddExpense, Chart, Home } from '../../../screens';
import { TabIcon } from './TabIcon';
import { TabAdd } from './TabAdd';
import { ScreensEnum } from '../../ScreensEnum';
import { theme } from '../../../theme/theme';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: Styles.tabBarStyles,
      }}
    >
      <Tab.Screen
        name={ScreensEnum.Home}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon isFocused={focused} iconName="home" />
          ),
        }}
      />
      <Tab.Screen
        name={ScreensEnum.AddExpense}
        component={AddExpense}
        options={{
          tabBarIcon: () => (
            <Icon name="plus" size={40} color={theme.colors.white} />
          ),
          tabBarButton: ({ children, onPress }) => (
            <TabAdd onPress={onPress}>{children}</TabAdd>
          ),
        }}
      />
      <Tab.Screen
        name={ScreensEnum.Chart}
        component={Chart}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon isFocused={focused} iconName="bar-chart" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Styles = StyleSheet.create({
  tabBarStyles: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: 80,
  },
});
