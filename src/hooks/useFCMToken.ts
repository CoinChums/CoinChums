import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { ASYNC_STORAGE } from '../constants/enums';

export const useFCMToken = () => {
  const [generatedToken, setGeneratedToken] = useState<string | null>(null);

  const getFcmToken = async () => {
    try {
      const tokenFromStorage = await AsyncStorage.getItem(ASYNC_STORAGE.FCM_TOKEN_KEY);
      if (tokenFromStorage !== null) {
        setGeneratedToken(tokenFromStorage);
      } else {
        const newFcmToken = await messaging().getToken();
        if (newFcmToken) {
          await AsyncStorage.setItem(ASYNC_STORAGE.FCM_TOKEN_KEY, newFcmToken);
          setGeneratedToken(newFcmToken);
        }
      }
    } catch (error) {
      console.error('Error fetching or storing FCM token:', error);
    }
  };

  useEffect(() => {
    getFcmToken();
  }, []);

  return generatedToken;
};
