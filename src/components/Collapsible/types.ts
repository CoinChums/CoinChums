import {StyleProp, TextStyle, ViewStyle} from "react-native";

export interface ICollapsible {
  children: JSX.Element;
  closeExpansion?: boolean;
  loading: boolean;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
