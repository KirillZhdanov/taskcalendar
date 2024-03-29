import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

import ReduxSagaFirebase from "redux-saga-firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "taskcalendar2021.firebaseapp.com",
  projectId: "taskcalendar2021",
  storageBucket: "taskcalendar2021.appspot.com",
  messagingSenderId: "1007822470195",
  appId: "1:1007822470195:web:bf8afeebae450f3bcbb746",
});
export const auth = firebase.auth();
const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;
