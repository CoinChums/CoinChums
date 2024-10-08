import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { IndicatorView } from '../components';
import { APP_ROUTES } from '../constants/enums';
import { useAppFirstLaunch } from '../hooks';
import { Launch, OnboardingComponent, Signin, Signup } from '../screens';
import { NavigationParams } from '../types/types';

const Stack = createNativeStackNavigator<NavigationParams>();

export const AuthStack: FC = () => {
  const isFirstLaunch = useAppFirstLaunch();

  if (isFirstLaunch === null) {
    return <IndicatorView isLoading={true} />;
  }

  return (
    <Stack.Navigator>
      {isFirstLaunch && (
        <Stack.Screen
          name={APP_ROUTES.onboarding}
          component={OnboardingComponent}
          options={{ headerShown: false }}
        />
      )}
      <Stack.Screen
        name={APP_ROUTES.launch}
        component={Launch}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name={APP_ROUTES.signup}
        component={Signup}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name={APP_ROUTES.signin}
        component={Signin}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
    </Stack.Navigator>
  );
};
