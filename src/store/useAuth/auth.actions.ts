import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE } from '../../constants/enums';
import { UserPayload } from '../../screens/Authentication/types';
import { AuthInitialState } from './auth.types';

export const setTokenAsyncStorage = async (token: string) =>
  await AsyncStorage.setItem(ASYNC_STORAGE.ACCESS_TOKEN, token);

export const setCouponAsyncStorage = async (coupon: string) =>
  await AsyncStorage.setItem(ASYNC_STORAGE.COUPON, coupon);

export const handleLogin = async (
  user: UserPayload,
  set: (state: Partial<AuthInitialState>) => void,
) => {
  try {
    if (!user || !user.email) {
      throw new Error('Email, password, and coupon code are required.');
    }

    const { email, name, _id, couponId, encodedToken } = user;

    const userDetails = {
      id: _id || '',
      email,
      fullName: name || '',
      couponCode: couponId || '',
      token: encodedToken || '',
    };

    await setTokenAsyncStorage(encodedToken || '');

    set({
      user: userDetails,
      isAuthenticated: true,
    });
  } catch (err) {
    console.error(err);
  }
};
