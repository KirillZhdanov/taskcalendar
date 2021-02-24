import { put, takeEvery, call } from "redux-saga/effects";
import { RegistrationEmailWorker } from "../../models";
import { REGISTRATION_WITH_EMAIL, setError } from "../actions";
import rsf from "../rsf";

function* registrationWorker({
  email,
  password,
  userName,
}: RegistrationEmailWorker) {
  try {
    yield call(rsf.auth.createUserWithEmailAndPassword, email, password);
    yield call(rsf.auth.updateProfile, { displayName: userName });
    yield call(rsf.auth.signInWithEmailAndPassword, email, password);
    yield put(setError(""));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export function* registrationWatcher() {
  yield takeEvery(REGISTRATION_WITH_EMAIL, registrationWorker);
}
