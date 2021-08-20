import { observer } from 'mobx-react-lite';
import React from 'react';
import { ListRenderItem, FlatList } from 'react-native';
import { ITransaction } from '../../store/interfaces';
import { store } from '../../store/store';
import { Header } from './Header';
import { ListItem } from './ListItem';
import { Styled } from './styled';

export const Transactions = observer(() => {
  const renderItem: ListRenderItem<ITransaction> = ({ item }) => (
    <ListItem
      title={item.category}
      date={item.date}
      money={item.money}
      isExpense={item.isExpense}
    />
  );

  return (
    <Styled.Transactions>
      <Header />
      <FlatList
        data={store.transactionsShortList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Styled.Transactions>
  );
});
