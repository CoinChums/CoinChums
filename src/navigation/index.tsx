import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {AuthStack} from "./AuthStack";
import {AppTabs} from "./BottomTabs";

export const MainNavigator = () => {
  const isUserLoggedIn = false;
  return <NavigationContainer>{isUserLoggedIn ? <AppTabs /> : <AuthStack />}</NavigationContainer>;
};
