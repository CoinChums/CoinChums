import { AUTH_ACTIONS } from '../../constants/enums';

export type TUserState = {
  fullName: string;
  email: string;
  password: string;
  isFullNameEntered: boolean;
  showModal: boolean;
  couponCode: string;
};

export type Action =
  | { type: AUTH_ACTIONS.SET_FULL_NAME; payload: string }
  | { type: AUTH_ACTIONS.SET_EMAIL; payload: string }
  | { type: AUTH_ACTIONS.SET_PASSWORD; payload: string }
  | { type: AUTH_ACTIONS.SET_IS_FULL_NAME_ENTERED; payload: boolean }
  | { type: AUTH_ACTIONS.SHOW_MODAL; payload: boolean }
  | { type: AUTH_ACTIONS.COUPON_CODE; payload: string };
