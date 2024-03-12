import { AUTH_ACTIONS } from '../../constants/enums';
import { Action, State } from './types';

export const initialState: State = {
  fullName: '',
  email: '',
  password: '',
  isFullNameEntered: false,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_FULL_NAME:
      return { ...state, fullName: action.payload };
    case AUTH_ACTIONS.SET_EMAIL:
      return { ...state, email: action.payload };
    case AUTH_ACTIONS.SET_PASSWORD:
      return { ...state, password: action.payload };
    case AUTH_ACTIONS.SET_IS_FULL_NAME_ENTERED:
      return { ...state, isFullNameEntered: action.payload };
    default:
      return state;
  }
};
