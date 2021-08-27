import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { DefaultCategories } from '../../../Categories';
import { theme } from '../../../../theme/theme';
import { Styled } from './styled';
import { CategorySelect } from './CategorySelect';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

interface Props {
  isModalVisible: boolean;
  onToggleModalVisible: () => void;
  onSave: (categoryName: string) => void;
  defaultCategory: string;
}

export const CategoryModal: React.FC<Props> = ({
  isModalVisible,
  onSave,
  defaultCategory,
  onToggleModalVisible,
}) => {
  const [selectCategory, setSelectCategory] = useState(defaultCategory);

  const onPressSaveButton = () => {
    onSave(selectCategory);
    onToggleModalVisible();
  };

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <Styled.CategoryModal
        style={{
          flex: 1,
          backgroundColor: 'rgb(255, 255, 255)',
        }}
      >
        <Styled.ModalHeader>
          <TouchableOpacity onPress={onToggleModalVisible}>
            <Icon name="close" size={30} color={theme.colors.lightGray} />
          </TouchableOpacity>
        </Styled.ModalHeader>
        <Styled.ModalBody>
          <Styled.CategoriesList
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {DefaultCategories.map((category) => (
              <CategorySelect
                {...category}
                key={category.name}
                onSelect={() => setSelectCategory(category.name)}
                isSelect={selectCategory === category.name}
              />
            ))}
          </Styled.CategoriesList>
        </Styled.ModalBody>
        <Styled.CloseButtonContainer>
          <Styled.CloseButton onPress={onPressSaveButton}>
            <LinearGradient
              start={[0, 0]}
              end={[1, 1]}
              style={{
                width: '100%',
                height: 60,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              colors={[
                theme.colors.blue,
                theme.colors.purple,
                theme.colors.yellow,
              ]}
            >
              <Styled.CloseButtonText>Save</Styled.CloseButtonText>
            </LinearGradient>
          </Styled.CloseButton>
        </Styled.CloseButtonContainer>
      </Styled.CategoryModal>
    </Modal>
  );
};
