import { SCREEN_STATE } from '../../constants/enums';
import { UserPayload } from '../../screens/Authentication/types';
import { UserRole } from '../../types/models/user';

export type UserProfile = {
  fullName: string;
  email: string;
  password: string;
  isFullNameEntered: boolean;
  showModal: boolean;
  couponCode: string;
};

export type AuthStateBase = {
  isAuthenticated: boolean;
  state: SCREEN_STATE;
  user: UserRole;
  errorMessage: string;
};

export type LoginPayload = UserProfile & {
  user: UserRole;
  allowLogin: boolean;
};

export type LogoutPayload = {
  allowLogin: boolean;
};

export type UserInput = UserProfile;

export type AuthInitialState = AuthStateBase & {
  input: UserInput;
};

export type GetLoggedInUser = () => UserRole | undefined;

export type AuthActionTypes = {
  userDetails: GetLoggedInUser;
  setUserDetails: (user: UserPayload) => Promise<void>;
  setErrorMessage: (errorMessage: string) => void;
  setScreenState: (screenState: SCREEN_STATE) => void;
  setCouponCode: (couponCode: string) => void;
  inputDetails: () => UserInput;
  setShowModal: (bool: boolean) => void;
  setInputCoupon: (couponCode: string) => void;
  setInputFullName: (fullName: string) => void;
  setInputEmail: (email: string) => void;
  setInputPassword: (password: string) => void;
  setInputIsFullNameEntered: (isFullNameEntered: boolean) => void;
  setLogout: () => void;
};

export type AuthStoreContext = AuthInitialState & AuthActionTypes;
