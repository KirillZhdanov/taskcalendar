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
