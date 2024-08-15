import { UserPayload } from '../../screens/Authentication/types';
import { setTokenAsyncStorage } from '../../services/auth.service';
import { AuthInitialState } from './auth.types';

export const handleLogin = async (
  user: UserPayload,
  set: (state: Partial<AuthInitialState>) => void,
) => {
  try {
    if (!user || !user.email) {
      throw new Error('Email, password, and coupon code are required.');
    }

    const { email, name, _id, couponId, encodedToken, groupIds } = user;

    const userDetails = {
      id: _id || '',
      email,
      fullName: name || '',
      couponCode: couponId || '',
      token: encodedToken || '',
      groupIds: groupIds,
    };

    await setTokenAsyncStorage(encodedToken || '');

    set({
      user: userDetails,
      isAuthenticated: true,
    });
  } catch (err) {
    console.error(err);
  }
};
