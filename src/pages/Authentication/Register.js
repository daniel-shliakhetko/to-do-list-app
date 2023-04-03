import React, { useState } from "react";
import { registerUser, registerUserWithGoogle } from "../../database/firebase";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../storage/actions";

export const Register = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserRegister = async () => {
    const registeredUser = await registerUser(email, password);
    console.log(registeredUser);
    dispatch(loginUserAction(registeredUser.uid, registeredUser.email));
  };

  const handleUserRegisterWithGoogle = async () => {
    const registeredUser = await registerUserWithGoogle();
    dispatch(loginUserAction(registeredUser.uid, registeredUser.email));
  };

  return (
    <form
      className="Register"
      onSubmit={(e) => {
        e.preventDefault();
        handleUserRegister();
      }}
    >
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <input value="Register" type="submit" />
      <button onClick={handleUserRegisterWithGoogle}>Google</button>
    </form>
  );
};
