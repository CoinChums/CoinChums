import { create } from 'zustand';
import { SCREEN_STATE } from '../../constants/enums';
import { UserPayload } from '../../screens/Authentication/types';
import { handleLogin } from './auth.actions';
import { InitialAuthState, UseAuthStore } from './auth.types';

const initialStateData: InitialAuthState = {
  isAuthenticated: false,
  state: SCREEN_STATE.NONE,
  user: {
    id: '',
    fullName: '',
    email: '',
    couponCode: '',
    token: '',
  },
  input: {
    fullName: '',
    email: '',
    password: '',
    isFullNameEntered: false,
    showModal: false,
    couponCode: '',
    errorMessage: '',
  },
};

export const useAuth = create<UseAuthStore>((set, get) => ({
  ...initialStateData,
  userDetails: () => get().user,
  setUserDetails: (user: UserPayload) => handleLogin(user, set),

  setCouponCode: (couponCode: string) =>
    set(state => ({
      ...state,
      user: {
        ...state.user,
        couponCode,
      },
    })),

  inputDetails: () => get().input,

  setShowModal: (bool: boolean) =>
    set(state => ({ ...state, input: { ...state.input, showModal: bool } })),

  setInputErrorMessage: (errorMessage: string) =>
    set(state => ({ ...state, input: { ...state.input, errorMessage } })),

  setInputCoupon: (couponCode: string) =>
    set(state => ({ ...state, input: { ...state.input, couponCode } })),

  setInputFullName: (fullName: string) =>
    set(state => ({ ...state, input: { ...state.input, fullName } })),

  setInputEmail: (email: string) => set(state => ({ ...state, input: { ...state.input, email } })),

  setInputPassword: (password: string) =>
    set(state => ({ ...state, input: { ...state.input, password } })),

  setInputIsFullNameEntered: (isFullNameEntered: boolean) =>
    set(state => ({ ...state, input: { ...state.input, isFullNameEntered } })),

  logoutUser: () =>
    set(state => ({
      ...state,
      user: {
        ...state.user,
        token: '',
        couponCode: '',
      },
    })),
}));
