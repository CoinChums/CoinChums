import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { BUTTON_TYPE } from '../../constants/enums';
import dimensions from '../../utils/dimensions';
import { SVGImage } from '../ImageRender/Image';
import { styles } from './styles';
import { AnimatedButtonProps, TButtonProps } from './types';

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
  const {
    buttonContainerStyle,
    title,
    titleContainerStyle,
    titleStyle,
    type,
    leftIcon,
    rightIcon,
  } = props;

  switch (type) {
    case BUTTON_TYPE.FILL:
      return (
        <AnimatedTouchableOpacity
          containerStyle={[styles.fillBtnContainer, buttonContainerStyle]}
          {...props}>
          <View style={[styles.titleContainer, titleContainerStyle]}>
            {leftIcon && (
              <SVGImage
                assetSrc={leftIcon}
                height={dimensions.viewHeight(18)}
                width={dimensions.viewWidth(18)}
              />
            )}
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            {rightIcon && (
              <SVGImage
                assetSrc={rightIcon}
                height={dimensions.viewHeight(18)}
                width={dimensions.viewWidth(18)}
              />
            )}
          </View>
        </AnimatedTouchableOpacity>
      );

    case BUTTON_TYPE.OUTLINE:
      return (
        <AnimatedTouchableOpacity
          containerStyle={[styles.outlineBtn, buttonContainerStyle]}
          {...props}>
          <View style={[styles.titleContainer, titleContainerStyle]}>
            {leftIcon && (
              <SVGImage
                assetSrc={leftIcon}
                height={dimensions.viewHeight(18)}
                width={dimensions.viewWidth(18)}
              />
            )}
            <Text style={[styles.title, titleStyle]}>{title}</Text>
          </View>
        </AnimatedTouchableOpacity>
      );

    case BUTTON_TYPE.UNDERLINE:
      return <Text style={[styles.underlineBtn, titleStyle]}>{title}</Text>;

    default:
      return null;
  }
});
