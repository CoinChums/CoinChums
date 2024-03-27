import { GENDER, SCREEN_STATE } from '../../constants/enums';
import { UserRole } from '../../types/models/user';

export type LoggedInUserDetails = {
  id: string;
  fullName?: string;
  email: string;
  phone?: string;
  icon?: string;
  gender?: GENDER;
  couponCode: string;
};

export type TLoginState = {
  isUserLoggedIn: boolean;
  state: SCREEN_STATE;
  loggedInUserDetails: LoggedInUserDetails;
};

export type LoginPayload = {
  user: UserRole;
  allowLogin: boolean;
};
