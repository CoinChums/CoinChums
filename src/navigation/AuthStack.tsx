import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC, useEffect, useState } from 'react';
import { IndicatorView } from '../components';
import { APP_ROUTES } from '../constants/enums';
import { Launch, OnboardingComponent } from '../screens';
import { NavigationParams } from '../types/types';

const Stack = createNativeStackNavigator<NavigationParams>();

export const AuthStack: FC = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('appLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('appLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return <IndicatorView isLoading={true} />;
  }

  return (
    <Stack.Navigator screenOptions={{ animation: 'slide_from_left' }}>
      {isFirstLaunch && (
        <Stack.Screen name={APP_ROUTES.onboarding} component={OnboardingComponent} options={{ headerShown: false }} />
      )}
      <Stack.Screen
        name={APP_ROUTES.launch}
        component={Launch}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
    </Stack.Navigator>
  );
};
