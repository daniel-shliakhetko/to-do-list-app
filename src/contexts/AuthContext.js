import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../database/firebase";
import { store } from "../storage/store";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../storage/actions";

const authContext = createContext();

export const useAuth = () => useContext(authContext);

export const AuthContext = (props) => {
  const dispatch = useDispatch();

  const [user, loading, error] = useAuthState(auth);
  const [gotUser, setGotUser] = useState(false);

  useEffect(() => {
    if (loading || gotUser || !user) return;
    if (error) console.log(error);
    dispatch(loginUserAction(user.uid, user.email));
    setGotUser(true);
    console.log("Loggined");
  }, [dispatch, user, loading, error, gotUser, setGotUser]);

  return (
    <authContext.Provider value={store.getState().auth}>
      {props.children}
    </authContext.Provider>
  );
};
