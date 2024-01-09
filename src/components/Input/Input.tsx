import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import React from 'react';
import { TInputProps, TInputTypes } from './types';

export const Input = React.memo((props: TInputProps) => {
  const [hidePassword, setHidePassword] = React.useState(true);
  const { variant, type, ...restProps } = props;

  let keyboardType: Record<TInputTypes, KeyboardTypeOptions> = {
    email: 'email-address',
    password: 'default',
    text: 'default',
    number: 'numeric',
    phone: 'phone-pad',
    url: 'url',
    otp: 'numeric',
  };

  return (
    <View>
      <TextInput
        secureTextEntry={type === 'password' ? hidePassword : false}
        keyboardType={keyboardType[type]}
        {...restProps}
      />
    </View>
  );
});
