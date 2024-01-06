import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import { BaseLayout, BottomShape, Button } from '../../components';
import { loginAction } from '../../redux/login/saga/login.actions';
import { useAppDispatch } from '../../redux/reduxStore';
import { theme } from '../../themes';
import { styles } from './Launch.style';

const Login: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const iconSrc = require('../../assets/images/coinchums.png');

  const loginHandler = () => {
    dispatch(loginAction.loginUser());
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
        />
        <Button
          title={t('login')}
          buttonContainerStyle={[styles.loginBtn, styles.backgroundBlack]}
          onPress={loginHandler}
          titleStyle={styles.title}
        />
        <Text style={styles.terms}>{t('terms')}</Text>
      </View>
      <BottomShape />
    </BaseLayout>
  );
};

export default React.memo(Login);
