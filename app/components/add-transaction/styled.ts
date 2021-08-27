import styled from 'styled-components/native';

const Header = styled.View`
  align-items: flex-end;
  padding: 5px 10px 0;
`;

const TitleContainer = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 100px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const AmountContainer = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 30px;
`;

const AmountInput = styled.TextInput`
  height: 80px;
  width: 70%;
  border-radius: 45px;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: right;
  font-size: 36px;
  font-weight: bold;
  padding: 0 20px 0 50px;
  color: ${({ theme }) => theme.colors.purple};
`;

const CurrencyContainer = styled.View`
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 15%;
  width: 85px;
  padding-left: 10px;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 45px;
  border-top-left-radius: 45px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const OptionsContainer = styled.View`
  align-items: center;
  padding-top: 50px;
`;

const Option = styled.TouchableOpacity`
  width: 80%;
`;

const OptionSelect = styled.View`
  height: 70px;
  width: 100%;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 36px;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.purple};
  padding: 0 0 0 30px;
  margin-bottom: 20px;
`;

const OptionTitle = styled.Text`
  padding-left: 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.lightGray};
  text-transform: capitalize;
`;

const AddButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

const AddButton = styled.TouchableOpacity`
  width: 90%;
  align-items: center;
`;

const AddButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
`;

const OptionInput = styled.TextInput`
  height: 100%;
  flex: 1;
  padding: 0 5px 0 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.lightGray}; ;
`;

export const Styled = {
  Header,
  Title,
  TitleContainer,
  AmountContainer,
  AmountInput,
  CurrencyContainer,
  OptionsContainer,
  OptionSelect,
  OptionTitle,
  AddButtonContainer,
  AddButtonText,
  AddButton,
  Option,
  OptionInput,
};
