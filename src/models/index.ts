import { type } from "os";
import { string } from "yup/lib/locale";
import {
  LoginEmailPayload,
  RegistrationEmailPayload,
  TaskWriterPayload,
  TasksReaderPayload,
  CalendarAction,
} from "./actions";
import {
  RegistrationEmailWorker,
  ReadDBWorker,
  WriteDBWorker,
  AuthEmailWorker,
} from "./sagas";
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
  hours: number;
};
export type AuthFormInitialValues = {
  userName: string;
  email: string;
  password: string;
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
