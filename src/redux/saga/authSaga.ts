import { takeEvery, call } from "redux-saga/effects";
import { AuthEmailWorker } from "../../models";
import { LOGIN_WITH_EMAIL, SIGN_OUT } from "../actions";
import rsf from "../rsf";

function* authWorker({ email, password }: AuthEmailWorker) {
  try {
    yield call(rsf.auth.signInWithEmailAndPassword, email, password);
  } catch (error) {
    throw new Error(`Login failed: ${error}`);
  }
}
function* signOutWorker() {
  try {
    yield call(rsf.auth.signOut);
  } catch (error) {
    throw new Error(`Sign out failed: ${error}`);
  }
}

export function* authWatcher() {
  yield takeEvery(LOGIN_WITH_EMAIL, authWorker);
  yield takeEvery(SIGN_OUT, signOutWorker);
}
