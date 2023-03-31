import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";

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

export const registerUser = async (email, passowrd) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, passowrd);
    console.log("Registered", user);
    return user;
  } catch (err) {
    console.error(err);
  }
};

export const logoutUser = async () =>{
  try {
    signOut(auth);
    console.log("Logout");
  } catch (err) {
    console.error(err);
  }
}
