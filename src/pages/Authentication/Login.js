import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser, loginUserWithGoogle } from '../../database/firebase';
import { loginUserAction } from '../../storage/actions';

export const Login = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserRegister = async () => {
    const registeredUser = await loginUser(email, password);
    !registeredUser.error && dispatch(loginUserAction(registeredUser.uid, registeredUser.email));
  };

  const handleUserRegisterWithGoogle = async () => {
    const registeredUser = await loginUserWithGoogle();
    !registeredUser.error && dispatch(loginUserAction(registeredUser.uid, registeredUser.email));
  };

  return (
    <form
      className="Register"
      action="/register"
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
      <input value="Login" type="submit" />
      <button onClick={handleUserRegisterWithGoogle}>Google</button>
    </form>
  );
}
