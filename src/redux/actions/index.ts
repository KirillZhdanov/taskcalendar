import {
  LoginEmailPayload,
  TasksReaderPayload,
  RegistrationEmailPayload,
  TaskWriterPayload,
} from "../../models";

export const SET_CALENDAR_DATA = "SET_CALENDAR_DATA";
export const SET_ERROR = "SET_ERROR";
export const READ_CALENDAR_DATA = "READ_CALENDAR_DATA";
export const LOGIN_WITH_EMAIL = "LOGIN_WITH_EMAIL";
export const SIGN_OUT = "SIGN_OUT";
export const REGISTRATION_WITH_EMAIL = "REGISTRATION_WITH_EMAIL";
export const WRITE_TO_DB = "WRITE_TO_DB";

export const setCalendarData = (payload: {}) => ({
  type: SET_CALENDAR_DATA,
  payload,
});
export const setError = (payload: string) => ({
  type: SET_ERROR,
  payload,
});
export const loginWithEmail = (payload: LoginEmailPayload) => ({
  type: LOGIN_WITH_EMAIL,
  email: payload.email,
  password: payload.password,
});
export const signOut = () => ({
  type: SIGN_OUT,
});

export const registrationWithEmail = (payload: RegistrationEmailPayload) => ({
  type: REGISTRATION_WITH_EMAIL,
  email: payload.email,
  password: payload.password,
  userName: payload.userName,
});
export const writeTaskToDB = (payload: TaskWriterPayload) => ({
  type: WRITE_TO_DB,
  user: payload.user,
  dbcell: payload.dbcell,
});
export const readCalendarData = (payload: TasksReaderPayload) => ({
  type: READ_CALENDAR_DATA,
  user: payload,
});
