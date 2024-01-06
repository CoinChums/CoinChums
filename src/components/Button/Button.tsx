import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { styles } from './styles';
import { AnimatedButtonProps, TButtonProps } from './types';
import { BUTTON_TYPE } from '../../constants/enums';

const AnimatedButtonComponent = Animated.createAnimatedComponent(TouchableOpacity);

export const AnimatedTouchableOpacity = React.memo((props: AnimatedButtonProps) => {
  const { containerStyle } = props;
  const scaleValue = useSharedValue(1);

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }],
    };
  });

  return (
    <AnimatedButtonComponent
      style={[containerStyle, animatedButtonStyle]}
      onPressIn={() => (scaleValue.value = withSpring(0.9))}
      onPressOut={() => (scaleValue.value = withSpring(1))}
      activeOpacity={0.8}
      {...props}>
      {props.children}
    </AnimatedButtonComponent>
  );
});

export const Button = React.memo((props: TButtonProps) => {
  const { buttonContainerStyle, title, titleContainerStyle, titleStyle, type, leftIcon, rightIcon } = props;

  let renderedButton;

  switch (type) {
    case BUTTON_TYPE.FILL:
      return (
        <AnimatedTouchableOpacity containerStyle={[styles.buttonContainer, buttonContainerStyle]} {...props}>
          <View style={[styles.titleContainer, titleContainerStyle]}>
            {leftIcon}
            <Text style={titleStyle}>{title}</Text>
            {rightIcon}
          </View>
        </AnimatedTouchableOpacity>
      );

    case BUTTON_TYPE.FILL_ROUNDED:
      return (
        <AnimatedTouchableOpacity containerStyle={[styles.buttonContainer, buttonContainerStyle]} {...props}>
          <View style={[styles.titleContainer, titleContainerStyle]}>
            {leftIcon}
            <Text style={titleStyle}>{title}</Text>
            {rightIcon}
          </View>
        </AnimatedTouchableOpacity>
      );

    case BUTTON_TYPE.OUTLINE_ICON:
      return (
        <AnimatedTouchableOpacity containerStyle={[styles.buttonContainer, buttonContainerStyle]} {...props}>
          <View style={[styles.titleContainer, titleContainerStyle]}>
            {leftIcon}
            <Text style={titleStyle}>{title}</Text>
            {rightIcon}
          </View>
        </AnimatedTouchableOpacity>
      );

    default:
      return null;
  }
});
