import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
    switch (err.code) {
      case "auth/email-already-in-use":
        console.log("Email address is already in use.");
        return { error: "Email address is already in use." };
      case "auth/invalid-email":
        console.log("Email address is invalid.");
        return { error: "Email address is invalid." };
      case "auth/operation-not-allowed":
        console.log("Error during sign up.");
        return { error: "Error during sign up." };
      case "auth/weak-password":
        console.log(
          "Password is not strong enough. Add additional characters including special characters and numbers."
        );
        return {
          error:
            "Password is not strong enough. Add additional characters including special characters and numbers.",
        };
      default:
        console.log(err.message);
        return { error: err.message };
    }
  }
};

export const loginUser = async (email, passowrd) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, passowrd);
    console.log("Logged in", user.user);
    return user.user;
  } catch (err) {
    switch (err.code) {
      case "auth/invalid-email":
        console.log("Email address is invalid.");
        return { error: "Email address is invalid." };
      default:
        console.log(err.message);
        return { error: err.message };
    }
  }
};

export const loginUserWithGoogle = async () => {
  try {
    const user = await signInWithPopup(auth, googleProvider);
    console.log("Registered", user.user);
    return user.user;
  } catch (err) {
    console.log(err.message);
    return { error: err.message };
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
