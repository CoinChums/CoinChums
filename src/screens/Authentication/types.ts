export type State = {
  fullName: string;
  email: string;
  password: string;
  isFullNameEntered: boolean;
};

export type Action =
  | { type: 'SET_FULL_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'SET_IS_FULL_NAME_ENTERED'; payload: boolean };
