import { call, put, takeLatest } from 'redux-saga/effects';
import { GENDER } from '../../../constants/enums';
import { loginActions } from '../login.store';
import { LoginPayload } from '../types';
import { loginSagaActions } from './login.actions';

const onLogin = () => {
  return {
    allowLogin: true,
    userId: 'test-user-07',
    userName: 'CoinChums',
    gender: GENDER.MALE,
  };
};

function* login() {
  try {
    yield put(loginActions.loginLoading());
    const loginStatus: LoginPayload = yield call(onLogin);
    if (loginStatus.allowLogin) {
      yield put(loginActions.loginSuccess(loginStatus));
    } else {
      yield put(loginActions.loginFailed());
    }
  } catch (err) {
    yield put(loginActions.loginFailed());
    console.error('error', err);
  }
}

export default [takeLatest(loginSagaActions.LOGIN_USER, login)];
