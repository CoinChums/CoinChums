import { AUTH_ACTIONS } from '../../constants/enums';
import { Action, TUserState } from './types';

export const initialState: TUserState = {
  fullName: '',
  email: '',
  password: '',
  isFullNameEntered: false,
  showModal: false,
  couponCode: '',
};

export const reducer = (state: TUserState, action: Action): TUserState => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_FULL_NAME:
      return { ...state, fullName: action.payload };
    case AUTH_ACTIONS.SET_EMAIL:
      return { ...state, email: action.payload };
    case AUTH_ACTIONS.SET_PASSWORD:
      return { ...state, password: action.payload };
    case AUTH_ACTIONS.SET_IS_FULL_NAME_ENTERED:
      return { ...state, isFullNameEntered: action.payload };
    case AUTH_ACTIONS.SHOW_MODAL:
      return { ...state, showModal: action.payload };
    case AUTH_ACTIONS.COUPON_CODE:
      return { ...state, couponCode: action.payload };
    default:
      return state;
  }
};
