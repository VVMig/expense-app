import styled from 'styled-components/native';
import { ChoiseButtonProps } from './interfaces';

const ContextMenu = styled.View`
  width: 70%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  overflow: hidden;
`;

const TitleContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

const ContextMenuTitle = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 200;
`;

const Choice = styled.View`
  width: 100%;
  flex-direction: row;
`;

const ChoiceButton = styled.TouchableOpacity<ChoiseButtonProps>`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${({ theme, isDelete }) =>
    isDelete ? theme.colors.lightRed : theme.colors.blue};
`;

const ButtonText = styled.Text`
  font-size: 22px;
  padding: 18px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Styled = {
  ContextMenu,
  ContextMenuTitle,
  TitleContainer,
  Choice,
  ChoiceButton,
  ButtonText,
};
