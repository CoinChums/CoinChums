import auth from '@react-native-firebase/auth';
import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components';
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
  return (
    <View style={styles.container}>
      <Button title="Login as Guest" onPress={anonymousSignIn} />
    </View>
  );
};

export default React.memo(Authentication);
