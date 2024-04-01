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
  setCouponCode: (couponCode: string) => void;
  inputDetails: () => UserInput;
  setShowModal: (bool: boolean) => void;
  setInputErrorMessage: (errorMessage: string) => void;
  setInputCoupon: (couponCode: string) => void;
  setInputFullName: (fullName: string) => void;
  setInputEmail: (email: string) => void;
  setInputPassword: (password: string) => void;
  setInputIsFullNameEntered: (isFullNameEntered: boolean) => void;
  logoutUser: () => void;
};
