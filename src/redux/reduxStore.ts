import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import createSagaMiddleware from "redux-saga";

import rootReducer, {RootState} from "./rootReducer";
import {rootSaga} from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof reduxStore.dispatch;
export type AppState = ReturnType<typeof reduxStore.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default reduxStore;
