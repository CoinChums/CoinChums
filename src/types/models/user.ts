import { GENDER } from '../../constants/enums';

export type UserRole = {
  id: string;
  gender?: GENDER;
  fullName?: string;
  password?: string;
  phone?: string;
  email: string;
  couponCode: string;
};
