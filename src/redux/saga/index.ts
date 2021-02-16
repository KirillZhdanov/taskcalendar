import { all } from "redux-saga/effects";
import { authWatcher } from "./authSaga";
import { registrationWatcher } from "./registrationSaga";

export function* rootWatcher() {
  yield all([authWatcher(), registrationWatcher()]);
}
