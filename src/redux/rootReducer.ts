import {combineReducers} from "@reduxjs/toolkit";

import {loginReducer} from "./login/login.store";

const rootReducer = combineReducers({
  login: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
