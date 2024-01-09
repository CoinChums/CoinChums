import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import { BaseLayout, BottomShape, Button } from '../../components';
import { APP_ROUTES, BUTTON_TYPE } from '../../constants/enums';
import { theme } from '../../themes';
import { NavigationParams } from '../../types/types';
import { styles } from './Launch.style';

const Login: FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const iconSrc = require('../../assets/images/coinchums.png');

  const loginHandler = () => {
    navigation.navigate(APP_ROUTES.auth);
  };

  return (
    <BaseLayout style={styles.container} statusColor={theme.palette.white.dark}>
      <View style={styles.authContainer}>
        <Image source={iconSrc} style={styles.appIcon} />
        <Button
          title={t('signUp')}
          buttonContainerStyle={[styles.loginBtn, styles.backgroundPrimary]}
          onPress={loginHandler}
          titleStyle={styles.title}
          type={BUTTON_TYPE.FILL}
        />
        <Button
          title={t('login')}
          buttonContainerStyle={[styles.loginBtn, styles.backgroundBlack]}
          onPress={loginHandler}
          titleStyle={styles.title}
          type={BUTTON_TYPE.FILL}
        />
        <Text style={styles.terms}>{t('terms')}</Text>
      </View>
      <BottomShape />
    </BaseLayout>
  );
};

export default React.memo(Login);
