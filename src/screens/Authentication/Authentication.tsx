import { WEB_CLIENT_ID } from '@env';
import auth from '@react-native-firebase/auth';
import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components';
import { loginAction } from '../../redux/login/saga/login.actions';
import { useAppDispatch } from '../../redux/reduxStore';
import { styles } from './Authentication.style';
import { BUTTON_TYPE } from '../../constants/enums';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
  offlineAccess: true,
});

const Authentication = () => {
  const dispatch = useAppDispatch();
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

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('IN_PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button type={BUTTON_TYPE.FILL} title="Login as Guest" onPress={anonymousSignIn} />
      <GoogleSigninButton onPress={signIn} />
    </View>
  );
};

export default React.memo(Authentication);
