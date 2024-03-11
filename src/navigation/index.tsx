import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthStack } from './AuthStack';
import { AppTabs } from './BottomTabs';
import { useAuth } from '../store/useAuth/useAuth';

export const MainNavigator = () => {
  const { isUserLoggedIn } = useAuth();
  return <NavigationContainer>{isUserLoggedIn ? <AppTabs /> : <AuthStack />}</NavigationContainer>;
};
