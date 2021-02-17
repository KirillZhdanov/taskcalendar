import { put, takeEvery, call } from "redux-saga/effects";
import { REGISTRATION_WITH_EMAIL, setIsAuth } from "../actions";
import rsf from "../rsf";

function* registrationWorker({ email, password, userName }: any) {
  console.log(email, password, userName);
  try {
    const response = yield call(
      rsf.auth.createUserWithEmailAndPassword,
      email,
      password
    );
    yield call(rsf.auth.updateProfile, { displayName: userName });
    console.log(response);
    yield call(rsf.auth.signInWithEmailAndPassword, email, password);
    yield put(setIsAuth({ isAuth: true, response: response }));
    //sessionStorage.setItem("isAuth", "true");
  } catch (error) {
    throw new Error(`Registration failed: ${error}`);
  }
}

export function* registrationWatcher() {
  yield takeEvery(REGISTRATION_WITH_EMAIL, registrationWorker);
}
