import { ViewStyle } from 'react-native';

export interface IErrorScreen {
  onBtnPress: () => void;
  description: string;
  showButton?: boolean;
  containerStyles?: ViewStyle;
  btnStyles?: ViewStyle;
}
