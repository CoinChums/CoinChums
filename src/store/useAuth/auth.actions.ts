import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE, SCREEN_STATE } from '../../constants/enums';
import { TUserState } from '../../screens/Authentication/types';
import { generateRandomId } from '../../utils/helper';
import { InitialAuthState } from './auth.types';

export const setUserInAsyncStorage = async (userId: string) => {
  await AsyncStorage.setItem(ASYNC_STORAGE.ACCESS_TOKEN, userId);
};

export const generateUserIdAndSetInAsyncStorage = async () => {
  const userId = generateRandomId();
  await setUserInAsyncStorage(userId);
  return userId;
};

export const handleLogin = async (
  user: TUserState,
  set: (state: Partial<InitialAuthState>) => void,
) => {
  try {
    const { email, password, couponCode, fullName } = user;
    if (!email || !password || !couponCode) {
      throw new Error('Email, password, and coupon code are required.');
    }
    set({ state: SCREEN_STATE.LOADING });
    const userId = await generateUserIdAndSetInAsyncStorage();

    const userDetails = {
      id: userId,
      email: email,
      password: password,
      couponCode: couponCode,
      fullName: fullName ?? '',
    };

    set({
      loggedInUserDetails: userDetails,
      isAuthenticated: true,
      state: SCREEN_STATE.NONE,
    });
  } catch (err) {
    set({ state: SCREEN_STATE.ERROR });
    console.error(err);
  }
};
