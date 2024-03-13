import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE } from '../../../constants/enums';
import { TUserState } from '../../../screens/Authentication/types';
import { generateRandomId } from '../../../utils/helper';
import { useAuth } from '../auth.actions';

export const useAuthActions = () => {
  const { loginSuccess, loginLoading, loginFailed } = useAuth();

  const signIn = async () => {
    try {
      const { loggedInUserDetails } = useAuth.getState();
      if (loggedInUserDetails?.id) {
        loginSuccess({
          user: loggedInUserDetails,
          allowLogin: true,
        });
        await AsyncStorage.setItem(ASYNC_STORAGE.ACCESS_TOKEN, loggedInUserDetails.id);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = async (user: TUserState) => {
    try {
      loginLoading();
      if (!user.email || !user.password || !user.couponCode) {
        throw new Error('Email and password are required.');
      }

      const userId = generateRandomId();
      loginSuccess({
        user: {
          id: userId,
          email: user.email,
          password: user.password,
          couponCode: user.couponCode,
        },
        allowLogin: true,
      });
      signIn();
    } catch (err) {
      loginFailed();
      console.error(err);
    }
  };

  return { handleLogin, signIn };
};
