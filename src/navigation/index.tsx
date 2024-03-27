import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { IndicatorView } from '../components';
import { ASYNC_STORAGE, CONSTANTS, TOAST_TYPE } from '../constants/enums';
import { getLoginStatus } from '../redux/login/login.selector';
import { useAppSelector } from '../redux/reduxStore';
import { loader } from '../utils/helper';
import { AuthStack } from './AuthStack';
import { AppTabs } from './BottomTabs';

export const MainNavigator = () => {
  const loginStatus = useAppSelector(getLoginStatus);
  const toast = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const id = await AsyncStorage.getItem(ASYNC_STORAGE.ACCESS_TOKEN);
        setIsLoggedIn(!!id);
      } catch (error) {
        toast.show(CONSTANTS.GENERIC_ERROR_MESSAGE, { type: TOAST_TYPE.DANGER });
        console.error('Error retrieving access token:', error);
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, [loginStatus]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <IndicatorView isLoading={true} ref={loader} />
      </View>
    );
  }

  return <NavigationContainer>{isLoggedIn ? <AppTabs /> : <AuthStack />}</NavigationContainer>;
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
