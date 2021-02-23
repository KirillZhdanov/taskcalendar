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
