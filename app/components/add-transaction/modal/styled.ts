import styled from 'styled-components/native';
import { ISelectCategory } from './interfaces';

const CategoryModal = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ModalHeader = styled.View`
  width: 100%;
  align-items: flex-end;
  padding: 5px 10px;
`;

const ModalBody = styled.View`
  flex: 1;
`;

const CategorySelect = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
`;

const CategoriesList = styled.ScrollView`
  width: 100%;
`;

const CategoryTitle = styled.Text<ISelectCategory>`
  padding-top: 5px;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: bold;
  color: ${({ theme, isSelect }) =>
    isSelect ? theme.colors.primary : theme.colors.lightGray};
`;

const CloseButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

const CloseButton = styled.TouchableOpacity`
  width: 90%;
  align-items: center;
`;

const CloseButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
`;

export const Styled = {
  CategoryModal,
  ModalHeader,
  ModalBody,
  CategorySelect,
  CategoriesList,
  CategoryTitle,
  CloseButton,
  CloseButtonContainer,
  CloseButtonText,
};
