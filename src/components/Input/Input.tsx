import React from 'react';
import { KeyboardTypeOptions, TextInput, View } from 'react-native';
import { theme } from '../../themes';
import { styles } from './styles';
import { TInputProps, TInputTypes } from './types';

export const Input = React.memo((props: TInputProps) => {
  const [hidePassword, setHidePassword] = React.useState(true);
  const { variant, type, isDisabled, isInvalid, ...restProps } = props;
  const inputType =
    variant === 'outlined'
      ? styles.input_outline
      : variant === 'underlined'
        ? styles.input_underline
        : styles.input_rounded;

  let keyboardType: Record<TInputTypes, KeyboardTypeOptions> = {
    email: 'email-address',
    password: 'default',
    text: 'default',
    number: 'numeric',
    phone: 'phone-pad',
    url: 'url',
    otp: 'numeric',
  };

  const inputStyle = [
    styles.input,
    inputType,
    isDisabled && { opacity: 0.5, borderColor: theme.palette.black.light },
    isInvalid && { borderColor: theme.palette.error.dark },
  ];

  return (
    <View>
      <TextInput
        style={inputStyle}
        editable={!isDisabled}
        secureTextEntry={type === 'password' ? hidePassword : false}
        keyboardType={keyboardType[type]}
        {...restProps}
      />
    </View>
  );
});
