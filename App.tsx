import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './app/components/tabs/Tabs';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ThemeProvider>
  );
}
