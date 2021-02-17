import { put, takeEvery, call } from "redux-saga/effects";
import { WRITE_TO_DB, setCalendarData, READ_CALENDAR_DATA } from "../actions";
import rsf from "../rsf";

function* writeToDBWorker({ user, dbcell }: any) {
  console.log(dbcell, "USER", user);
  try {
    const response = yield call(rsf.database.create, `tasks/${user}`, dbcell);
    console.log(response);

    const read = yield call(rsf.database.read, `tasks/${user}`);
    console.log("READ:", read);
    yield put(setCalendarData(read));
    //yield call(rsf.auth.signInWithEmailAndPassword, email, password);
    //yield put(setIsAuth({ isAuth: true, response: response }));
    //sessionStorage.setItem("isAuth", "true");
  } catch (error) {
    throw new Error(`Registration failed: ${error}`);
  }
}
function* readFromDBWorker({ user }: any) {
  console.log("readFromDBWorker", user);
  try {
    const read = yield call(rsf.database.read, `tasks/${user}`);
    console.log("READ:", read);
    yield put(setCalendarData(read));
    //yield call(rsf.auth.signInWithEmailAndPassword, email, password);
    //yield put(setIsAuth({ isAuth: true, response: response }));
    //sessionStorage.setItem("isAuth", "true");
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
