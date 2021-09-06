import styled from 'styled-components/native';

const Transactions = styled.View`
  flex: 1;
  padding: 20px ${({ theme }) => theme.padding.side}px 60px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 20px;
`;

const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const ViewAllButton = styled.TouchableOpacity``;

const ViewAllText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const ItemListContainer = styled.View`
  padding-bottom: 10px;
`;

const ListItem = styled.View`
  width: 100%;
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  justify-content: space-between;
  border-radius: 25px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ItemTitle = styled.Text`
  padding-left: 10px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  text-transform: capitalize;
`;

const TransactionInfo = styled.View`
  justify-content: center;
  align-items: flex-end;
`;

const MoneyData = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

const TransactionDate = styled.Text`
  font-size: 16px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const Styled = {
  Transactions,
  Header,
  HeaderTitle,
  ViewAllButton,
  ViewAllText,
  ListItem,
  TitleContainer,
  ItemTitle,
  TransactionInfo,
  MoneyData,
  TransactionDate,
  ItemListContainer,
};
