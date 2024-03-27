import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SCREEN_STATE } from '../../constants/enums';
import { LoginPayload, TLoginState } from './types';

const initialStateData: TLoginState = {
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

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: initialStateData,
  reducers: {
    loginLoading: (state: TLoginState) => {
      state.state = SCREEN_STATE.LOADING;
    },
    loginSuccess: (state: TLoginState, action: PayloadAction<LoginPayload>) => {
      state.loggedInUserDetails.fullName = action.payload.user.fullName!;
      state.loggedInUserDetails.email = action.payload.user.email;
      state.loggedInUserDetails.gender = action.payload.user.gender;
      state.loggedInUserDetails.phone = action.payload.user.phone;
      state.isUserLoggedIn = action.payload.allowLogin;
      state.state = SCREEN_STATE.NONE;
    },
    loginFailed: (state: TLoginState) => {
      state.state = SCREEN_STATE.ERROR;
    },
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
