import React, { useCallback, useImperativeHandle, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, View } from 'react-native';
import { theme } from '../../themes';
import { styles } from './styles';
import { IndicatorProps } from './types';

export type IndicatorRef = {
  hide: () => void;
  show: () => void;
};

export const IndicatorViewRef = (props: IndicatorProps, ref: React.Ref<IndicatorRef>) => {
  const { isLoading = true } = props;
  const [loading, setLoading] = useState(isLoading);
  const pressCount = useRef(0);
  const show = useCallback(() => setLoading(true), []);
  const hide = useCallback(() => setLoading(false), []);

  const handlePressCount = useCallback(() => {
    pressCount.current = pressCount.current + 1;

    if (pressCount.current === 2) {
      setLoading(false);
      pressCount.current = 0;
    }
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return {
        hide,
        show,
      };
    },
    [hide, show],
  );

  if (!loading) return <></>;

  return (
    <Pressable onPress={handlePressCount} style={styles.container}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator
          size={'large'}
          color={theme.palette.warning.medium}
          style={styles.loaderStyle}
        />
      </View>
    </Pressable>
  );
};

export const IndicatorView = React.forwardRef<IndicatorRef, IndicatorProps>(IndicatorViewRef);
