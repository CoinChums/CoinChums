import React, { useState } from 'react';
import { KeyboardTypeOptions, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { TInputProps, TInputTypes } from './types';

export const Input = React.memo((props: TInputProps) => {
  const [hidePassword, setHidePassword] = useState(true);
  const { variant, type, isDisabled, isInvalid, isReadOnly, label, onChangeText, ...restProps } =
    props;

  const keyboardType: Record<TInputTypes, KeyboardTypeOptions> = {
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
    variant === 'outlined' && styles.input_outline,
    variant === 'underlined' && styles.input_underline,
    variant === 'rounded' && styles.input_rounded,
    isDisabled && styles.input_disabled,
    isInvalid && styles.input_invalid,
  ];

  const togglePasswordVisibility = () => setHidePassword(!hidePassword);

  return (
    <View style={styles.labelContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.container}>
        <TextInput
          style={inputStyle}
          editable={!isDisabled && !isReadOnly}
          secureTextEntry={type === 'password' ? hidePassword : false}
          keyboardType={keyboardType[type]}
          onChangeText={onChangeText}
          {...restProps}
        />
        {type === 'password' && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Text style={styles.eyeIcon}>{hidePassword ? '👁️' : '🙈'}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});
