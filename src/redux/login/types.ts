import {GENDER, SCREEN_STATE} from "../../constants/enums";

export type LoggedInUserDetails = {
  name: string;
  email: string;
  mobileNumber: number;
  icon?: string;
  gender?: GENDER;
};

export type LoginPayload = {
  allowLogin: boolean;
  userId: string;
  userName: string;
  gender?: GENDER;
  mobileNumber: number;
};

export type TLoginState = {
  isUserLoggedIn: boolean;
  state: SCREEN_STATE;
  isLoggedOut: boolean;
  loggedInUserDetails: LoggedInUserDetails;
};
