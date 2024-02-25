import auth from '@react-native-firebase/auth';
import React from 'react';
import { View } from 'react-native';
import { BaseLayout, Button, Header, Input } from '../../components';
import { BUTTON_TYPE } from '../../constants/enums';
import { loginAction } from '../../redux/login/saga/login.actions';
import { useAppDispatch } from '../../redux/reduxStore';
import { styles } from './Authentication.style';
import { t } from 'i18next';
import { useNavigation } from '@react-navigation/native';

const Authentication = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const backPress = () => navigation.goBack();
  const anonymousSignIn = async () => {
    try {
      const response = await auth().signInAnonymously();
      if (response.user.uid) {
        dispatch(loginAction.loginUser());
      }
    } catch (err) {
      console.error(err);
    }
  };

  const emailPass = () => {
    auth()
      .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
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
          type="text"
          placeholder={'Your password'}
          variant={'underlined'}
          label={'Password'}
        />
        <Button type={BUTTON_TYPE.FILL} title="Log In " onPress={emailPass} />
        <Button type={BUTTON_TYPE.UNDERLINE} title="Login as Guest" onPress={anonymousSignIn} />
      </View>
    </BaseLayout>
  );
};

export default React.memo(Authentication);
