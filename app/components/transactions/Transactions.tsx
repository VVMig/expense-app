import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { ListRenderItem, FlatList, Modal } from 'react-native';
import { ITransaction } from '../../store/interfaces';
import { store } from '../../store/store';
import { ContextMenu } from '../context-menu/ContextMenu';
import { Header } from './Header';
import { ListItem } from './ListItem';
import { Styled } from './styled';

export const Transactions = observer(() => {
  const [isContextModalShow, setIsContextModalShow] = useState(false);

  const onToggleModal = () => {
    setIsContextModalShow(!isContextModalShow);
  };

  const renderItem: ListRenderItem<ITransaction> = ({ item }) => (
    <ListItem
      title={item.category}
      date={item.date}
      money={item.money}
      isExpense={item.isExpense}
      isContextModalShow={isContextModalShow}
      onToggleModal={onToggleModal}
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
      <Modal visible={isContextModalShow} animationType="slide" transparent>
        <ContextMenu onPressCancel={onToggleModal} />
      </Modal>
    </Styled.Transactions>
  );
});
