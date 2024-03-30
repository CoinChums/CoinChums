import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE, SCREEN_STATE } from '../../constants/enums';
import { UserPayload } from '../../screens/Authentication/types';
import { InitialAuthState } from './auth.types';

export const setTokenAsyncStorage = async (token: string) =>
  await AsyncStorage.setItem(ASYNC_STORAGE.ACCESS_TOKEN, token);

export const setCouponAsyncStorage = async (coupon: string) =>
  await AsyncStorage.setItem(ASYNC_STORAGE.COUPON, coupon);

export const handleLogin = async (
  user: UserPayload,
  set: (state: Partial<InitialAuthState>) => void,
) => {
  try {
    const { email, name, _id, couponId, encodedToken } = user;
    if (!email) {
      throw new Error('Email, password, and coupon code are required.');
    }
    set({ state: SCREEN_STATE.LOADING });

    const userDetails = {
      id: _id,
      email: email,
      fullName: name ?? '',
      couponCode: couponId,
      token: encodedToken,
    };
    await setTokenAsyncStorage(encodedToken);

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
