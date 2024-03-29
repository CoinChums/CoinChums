import { GENDER } from '../../constants/enums';

export type UserRole = {
  id: string;
  fullName?: string;
  gender?: GENDER;
  phone?: string;
  email: string;
  couponCode?: string;
};
