import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import React from 'react';
import { View } from 'react-native';
import { AuthActions } from '../../actions/auth';
import { BaseLayout, Button, Header, Input } from '../../components';
import { BUTTON_TYPE } from '../../constants/enums';
import { useAuth } from '../../store/useAuth/useAuth';
import { styles } from './Authentication.style';

const Authentication = () => {
  const navigation = useNavigation();
  const backPress = () => navigation.goBack();
  const { loginSuccess } = useAuth();

  const anonymousSignIn = async () => {
    try {
      const user = await AuthActions.login();
      if (user.id) {
        loginSuccess({
          user,
          allowLogin: true,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <BaseLayout>
      <Header title={t('login')} onPress={backPress} />
      <View style={styles.container}>
        <Input
          type="text"
          placeholder={'Your email address'}
          variant={'underlined'}
          label={'Email address'}
        />
        <Input
          type="password"
          placeholder={'Your password'}
          variant={'underlined'}
          label={'Password'}
        />
        <Button type={BUTTON_TYPE.FILL} title="Login" onPress={anonymousSignIn} />
        <Button type={BUTTON_TYPE.UNDERLINE} title="Login as Guest" onPress={anonymousSignIn} />
      </View>
    </BaseLayout>
  );
};

export default React.memo(Authentication);
