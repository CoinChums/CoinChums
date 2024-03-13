import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ASYNC_STORAGE } from '../constants/enums';
import { useAuth } from '../store/useAuth/auth.actions';
import { AuthStack } from './AuthStack';
import { AppTabs } from './BottomTabs';

export const MainNavigator = () => {
  const { isUserLoggedIn } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const id = await AsyncStorage.getItem(ASYNC_STORAGE.ACCESS_TOKEN);
        setIsLoggedIn(!!id);
      } catch (error) {
        console.error('Error retrieving access token:', error);
      }
    };

    checkLoginStatus();
  }, [isUserLoggedIn]);

  return <NavigationContainer>{isLoggedIn ? <AppTabs /> : <AuthStack />}</NavigationContainer>;
};
