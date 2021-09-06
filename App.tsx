import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Tabs } from './app/components/tabs/Tabs';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme/theme';
import { observer } from 'mobx-react-lite';
import { StorageKeys } from './app/StorageKeys';
import { ITransaction } from './app/store/interfaces';
import { store } from './app/store/store';

const App = observer(() => {
  const getInitialData = async () => {
    try {
      const initialTransactions = await AsyncStorage.getItem(
        StorageKeys.Transactions
      );

      if (initialTransactions) {
        store.setTransactions(
          JSON.parse(initialTransactions) as ITransaction[]
        );
      }
    } catch (error) {
      store.setErrorMessage(error);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ThemeProvider>
  );
});

export default App;
