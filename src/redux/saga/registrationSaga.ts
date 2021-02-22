import { put, takeEvery, call } from "redux-saga/effects";
import { RegistrationEmailWorker } from "../../models";
import { REGISTRATION_WITH_EMAIL } from "../actions";
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
  } catch (error) {
    console.log(`Registration failed: ${error}`);
  }
}

export function* registrationWatcher() {
  yield takeEvery(REGISTRATION_WITH_EMAIL, registrationWorker);
}
