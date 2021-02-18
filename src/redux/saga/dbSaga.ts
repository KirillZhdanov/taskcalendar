import { put, takeEvery, call } from "redux-saga/effects";
import { ReadDBWorker, WriteDBWorker } from "../../models";
import { WRITE_TO_DB, setCalendarData, READ_CALENDAR_DATA } from "../actions";
import rsf from "../rsf";

function* writeToDBWorker({ user, dbcell }: WriteDBWorker) {
  try {
    yield call(rsf.database.create, `tasks/${user}`, dbcell);
    const read = yield call(rsf.database.read, `tasks/${user}`);
    yield put(setCalendarData(read));
  } catch (error) {
    throw new Error(`Registration failed: ${error}`);
  }
}
function* readFromDBWorker({ user }: ReadDBWorker) {
  try {
    const read = yield call(rsf.database.read, `tasks/${user}`);
    console.log("READ:", read);
    yield put(setCalendarData(read));
  } catch (error) {
    throw new Error(`Registration failed: ${error}`);
  }
}

export function* readFromDBWatcher() {
  yield takeEvery(READ_CALENDAR_DATA, readFromDBWorker);
}
export function* writeToDBWatcher() {
  yield takeEvery(WRITE_TO_DB, writeToDBWorker);
}
