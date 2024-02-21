import auth from '@react-native-firebase/auth';
import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components';
import { BUTTON_TYPE } from '../../constants/enums';
import { loginAction } from '../../redux/login/saga/login.actions';
import { useAppDispatch } from '../../redux/reduxStore';
import { styles } from './Authentication.style';

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
