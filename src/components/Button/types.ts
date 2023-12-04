import {StyleProp, TextStyle, TouchableOpacityProps, ViewStyle} from "react-native";

export interface ExtraButtonProps {
  buttonContainerStyle?: StyleProp<ViewStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title?: React.ReactNode;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
}

export type AnimatedButtonProps = Omit<TouchableOpacityProps, "onPressIn" | "onPressOut" | "style"> & {
  containerStyle?: StyleProp<ViewStyle>;
};

export type TButtonProps = AnimatedButtonProps & ExtraButtonProps;
