import { API_URL } from '@env';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { BaseLayout, Button, Header } from '../../components';

import { loader } from '../../utils/helper';
import { styles } from './Home.style';
import { NavigationParams, THome } from './types';
import { Input } from '../../components/Input/Input';

const Home: React.FC<THome> = () => {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const { t } = useTranslation();
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  const rotation = useSharedValue(0);

  useEffect(() => {
    const rotateAnimation = () => {
      rotation.value = withRepeat(
        withTiming(360, {
          duration: 2000,
          easing: Easing.linear,
        }),
        -1,
      );
    };

    rotateAnimation();

    return () => {
      rotation.value = 0;
    };
  }, [rotation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <BaseLayout>
      <Header title={t('common:home')} />
      <Text>
        {t('common:env')} {'->'} {API_URL}
      </Text>
      <Button title={t('common:detailsNavigation')} onPress={() => navigation.navigate('Details')} />
      <Input variant="outlined" type="text" placeholder={'enter text'} />
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
      <Button onPress={handlePress} title={t('common:clickMe')} />
      <View style={styles.container}>
        <Animated.View style={[styles.square, animatedStyle]} />
      </View>
    </BaseLayout>
  );
};

export default React.memo(Home);
