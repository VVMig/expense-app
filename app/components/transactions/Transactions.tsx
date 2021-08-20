import React from 'react';
import { ListRenderItem, FlatList, ScrollView } from 'react-native';
import { Header } from './Header';
import { ListItem } from './ListItem';
import { Styled } from './styled';

const mockData = [
  {
    id: '1',
    title: 'Food',
    money: 45,
    date: Date.now(),
    isExpense: true,
  },
  {
    id: '6',
    title: 'Food',
    money: 45,
    date: Date.now(),
    isExpense: true,
  },
  {
    id: '5',
    title: 'Food',
    money: 45,
    date: Date.now(),
    isExpense: false,
  },
  {
    id: '4',
    title: 'Food',
    money: 45,
    date: Date.now(),
    isExpense: true,
  },
  {
    id: '3',
    title: 'Food',
    money: 45,
    date: Date.now(),
    isExpense: false,
  },
];

type MockData = typeof mockData[0];

export const Transactions = () => {
  const renderItem: ListRenderItem<MockData> = ({ item }) => (
    <ListItem
      title={item.title}
      date={item.date}
      money={item.money}
      isExpense={item.isExpense}
    />
  );

  return (
    <Styled.Transactions>
      <Header />
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Styled.Transactions>
  );
};
