import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE } from '../constants/enums';

export const setTokenAsyncStorage = async (token: string) =>
  await AsyncStorage.setItem(ASYNC_STORAGE.ACCESS_TOKEN, token);

export const setCouponAsyncStorage = async (coupon: string) =>
  await AsyncStorage.setItem(ASYNC_STORAGE.COUPON, coupon);

export const getTokenAsyncStorage = async () => {
  const token = await AsyncStorage.getItem(ASYNC_STORAGE.ACCESS_TOKEN);
  return token;
};
