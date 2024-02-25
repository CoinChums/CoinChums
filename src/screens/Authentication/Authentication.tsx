import auth from '@react-native-firebase/auth';
import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components';
import { BUTTON_TYPE } from '../../constants/enums';
import { styles } from './Authentication.style';
import { useAuth } from '../../store/useAuth/useAuth';
import { AuthActions } from '../../actions/auth';

const Authentication = () => {
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
    <View style={styles.container}>
      <Button type={BUTTON_TYPE.FILL} title="Login as Guest" onPress={anonymousSignIn} />
      <Button type={BUTTON_TYPE.FILL} title="Login email pass" onPress={emailPass} />
    </View>
  );
};

export default React.memo(Authentication);
