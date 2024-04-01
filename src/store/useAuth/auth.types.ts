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

export type UserInput = {
  fullName: string;
  email: string;
  password: string;
  isFullNameEntered: boolean;
  showModal: boolean;
  couponCode: string;
  errorMessage: string;
};

export type InitialAuthState = {
  isAuthenticated: boolean;
  state: SCREEN_STATE;
  user: UserRole;
  input: UserInput;
};

export type GetLoggedInUser = () => UserRole | undefined;

export type UseAuthStore = InitialAuthState & {
  userDetails: GetLoggedInUser;
  setUserDetails: (user: UserPayload) => Promise<void>;
  couponCode: () => void;
  setCouponCode: (couponCode: string) => void;
  logoutUser: () => void;
};
