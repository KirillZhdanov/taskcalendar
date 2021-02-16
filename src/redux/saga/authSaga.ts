import { put, takeEvery, call } from "redux-saga/effects";
import { LOGIN_WITH_EMAIL, setIsAuth } from "../actions";
import rsf from "../rsf";

function* authWorker({ email, password }: any) {
  try {
    const response = yield call(
      rsf.auth.signInWithEmailAndPassword,
      email,
      password
    );
    yield put(setIsAuth({ isAuth: true, response: response }));
    //localStorage.setItem("isAuth", "true");
  } catch (error) {
    yield put(setIsAuth({ isAuth: false }));
    throw new Error(`Login failed: ${error}`);
  }
}

export function* authWatcher() {
  yield takeEvery(LOGIN_WITH_EMAIL, authWorker);
}
