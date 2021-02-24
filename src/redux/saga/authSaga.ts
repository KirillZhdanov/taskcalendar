import { takeEvery, call, put } from "redux-saga/effects";
import { AuthEmailWorker } from "../../models";
import {
  LOGIN_WITH_EMAIL,
  setCalendarData,
  setError,
  SIGN_OUT,
} from "../actions";
import rsf from "../rsf";

function* authWorker({ email, password }: AuthEmailWorker) {
  try {
    yield call(rsf.auth.signInWithEmailAndPassword, email, password);
    yield put(setError(""));
  } catch (error) {
    yield put(setError(error.message));
  }
}
function* signOutWorker() {
  try {
    yield call(rsf.auth.signOut);
    yield put(setCalendarData([{}]));
    yield put(setError(""));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export function* authWatcher() {
  yield takeEvery(LOGIN_WITH_EMAIL, authWorker);
  yield takeEvery(SIGN_OUT, signOutWorker);
}
