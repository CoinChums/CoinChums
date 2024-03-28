import { SCREEN_STATE } from '../../constants/enums';
import { TUserState } from '../../screens/Authentication/types';
import { UserRole } from '../../types/models/user';

export type LoginPayload = {
  user: UserRole;
  allowLogin: boolean;
};

export type LogoutPayload = {
  allowLogin: boolean;
};

export type InitialAuthState = {
  isUserLoggedIn: boolean;
  state: SCREEN_STATE;
  loggedInUserDetails: UserRole;
};

export type GetLoggedInUser = () => UserRole | undefined;

export type UseAuthStore = InitialAuthState & {
  logoutUser: () => void;
  signInUser: () => Promise<void>;
  handleLogin: (user: TUserState) => Promise<void>;
  getLoggedInUser: GetLoggedInUser;
};
