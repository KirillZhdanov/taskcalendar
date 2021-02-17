import { all } from "redux-saga/effects";
import { authWatcher } from "./authSaga";
import { registrationWatcher } from "./registrationSaga";
import { writeToDBWatcher, readFromDBWatcher } from "./dbSaga";

export function* rootWatcher() {
  yield all([
    authWatcher(),
    registrationWatcher(),
    writeToDBWatcher(),
    readFromDBWatcher(),
  ]);
}
