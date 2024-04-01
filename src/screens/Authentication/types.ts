export type TUserState = {
  fullName: string;
  email: string;
  password: string;
  isFullNameEntered: boolean;
  showModal: boolean;
  couponCode: string;
  errorMessage: string;
};

export type UserPayload = {
  name: string;
  email: string;
  _id: string;
  couponId: string;
  encodedToken: string;
};
