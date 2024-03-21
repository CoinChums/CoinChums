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

  const navigateToAuth = (isSignup: boolean) => {
    navigation.navigate(APP_ROUTES.auth, { isSignup });
  };

  const renderAuthButton = (title: string, isSignup: boolean) => {
    const buttonContainerStyle = [styles.loginBtn, styles.backgroundPrimary];

    return (
      <Button
        key={title}
        title={title}
        buttonContainerStyle={buttonContainerStyle}
        onPress={() => navigateToAuth(isSignup)}
        titleStyle={styles.title}
        type={BUTTON_TYPE.FILL}
      />
    );
  };

  return (
    <BaseLayout style={styles.container} statusColor={theme.palette.white.dark}>
      <View style={styles.authContainer}>
        <Image source={iconSrc} style={styles.appIcon} />
        {renderAuthButton(t('signUp'), true)}
        {renderAuthButton(t('login'), false)}
        <Text style={styles.terms}>{t('terms')}</Text>
      </View>
      <BottomShape />
    </BaseLayout>
  );
};

export default React.memo(Login);
