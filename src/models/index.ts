export interface LoginEmail {
  email: string;
  password: string;
}
export interface RegistrationEmail {
  email: string;
  password: string;
  userName?: string;
}
export interface WriteTask {
  user: string;
  dbcell: {};
}
export interface ReadTasks {
  user: string;
}
export interface AddNewTask {
  taskDate: string;
  hours: string;
}
export interface RegistrationEmailWorker {
  type: "REGISTRATION_WITH_EMAIL";
  email: string;
  password: string;
  userName?: string;
}
export interface ReadDBWorker {
  type: "READ_CALENDAR_DATA";
  user: string;
}
export interface WriteDBWorker {
  type: "WRITE_TO_DB";
  user: string;
  dbcell: {};
}
export interface AuthEmailWorker {
  type: "LOGIN_WITH_EMAIL";
  email: string;
  password: string;
  userName?: string;
}
export interface Task {
  currentDate: string;
  hours: number;
}
export interface CalendarState {
  tasks: {
    currentDate?: string;
    hours?: number;
  };
}
export interface CalendarAction {
  type: string;
  payload: {};
}
