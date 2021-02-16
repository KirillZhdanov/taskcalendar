import firebase from "firebase";
import "@firebase/firestore";
import ReduxSagaFirebase from "redux-saga-firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCvilick1jc2zKzYahY1QKeBD5ISEDaTPM",
  authDomain: "taskcalendar2021.firebaseapp.com",
  projectId: "taskcalendar2021",
  storageBucket: "taskcalendar2021.appspot.com",
  messagingSenderId: "1007822470195",
  appId: "1:1007822470195:web:bf8afeebae450f3bcbb746",
});

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;
