import messaging from '@react-native-firebase/messaging';
import { useEffect, useState } from 'react';

export const useUserPermission = () => {
  const [authStatus, setAuthStatus] = useState<any>(null);

  useEffect(() => {
    const fetchUserPermission = async () => {
      try {
        const status = await messaging().requestPermission();
        const enabled =
          status === messaging.AuthorizationStatus.AUTHORIZED ||
          status === messaging.AuthorizationStatus.PROVISIONAL;
        if (enabled) {
          setAuthStatus(status);
        }
      } catch (error) {
        console.error('Error requesting user permission:', error);
        setAuthStatus(null);
      }
    };

    fetchUserPermission();
  }, []);

  return authStatus;
};
