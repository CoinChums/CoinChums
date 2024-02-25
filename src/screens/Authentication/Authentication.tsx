import React from 'react';
import { View } from 'react-native';
import { AuthActions } from '../../actions/auth';
import { Button } from '../../components';
import { BUTTON_TYPE } from '../../constants/enums';
import { useAuth } from '../../store/useAuth/useAuth';
import { styles } from './Authentication.style';

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

  return (
    <View style={styles.container}>
      <Button type={BUTTON_TYPE.FILL} title="Login as Guest" onPress={anonymousSignIn} />
    </View>
  );
};

export default React.memo(Authentication);
