import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { SVGImage } from '../components';
import { APP_LABELS, APP_ROUTES } from '../constants/enums';
import { Settings } from '../screens';
import { theme } from '../themes';
import { NavigationParams } from '../types/types';
import dimensions from '../utils/dimensions';
import { APP_IMAGES } from '../utils/imageMapper';
import { HomeStack, ProfileStack } from './AppStack';

const Tab = createBottomTabNavigator<NavigationParams>();

const renderTabBarIcon = (assetSrc: string) => () => (
  <SVGImage assetSrc={assetSrc} width={dimensions.viewWidth(35)} height={dimensions.viewWidth(35)} />
);

const tabBarOptions = {
  headerShown: false,
  tabBarStyle: {
    height: dimensions.viewHeight(66),
    backgroundColor: theme.palette.black.light,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingBottom: dimensions.viewHeight(10),
    paddingTop: dimensions.viewHeight(10),
  },
};

const tabConfig = {
  tabBarActiveTintColor: theme.palette.primary.medium,
  tabBarLabelStyle: { fontSize: theme.typography.fontSize.small },
};

export const AppTabs: FC = () => {
  const HomeTab = {
    tabBarLabel: APP_LABELS.HOME,
    tabBarIcon: renderTabBarIcon(APP_IMAGES.home),
    ...tabConfig,
  };

  const ProfileTab = {
    tabBarLabel: APP_LABELS.PROFILE,
    tabBarIcon: renderTabBarIcon(APP_IMAGES.profile),
    ...tabConfig,
  };

  const SettingsTab = {
    tabBarLabel: APP_LABELS.SETTINGS,
    tabBarIcon: renderTabBarIcon(APP_IMAGES.settings),
    ...tabConfig,
  };

  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen name={APP_ROUTES.homeStack} component={HomeStack} options={HomeTab} />
      <Tab.Screen name={APP_ROUTES.profileStack} component={ProfileStack} options={ProfileTab} />
      <Tab.Screen name={APP_ROUTES.settings} component={Settings} options={SettingsTab} />
    </Tab.Navigator>
  );
};
