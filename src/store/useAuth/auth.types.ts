import { SCREEN_STATE } from '../../constants/enums';
import { UserPayload } from '../../screens/Authentication/types';
import { UserRole } from '../../types/models/user';

export type LoginPayload = {
  user: UserRole;
  allowLogin: boolean;
};

export type LogoutPayload = {
  allowLogin: boolean;
};

export type InitialAuthState = {
  isAuthenticated: boolean;
  state: SCREEN_STATE;
  loggedInUserDetails: UserRole;
};

export type GetLoggedInUser = () => UserRole | undefined;

export type UseAuthStore = InitialAuthState & {
  getLoggedInUser: GetLoggedInUser;
  getLogInStatus: () => void;
  logoutUser: () => void;
  handleLogin: (user: UserPayload) => Promise<void>;
  setCouponCode: (couponCode: string) => void;
};
