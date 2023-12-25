import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import { BaseLayout, BottomShape, Button } from '../../components';
import { loginAction } from '../../redux/login/saga/login.actions';
import { useAppDispatch } from '../../redux/reduxStore';
import { styles } from './Launch.style';

const Login: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const iconSrc = require('../../assets/images/coinchums.png');

  const loginHandler = () => {
    dispatch(loginAction.loginUser());
  };

  return (
    <BaseLayout style={styles.container}>
      <View style={styles.authContainer}>
        <Image source={iconSrc} style={styles.appIcon} />
        <Button
          title={t('common:signUp')}
          buttonContainerStyle={[styles.loginBtn, styles.backgroundPrimary]}
          onPress={loginHandler}
          titleStyle={styles.title}
        />
        <Button
          title={t('common:login')}
          buttonContainerStyle={[styles.loginBtn, styles.backgroundBlack]}
          onPress={loginHandler}
          titleStyle={styles.title}
        />
        <Text style={styles.terms}>{t('common:terms')}</Text>
      </View>
      <BottomShape />
    </BaseLayout>
  );
};

export default React.memo(Login);
