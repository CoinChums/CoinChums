import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React, {FC} from "react";
import {Login} from "../screens/Login/Login";
import {APPROUTES} from "../types/enums";
import {NavigationParams} from "../types/types";

const Stack = createNativeStackNavigator<NavigationParams>();

export const AuthStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={APPROUTES.login}
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
