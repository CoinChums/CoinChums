import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';

export type TInputVariant = 'outlined' | 'filled' | 'underlined' | 'rounded' | 'unstyled';

export type TInputTypes = 'email' | 'password' | 'text' | 'number' | 'phone' | 'url' | 'otp';

export interface ExtraInputProps {
  variant: TInputVariant;
  type: TInputTypes;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  input?: React.ReactNode;
  placeholder?: React.ReactNode;
  placeholderTextColor?: React.ReactNode;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  labelText?: React.ReactNode;
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
  minLength?: number;
  maxLength?: number;
}

export type AnimatedInputProps = Omit<TextInputProps, 'style'> & {
  containerStyle?: StyleProp<ViewStyle>;
};

export type TInputProps = TextInputProps & ExtraInputProps;
