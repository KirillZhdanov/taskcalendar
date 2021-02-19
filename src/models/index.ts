export type LoginEmail = {
  email: string;
  password: string;
};
export type RegistrationEmail = {
  email: string;
  password: string;
  userName?: string;
};
export type WriteTask = {
  user: string;
  dbcell: {};
};
export type ReadTasks = {
  user: string;
};
export type AddNewTask = {
  taskDate: string;
  hours: string;
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
export type Task = {
  currentDate: string;
  hours: number;
};

export type CalendarState = {
  tasks: Task[];
};
export type CalendarAction = {
  type: string;
  payload: Task[];
};
export interface BgStyled {
  imageUrl: string;
}

export interface ProtectedRoute {
  exact?: boolean;
  path: string;
  component: () => JSX.Element;
}
