import {
  LoginEmailPayload,
  RegistrationEmailPayload,
  TaskWriterPayload,
  TasksReaderPayload,
  CalendarAction,
  RegistrationEmailWorker,
  ReadDBWorker,
  WriteDBWorker,
  AuthEmailWorker,
} from "./actions";
export type {
  LoginEmailPayload,
  RegistrationEmailPayload,
  TaskWriterPayload,
  TasksReaderPayload,
  CalendarAction,
  RegistrationEmailWorker,
  ReadDBWorker,
  WriteDBWorker,
  AuthEmailWorker,
};

export type AddNewTaskData = {
  taskDate: string;
  hours: string;
};

export type Task = {
  currentDate: string;
  hours: number;
};

export type CalendarState = {
  tasks: Task[];
};

export interface BgStyled {
  imageUrl: string;
}

export interface ProtectedRoute {
  exact?: boolean;
  path: string;
  component: () => JSX.Element;
}
