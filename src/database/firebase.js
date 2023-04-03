import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

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
export const googleProvider = new GoogleAuthProvider();

export const registerUser = async (email, passowrd) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, passowrd);
    console.log("Registered", user.user);
    return user.user;
  } catch (err) {
    console.error(err);
  }
};

export const registerUserWithGoogle = async () => {
  try {
    const user = await signInWithPopup(auth, googleProvider);
    console.log("Registered", user.user);
    return user.user;
  } catch (err) {
    switch (err.code) {
      case "auth/email-already-in-use":
        console.log(`Email address is already in use.`);
        break;
      case "auth/invalid-email":
        console.log(`Email address is invalid.`);
        break;
      case "auth/operation-not-allowed":
        console.log(`Error during sign up.`);
        break;
      case "auth/weak-password":
        console.log(
          "Password is not strong enough. Add additional characters including special characters and numbers."
        );
        break;
      default:
        console.log(err.message);
        break;
    }
  }
};

export const logoutUser = async () => {
  try {
    signOut(auth);
    console.log("Logout");
  } catch (err) {
    console.error(err);
  }
};
