// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmIjNczQrC7YkAdzzuzK52I-LOmO_YOMI",
  authDomain: "crud-app-843de.firebaseapp.com",
  databaseURL: "https://crud-app-843de-default-rtdb.firebaseio.com",
  projectId: "crud-app-843de",
  storageBucket: "crud-app-843de.appspot.com",
  messagingSenderId: "96572686975",
  appId: "1:96572686975:web:4bfc79f42eaa60c089354a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);