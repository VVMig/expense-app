import styled from 'styled-components/native';

const HomeHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px ${({ theme }) => theme.padding.side}px;
`;

const Profile = styled.View`
  flex-direction: row;
  flex: 1;
`;

const ProfileCircle = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 25px;
`;

const ProfileTextContainer = styled.View`
  padding: 2px 0 2px 10px;
  justify-content: space-between;
`;

const WelcomeText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const NameText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

const SettingsContainer = styled.View`
  justify-content: center;
`;

const Settings = styled.View`
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Styled = {
  HomeHeader,
  Profile,
  ProfileCircle,
  ProfileTextContainer,
  WelcomeText,
  NameText,
  Settings,
  SettingsContainer,
};
