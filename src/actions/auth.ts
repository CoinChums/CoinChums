import { GENDER } from '../constants/enums';
import { UserRole } from '../store/useAuth/useAuth.types';

export const AuthActions = {
  login: async (): Promise<UserRole> => {
    return {
      id: '1337',
      name: 'CoinChums Admin',
      email: 'coinchums@gmail.com',
      phone: '+91-8171694580',
      gender: GENDER.MALE,
    };
  },
};
