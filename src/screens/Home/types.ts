import { NavigationProp } from '@react-navigation/native';

export type NavigationParams = {
  Home: undefined;
  Details: undefined;
  HomeStack: undefined;
  Profile: undefined;
  ProfileStack: undefined;
};

export type THome = {
  navigation: NavigationProp<NavigationParams>;
};
