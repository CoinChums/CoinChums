import { create } from 'zustand';
import { SCREEN_STATE } from '../../constants/enums';
import { LoginPayload, UseAuthStore, InitialAuthState } from './useAuth.types';

const initialStateData: InitialAuthState = {
  isUserLoggedIn: false,
  state: SCREEN_STATE.NONE,
  isLoggedOut: false,
  loggedInUserDetails: {
    id: '',
    name: '',
    email: '',
    phone: '0',
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
      isLoggedOut: false,
      state: SCREEN_STATE.NONE,
    });
  },
  loginFailed: () => set({ state: SCREEN_STATE.ERROR }),
}));
