import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {AuthStack} from "./AuthStack";
import {AppTabs} from "./BottomTabs";
import {useAppSelector} from "../redux/reduxStore";
import {getLoginStatus} from "../redux/login/login.selector";

export const MainNavigator = () => {
  const loginStatus = useAppSelector(getLoginStatus);
  const isUserLoggedIn = loginStatus;
  return <NavigationContainer>{isUserLoggedIn ? <AppTabs /> : <AuthStack />}</NavigationContainer>;
};
