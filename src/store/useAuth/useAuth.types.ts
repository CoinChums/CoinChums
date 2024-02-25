import { SCREEN_STATE } from '../../constants/enums';
import { UserRole } from '../../types/models/user';

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
