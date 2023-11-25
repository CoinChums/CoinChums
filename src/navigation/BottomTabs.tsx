import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, {FC} from "react";
import {APP_ROUTES} from "../types/enums";
import {NavigationParams} from "../types/types";
import {HomeStack, ProfileStack} from "./AppStack";

const Tab = createBottomTabNavigator<NavigationParams>();

export const AppTabs: FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={APP_ROUTES.homeStack} component={HomeStack} />
      <Tab.Screen name={APP_ROUTES.profileStack} component={ProfileStack} />
    </Tab.Navigator>
  );
};
