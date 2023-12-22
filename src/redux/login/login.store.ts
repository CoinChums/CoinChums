import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SCREEN_STATE} from "../../constants/enums";
import {LoginPayload, TLoginState} from "./types";

const initialStateData: TLoginState = {
  isUserLoggedIn: false,
  state: SCREEN_STATE.NONE,
  isLoggedOut: false,
  loggedInUserDetails: {
    name: "",
    email: "",
    mobileNumber: 0,
  },
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initialStateData,
  reducers: {
    loginLoading: (state: TLoginState) => {
      state.state = SCREEN_STATE.LOADING;
    },
    loginSuccess: (state: TLoginState, action: PayloadAction<LoginPayload>) => {
      state.loggedInUserDetails.name = action.payload.userName;
      state.loggedInUserDetails.email = action.payload.userId;
      state.loggedInUserDetails.gender = action.payload.gender;
      state.loggedInUserDetails.mobileNumber = action.payload.mobileNumber;
      state.isUserLoggedIn = action.payload.allowLogin;
      state.isLoggedOut = false;
      state.state = SCREEN_STATE.NONE;
    },
    loginFailed: (state: TLoginState) => {
      state.state = SCREEN_STATE.ERROR;
    },
  },
});

export const {actions: loginActions, reducer: loginReducer} = loginSlice;
