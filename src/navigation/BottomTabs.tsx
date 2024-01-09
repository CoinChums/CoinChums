import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { SVGImage } from '../components';
import { APP_LABELS, APP_ROUTES } from '../constants/enums';
import { Settings } from '../screens';
import { theme } from '../themes';
import { spacing } from '../themes/spacing';
import { NavigationParams } from '../types/types';
import dimensions from '../utils/dimensions';
import { APP_IMAGES } from '../utils/imageMapper';
import { HomeStack, ProfileStack } from './AppStack';

const Tab = createBottomTabNavigator<NavigationParams>();

const renderTabBarIcon = (assetSrc: string, focused: boolean) => () => (
  <SVGImage
    assetSrc={assetSrc}
    width={dimensions.viewWidth(22)}
    height={dimensions.viewWidth(22)}
    fill={focused ? theme.palette.primary.medium : theme.palette.secondary.dark}
  />
);

const tabBarOptions = {
  headerShown: false,
  tabBarStyle: {
    minHeight: dimensions.viewHeight(70),
    backgroundColor: theme.palette.white.dark,
    borderTopWidth: 1,
    paddingTop: spacing.smallHeight,
    paddingBottom: spacing.smallHeight,
  },
};

const tabConfig = {
  tabBarActiveTintColor: theme.palette.primary.medium,
  tabBarInactiveTintColor: theme.palette.secondary.dark,
  tabBarLabelStyle: { fontSize: theme.typography.fontSize.small },
};

export const AppTabs: FC = () => {
  const renderTabBarIconWithFocus =
    (assetSrc: string) =>
    ({ focused }: { focused: boolean }) => {
      return renderTabBarIcon(assetSrc, focused)();
    };

  const HomeTab = {
    tabBarLabel: APP_LABELS.HOME,
    tabBarIcon: renderTabBarIconWithFocus(APP_IMAGES.home),
    ...tabConfig,
  };

  const ProfileTab = {
    tabBarLabel: APP_LABELS.PROFILE,
    tabBarIcon: renderTabBarIconWithFocus(APP_IMAGES.profile),
    ...tabConfig,
  };

  const SettingsTab = {
    tabBarLabel: APP_LABELS.SETTINGS,
    tabBarIcon: renderTabBarIconWithFocus(APP_IMAGES.settings),
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
