export const loginSagaActions = {
  LOGIN_USER: "LOGIN_USER",
};

export const loginAction = {
  loginUser: () => {
    return {type: loginSagaActions.LOGIN_USER};
  },
};
