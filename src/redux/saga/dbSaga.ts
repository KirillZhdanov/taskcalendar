import { put, takeEvery, call } from "redux-saga/effects";
import { ReadDBWorker, WriteDBWorker, DBResponse } from "../../models";
import {
  WRITE_TO_DB,
  setCalendarData,
  READ_CALENDAR_DATA,
  setError,
} from "../actions";
import rsf from "../rsf";

function* writeToDBWorker({ user, dbcell }: WriteDBWorker) {
  try {
    yield call(rsf.database.create, `tasks/${user}`, dbcell);
    const read: DBResponse = yield call(rsf.database.read, `tasks/${user}`);

    yield put(setCalendarData(Object.values(read)));
    yield put(setError(""));
  } catch (error) {
    yield put(setError(error.message));
  }
}
function* readFromDBWorker({ user }: ReadDBWorker) {
  try {
    const read: DBResponse = yield call(rsf.database.read, `tasks/${user}`);
    yield put(setCalendarData(Object.values(read)));
    yield put(setError(""));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export function* readFromDBWatcher() {
  yield takeEvery(READ_CALENDAR_DATA, readFromDBWorker);
}
export function* writeToDBWatcher() {
  yield takeEvery(WRITE_TO_DB, writeToDBWorker);
}
