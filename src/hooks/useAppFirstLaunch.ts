import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { ASYNC_STORAGE } from '../constants/enums';

export const useAppFirstLaunch = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem(ASYNC_STORAGE.IS_FIRSTLAUNCH);
        if (value === null) {
          await AsyncStorage.setItem(ASYNC_STORAGE.IS_FIRSTLAUNCH, 'true');
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error('Error checking => first launch:', error);
        setIsFirstLaunch(false);
      }
    };

    checkFirstLaunch();
  }, []);

  return isFirstLaunch;
};
