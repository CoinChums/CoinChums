import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React, {FC} from "react";
import {APP_ROUTES} from "../constants/enums";
import {Details, Home, Profile} from "../screens";
import {NavigationParams} from "../types/types";

const Stack = createNativeStackNavigator<NavigationParams>();

export const HomeStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{animation: "slide_from_left"}}>
      <Stack.Screen name={APP_ROUTES.home} component={Home} options={{animation: "slide_from_right"}} />
      <Stack.Screen name={APP_ROUTES.details} component={Details} options={{animation: "slide_from_right"}} />
    </Stack.Navigator>
  );
};

export const ProfileStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{animation: "slide_from_left"}}>
      <Stack.Screen name={APP_ROUTES.profile} component={Profile} />
    </Stack.Navigator>
  );
};

export const AppStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={APP_ROUTES.homeStack} component={HomeStack} />
      <Stack.Screen name={APP_ROUTES.profileStack} component={ProfileStack} />
    </Stack.Navigator>
  );
};
