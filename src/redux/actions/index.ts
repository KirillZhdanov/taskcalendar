export const SET_IS_AUTH = "SET_IS_AUTH";

export const LOGIN_WITH_EMAIL = "LOGIN_WITH_EMAIL";

export const REGISTRATION_WITH_EMAIL = "REGISTRATION_WITH_EMAIL";

export const setIsAuth = (payload: any) => ({
  type: SET_IS_AUTH,
  payload,
});

export const loginWithEmail = (payload: any) => ({
  type: LOGIN_WITH_EMAIL,
  email: payload.email,
  password: payload.password,
});

export const registrationWithEmail = (payload: any) => ({
  type: REGISTRATION_WITH_EMAIL,
  email: payload.email,
  password: payload.password,
});
