export const SET_IS_AUTH = "SET_IS_AUTH";
export const SET_CALENDAR_DATA = "SET_CALENDAR_DATA";
export const READ_CALENDAR_DATA = "READ_CALENDAR_DATA";
export const LOGIN_WITH_EMAIL = "LOGIN_WITH_EMAIL";
export const SIGN_OUT = "SIGN_OUT";

export const REGISTRATION_WITH_EMAIL = "REGISTRATION_WITH_EMAIL";
export const WRITE_TO_DB = "WRITE_TO_DB";

export const setIsAuth = (payload: any) => ({
  type: SET_IS_AUTH,
  payload,
});
export const setCalendarData = (payload: any) => ({
  type: SET_CALENDAR_DATA,
  payload,
});
export const loginWithEmail = (payload: any) => ({
  type: LOGIN_WITH_EMAIL,
  email: payload.email,
  password: payload.password,
});
export const signOut = () => ({
  type: SIGN_OUT,
});

export const registrationWithEmail = (payload: any) => ({
  type: REGISTRATION_WITH_EMAIL,
  email: payload.email,
  password: payload.password,
  userName: payload.userName,
});
export const writeTaskToDB = (payload: any) => ({
  type: WRITE_TO_DB,
  user: payload.user,
  dbcell: payload.dbcell,
});
export const readCalendarData = (payload: any) => ({
  type: READ_CALENDAR_DATA,
  user: payload,
});
