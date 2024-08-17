import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE } from '../constants/enums';

type StorageValue = string | boolean | any;

export const setAsyncItem = async (key: ASYNC_STORAGE, value: StorageValue) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error setting item:', error);
  }
};

export const getAsyncItem = async (key: ASYNC_STORAGE) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error('Error getting item:', error);
    return null;
  }
};

export const removeAsyncItem = async (key: ASYNC_STORAGE) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing item:', error);
  }
};

export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing storage:', error);
  }
};

export const getAllAsyncKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (error) {
    console.error('Error getting all keys:', error);
    return [];
  }
};
