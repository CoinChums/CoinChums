import {AppState} from "../reduxStore";

export const getLoginStatus = (state: AppState) => state.login.isUserLoggedIn;
