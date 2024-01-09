import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { getLoginStatus } from '../redux/login/login.selector';
import { useAppSelector } from '../redux/reduxStore';
import { AuthStack } from './AuthStack';
import { AppTabs } from './BottomTabs';

export const MainNavigator = () => {
  const loginStatus = useAppSelector(getLoginStatus);
  const isUserLoggedIn = loginStatus;
  return <NavigationContainer>{isUserLoggedIn ? <AppTabs /> : <AuthStack />}</NavigationContainer>;
};
