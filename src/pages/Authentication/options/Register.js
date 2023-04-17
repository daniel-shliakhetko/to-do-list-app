import React, { useState } from "react";
import { registerUser, loginUserWithGoogle } from "../../../database/firebase";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../../storage/actions";
import { Link } from "react-router-dom";
import { GoogleButton } from "../../../components/buttons/GoogleButton/GoogleButton";
import { ErrorMessage } from "../../../components/messages/ErrorMessage/ErrorMessage";

export const Register = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const [error, setError] = useState({});

  const handleUserRegister = async () => {
    const registeredUser = await registerUser(email, password);
    !registeredUser.error
      ? dispatch(loginUserAction(registeredUser.uid, registeredUser.email))
      : setError(registeredUser);
    setTimeout(props.setSizes, 500);
  };

  const handleUserRegisterWithGoogle = async () => {
    const registeredUser = await loginUserWithGoogle();
    !registeredUser.error
      ? dispatch(loginUserAction(registeredUser.uid, registeredUser.email))
      : setError(registeredUser);
    setTimeout(props.setSizes, 500);
  };

  return (
    <div
      className={
        "Register AuthenticationWrapper" +
        (!props.isActive ? " not-active" : "")
      }
    >
      <div className="AuthenticationRotator">
        <div className="AuthenticationContainer">
          <Link to={"/auth/register"}>
            <div className="AuthenticationLink">Register</div>
          </Link>
          <form
            ref={props.myRef}
            style={
              props.size
                ? {
                    width: props.size.width,
                    height: props.size.height,
                    padding: "0",
                  }
                : {}
            }
            className="AuthenticationForm"
            action="/register"
            onSubmit={(e) => {
              e.preventDefault();
              handleUserRegister();
            }}
          >
            <label className="AuthenticationTitle">Nice to meet you!</label>
            <label>To continue registration enter the data below:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email..."
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password..."
            />
            <input
              value={repeatedPassword}
              onChange={(e) => setRepeatedPassword(e.target.value)}
              type="password"
              placeholder="Repeat the password..."
            />
            {error.error && <ErrorMessage error={error.error} />}
            <div className="AuthenticationSubmit">
              <input value="Register" type="submit" />
              <GoogleButton onClick={handleUserRegisterWithGoogle} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
