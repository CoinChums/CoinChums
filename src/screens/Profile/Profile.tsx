import { API_URL } from '@env';
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
import { IndicatorView } from '../../components/Indicator/Indicator';
import { BUTTON_TYPE } from '../../constants/enums';
import { loader } from '../../utils/helper';
import { APP_IMAGES } from '../../utils/imageMapper';
import { styles } from './Profile.style';

const Profile = () => {
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
      <Header title={t('profile')} rightIcon={APP_IMAGES.search} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>{t('profile')}</Text>
        </View>

        <Text>
          {t('env')} {'->'} {API_URL}
        </Text>
        <IndicatorView isLoading={true} ref={loader} />
        <Animated.View
          style={{
            width,
            height: 100,
            backgroundColor: 'violet',
          }}
        />
        <Button onPress={handlePress} title={t('clickMe')} type={BUTTON_TYPE.FILL} />
        <View style={styles.rotation}>
          <Animated.View style={[styles.square, animatedStyle]} />
        </View>
        <View style={styles.header}>
          <Text>{t('footer')}</Text>
        </View>
      </View>
    </BaseLayout>
  );
};

export default React.memo(Profile);
