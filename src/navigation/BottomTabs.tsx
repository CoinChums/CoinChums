import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, {FC} from "react";
import {APPROUTES} from "../types/enums";
import {NavigationParams} from "../types/types";
import {HomeStack, ProfileStack} from "./AppStack";

const Tab = createBottomTabNavigator<NavigationParams>();

export const AppTabs: FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={APPROUTES.homeStack} component={HomeStack} />
      <Tab.Screen name={APPROUTES.profileStack} component={ProfileStack} />
    </Tab.Navigator>
  );
};
