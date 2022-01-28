import React from 'react';
import { Modal } from 'react-native';

import { AddTransaction } from '../app/components/add-transaction/AddTransaction';
import { Styled } from './styled';

interface Props {
  onModalClose: () => void;
  isShowModal: boolean;
}

export const AddExpense: React.FC<Props> = ({ isShowModal, onModalClose }) => {
  return (
    <Modal visible={isShowModal} animationType="slide">
      <Styled.Container>
        <AddTransaction onModalClose={onModalClose} />
      </Styled.Container>
    </Modal>
  );
};
