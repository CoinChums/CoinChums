import { GENDER } from '../../constants/enums';

export type UserRole = {
  id: string;
  name: string;
  gender?: GENDER;
  email: string;
  phone: string;
};
