import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const app = initializeApp({
  apiKey: "AIzaSyC67ZIY3NmsfOaMK32Me5IxLqtphl5D5uA",
  authDomain: "to-do-list-app-581e7.firebaseapp.com",
  projectId: "to-do-list-app-581e7",
  storageBucket: "to-do-list-app-581e7.appspot.com",
  messagingSenderId: "881133383179",
  appId: "1:881133383179:web:f4f2e56856ba0e5b38210e",
  measurementId: "G-KP49F176N6",
});

export const auth = getAuth(app);