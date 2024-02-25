import { GENDER, SCREEN_STATE } from '../../constants/enums';

export type UserRole = {
  id: string;
  name: string;
  gender?: GENDER;
  email: string;
  phone: string;
};

export type LoginPayload = {
  user: UserRole;
  allowLogin: boolean;
};

export type InitialAuthState = {
  isUserLoggedIn: boolean;
  state: SCREEN_STATE;
  isLoggedOut: boolean;
  loggedInUserDetails?: UserRole;
};

export type UseAuthStore = InitialAuthState & {
  loginLoading: () => void;
  loginSuccess: (payload: LoginPayload) => void;
  loginFailed: () => void;
};
