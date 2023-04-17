import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, loginUserWithGoogle } from "../../../database/firebase";
import { loginUserAction } from "../../../storage/actions";
import { Link } from "react-router-dom";
import { GoogleButton } from "../../../components/buttons/GoogleButton/GoogleButton";
import { ErrorMessage } from "../../../components/messages/ErrorMessage/ErrorMessage";

export const Login = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({});

  const handleUserRegister = async () => {
    const registeredUser = await loginUser(email, password);
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
        "Login AuthenticationWrapper" + (!props.isActive ? " not-active" : "")
      }
    >
      <div className="AuthenticationRotator">
        <div className="AuthenticationContainer">
          <Link to={"/auth/login"}>
            <div className="AuthenticationLink">Login</div>
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
            action="/login"
            onSubmit={(e) => {
              e.preventDefault();
              handleUserRegister();
            }}
          >
            <label className="AuthenticationTitle">Welcome back!</label>
            <label>To return to your workspace enter the data below:</label>
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
            {error.error && <ErrorMessage error={error.error} />}
            <div className="AuthenticationSubmit">
              <input value="Login" type="submit" />
              <GoogleButton onClick={handleUserRegisterWithGoogle} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
