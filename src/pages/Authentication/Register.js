import React, { useState } from "react";
import { logoutUser, registerUser } from "../../database/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { loginUserAction, logoutUserAction } from "../../storage/actions";

export const Register = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useAuth();

  const handleUserRegister = (e) => {
    e.preventDefault();
    const user = registerUser(email, password);
    dispatch(loginUserAction(user.uid, user.email));
  };

  return (
    <form onSubmit={handleUserRegister}>
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
      <input type="submit" />
      {user.email || "none user"}
    </form>
  );
};
