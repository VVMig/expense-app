import styled from 'styled-components/native';

const Container = styled.View`
  padding: 10px ${({ theme }) => theme.padding.side}px;
`;

const CardTexture = styled.ImageBackground`
  width: 100%;
  height: 100%;
  opacity: 0.05;
  position: absolute;
`;

const CardTitle = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  padding-top: 30px;
`;

const SwitchButton = styled.TouchableOpacity`
  align-items: center;
`;

const Balance = styled.Text`
  font-size: 48px;
  padding-top: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

const Total = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 30px 20px 0;
  justify-content: space-between;
`;

const Arrow = styled.View`
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background-color: rgba(161, 177, 199, 0.6);
`;

const StatsContainer = styled.View`
  flex-direction: row;
  height: 50px;
  align-items: center;
`;

const StatsTextContainer = styled.View`
  justify-content: space-between;
  height: 100%;
  padding: 2px 0 2px 8px;
`;

const StatsTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

const StatsMoney = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const Styled = {
  Container,
  CardTexture,
  CardTitle,
  Balance,
  Total,
  Arrow,
  StatsContainer,
  StatsTextContainer,
  StatsTitle,
  StatsMoney,
  SwitchButton,
};
