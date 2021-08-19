import styled from 'styled-components/native';

const Tab = styled.View`
  align-items: center;
  justify-content: center;
  top: 10px;
`;

const AddButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

const AddButtonContainer = styled.View`
  box-shadow: 0 2px 3px ${({ theme }) => theme.colors.lightGray};
`;

export const Styled = {
  Tab,
  AddButton,
  AddButtonContainer,
};
