import { StackNavigationProp } from '@react-navigation/stack';
import { ScreensEnum } from '../app/ScreensEnum';

export type RootStackParamList = {
  [ScreensEnum.AddExpense]: undefined;
  [ScreensEnum.Chart]: undefined;
  [ScreensEnum.Home]: undefined;
};

export type AddExpenseNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreensEnum.AddExpense
>;
