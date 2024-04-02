import { create } from 'zustand';
import { SCREEN_STATE } from '../../constants/enums';
import { UserPayload } from '../../screens/Authentication/types';
import { handleLogin } from './auth.actions';
import { AuthInitialState, AuthStoreContext } from './auth.types';

const initialStateData: AuthInitialState = {
  isAuthenticated: false,
  state: SCREEN_STATE.NONE,
  errorMessage: '',
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
  },
};

export const useAuth = create<AuthStoreContext>((set, get) => ({
  ...initialStateData,
  userDetails: () => get().user,
  setUserDetails: (user: UserPayload) => handleLogin(user, set),

  setErrorMessage: (errorMessage: string) => set(state => ({ ...state, errorMessage })),

  setScreenState: (screenState: SCREEN_STATE) => set(state => ({ ...state, state: screenState })),

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

  setInputCoupon: (couponCode: string) =>
    set(state => ({ ...state, input: { ...state.input, couponCode } })),

  setInputFullName: (fullName: string) =>
    set(state => ({ ...state, input: { ...state.input, fullName } })),

  setInputEmail: (email: string) => set(state => ({ ...state, input: { ...state.input, email } })),

  setInputPassword: (password: string) =>
    set(state => ({ ...state, input: { ...state.input, password } })),

  setInputIsFullNameEntered: (isFullNameEntered: boolean) =>
    set(state => ({ ...state, input: { ...state.input, isFullNameEntered } })),

  setLogout: () => set(initialStateData),
}));
