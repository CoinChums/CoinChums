import { create } from 'zustand';
import { SCREEN_STATE } from '../../constants/enums';
import { InitialAuthState, LoginPayload, LogoutPayload, UseAuthStore } from './useAuth.types';

const initialStateData: InitialAuthState = {
  isUserLoggedIn: false,
  state: SCREEN_STATE.NONE,
  loggedInUserDetails: {
    id: '',
    fullName: '',
    email: '',
    phone: '',
    couponCode: '',
  },
};

export const useAuth = create<UseAuthStore>((set, get) => ({
  ...initialStateData,
  loginLoading: () => {
    set({ state: SCREEN_STATE.LOADING });
  },
  loginSuccess: (payload: LoginPayload) => {
    const { user, allowLogin } = payload;
    set({
      loggedInUserDetails: user,
      isUserLoggedIn: allowLogin,
      state: SCREEN_STATE.NONE,
    });
  },
  loginFailed: () => set({ state: SCREEN_STATE.ERROR }),
  logoutUser: () => {
    set({ isUserLoggedIn: false });
  },
}));
