import { create } from 'zustand';
import { SCREEN_STATE } from '../../constants/enums';
import { UserPayload } from '../../screens/Authentication/types';
import { handleLogin } from './auth.actions';
import { InitialAuthState, UseAuthStore } from './auth.types';

const initialStateData: InitialAuthState = {
  isAuthenticated: false,
  state: SCREEN_STATE.NONE,
  loggedInUserDetails: {
    id: '',
    fullName: '',
    email: '',
  },
};

export const useAuth = create<UseAuthStore>((set, get) => {
  return {
    ...initialStateData,
    getLoggedInUser: () => get().loggedInUserDetails,
    getLogInStatus: () => get().isAuthenticated,
    logoutUser: () => set({ isAuthenticated: false }),
    handleLogin: (user: UserPayload) => handleLogin(user, set),
  };
});
