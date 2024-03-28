import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { ASYNC_STORAGE, SCREEN_STATE } from '../../constants/enums';
import { TUserState } from '../../screens/Authentication/types';
import { generateRandomId } from '../../utils/helper';
import { InitialAuthState, UseAuthStore } from './useAuth.types';

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
export const useAuth = create<UseAuthStore>((set, get) => {
  const signInUser = async () => {
    try {
      const { loggedInUserDetails } = get();
      if (!loggedInUserDetails?.id) return;
      set({
        loggedInUserDetails: loggedInUserDetails,
        isUserLoggedIn: true,
        state: SCREEN_STATE.NONE,
      });
      await AsyncStorage.setItem(ASYNC_STORAGE.ACCESS_TOKEN, loggedInUserDetails.id);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    ...initialStateData,
    getLoggedInUser: () => {
      return get().loggedInUserDetails;
    },
    logoutUser: () => {
      set({ isUserLoggedIn: false });
    },
    signInUser,
    handleLogin: async (user: TUserState) => {
      try {
        set({ state: SCREEN_STATE.LOADING });
        if (!user.email || !user.password || !user.couponCode) {
          throw new Error('Email, password, and coupon code are required.');
        }

        const userId = generateRandomId();
        const userDetails = {
          id: userId,
          email: user.email,
          password: user.password,
          couponCode: user.couponCode,
        };

        set({
          loggedInUserDetails: userDetails,
          isUserLoggedIn: true,
          state: SCREEN_STATE.NONE,
        });

        await signInUser();
      } catch (err) {
        set({ state: SCREEN_STATE.ERROR });
        console.error(err);
      }
    },
  };
});
