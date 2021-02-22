import { takeEvery, call, put } from "redux-saga/effects";
import { AuthEmailWorker } from "../../models";
import { LOGIN_WITH_EMAIL, setCalendarData, SIGN_OUT } from "../actions";
import rsf from "../rsf";

function* authWorker({ email, password }: AuthEmailWorker) {
  try {
    yield call(rsf.auth.signInWithEmailAndPassword, email, password);
  } catch (error) {
    // throw new Error(`Login failed: ${error}`);
    console.log(`Login failed: ${error}`);
    alert(error);
  }
}
function* signOutWorker() {
  try {
    yield call(rsf.auth.signOut);
    yield put(setCalendarData([{}]));
  } catch (error) {
    throw new Error(`Sign out failed: ${error}`);
  }
}

export function* authWatcher() {
  yield takeEvery(LOGIN_WITH_EMAIL, authWorker);
  yield takeEvery(SIGN_OUT, signOutWorker);
}
