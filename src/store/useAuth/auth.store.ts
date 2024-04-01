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

  couponCode: () => get().user.couponCode,
  setCouponCode: (couponCode: string) =>
    set(state => ({
      ...state,
      user: {
        ...state.user,
        couponCode,
      },
    })),

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
