import { Task } from "./";
export type LoginEmailPayload = {
  email: string;
  password: string;
};
export type RegistrationEmailPayload = {
  email: string;
  password: string;
  userName?: string;
};
export type TaskWriterPayload = {
  user: string;
  dbcell: {};
};
export type TasksReaderPayload = {
  user: string;
};
export type CalendarAction = {
  type: string;
  payload: Task[];
};
export type RegistrationEmailWorker = {
  type: "REGISTRATION_WITH_EMAIL";
  email: string;
  password: string;
  userName?: string;
};
export type ReadDBWorker = {
  type: "READ_CALENDAR_DATA";
  user: string;
};
export type WriteDBWorker = {
  type: "WRITE_TO_DB";
  user: string;
  dbcell: {};
};
export type AuthEmailWorker = {
  type: "LOGIN_WITH_EMAIL";
  email: string;
  password: string;
  userName?: string;
};
