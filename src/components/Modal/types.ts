import { StyleProp, ViewStyle } from 'react-native';

export type TModal = {
  width?: number;
  visible: boolean;
  children: JSX.Element;
  containerStyle?: StyleProp<ViewStyle>;
  onRequestClose?: () => void;
};
