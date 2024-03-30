import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { IndicatorView } from '../components';
import { ASYNC_STORAGE, CONSTANTS, TOAST_TYPE } from '../constants/enums';
import { useAuth } from '../store/useAuth/auth.store';
import { loader } from '../utils/helper';
import { AuthStack } from './AuthStack';
import { AppTabs } from './BottomTabs';

export const MainNavigator = () => {
  const { loggedInUserDetails } = useAuth();
  const toast = useToast();
  const [authenticationState, setAuthenticationState] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthenticationStatus = async () => {
      try {
        const accessToken = await AsyncStorage.getItem(ASYNC_STORAGE.ACCESS_TOKEN);
        const couponCode = await AsyncStorage.getItem(ASYNC_STORAGE.COUPON);
        const isAuthenticated = accessToken && couponCode;
        setAuthenticationState(!!isAuthenticated);
      } catch {
        toast.show(CONSTANTS.GENERIC_ERROR_MESSAGE, { type: TOAST_TYPE.DANGER });
      } finally {
        setLoading(false);
      }
    };

    fetchAuthenticationStatus();
  }, [loggedInUserDetails.token, loggedInUserDetails.couponCode]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <IndicatorView isLoading={true} ref={loader} />
      </View>
    );
  }

  return (
    <NavigationContainer>{authenticationState ? <AppTabs /> : <AuthStack />}</NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
