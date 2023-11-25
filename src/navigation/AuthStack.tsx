import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React, {FC} from "react";
import {Login} from "../screens/Login/Login";
import {APP_ROUTES} from "../types/enums";
import {NavigationParams} from "../types/types";

const Stack = createNativeStackNavigator<NavigationParams>();

export const AuthStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{animation: "slide_from_left"}}>
      <Stack.Screen
        name={APP_ROUTES.login}
        component={Login}
        options={{headerShown: false, animation: "slide_from_right"}}
      />
    </Stack.Navigator>
  );
};
