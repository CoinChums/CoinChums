import { useEffect, useState } from 'react';
import { ASYNC_STORAGE } from '../constants/enums';
import { getAsyncItem, setAsyncItem } from '../services/storage.service';

export const useAppFirstLaunch = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const value = await getAsyncItem(ASYNC_STORAGE.IS_FIRSTLAUNCH);
        if (value === null) {
          await setAsyncItem(ASYNC_STORAGE.IS_FIRSTLAUNCH, 'true');
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
