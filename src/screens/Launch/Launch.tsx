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

  const navigateToSignup = () => navigation.navigate(APP_ROUTES.signup);
  const navigateToSignin = () => navigation.navigate(APP_ROUTES.signin);

  const renderAuthButton = (title: string, cb: () => void) => {
    const buttonContainerStyle = [styles.loginBtn, styles.backgroundPrimary];

    return (
      <Button
        key={title}
        title={title}
        buttonContainerStyle={buttonContainerStyle}
        onPress={cb}
        titleStyle={styles.title}
        type={BUTTON_TYPE.FILL}
      />
    );
  };

  return (
    <BaseLayout style={styles.container} statusColor={theme.palette.white.dark}>
      <View style={styles.authContainer}>
        <Image source={iconSrc} style={styles.appIcon} />
        {renderAuthButton(t('signUp'), navigateToSignup)}
        {renderAuthButton(t('Login'), navigateToSignin)}
        <Text style={styles.terms}>{t('terms')}</Text>
      </View>
      <BottomShape />
    </BaseLayout>
  );
};

export default React.memo(Login);
