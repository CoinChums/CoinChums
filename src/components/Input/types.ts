import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';

export type TInputVariant = 'outlined' | 'rounded' | 'underlined';

export type TInputTypes = 'email' | 'password' | 'text' | 'number' | 'phone' | 'url' | 'otp';

export interface ExtraInputProps {
  variant: TInputVariant;
  type: TInputTypes;
  isInvalid?: boolean;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  input?: React.ReactNode;
  placeholder?: React.ReactNode;
  placeholderTextColor?: React.ReactNode;
  icon?: JSX.Element;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  minLength?: number;
  maxLength?: number;
}

export type TInputProps = TextInputProps & ExtraInputProps;
