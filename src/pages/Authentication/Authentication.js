import React from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";

const Authentication = (props) => {
  let { type } = useParams();

  const isLogin = () => type === "login";
  const isRegister = () => type === "register";

  return (
    <div>
      <Link to={"/auth/register"}>Register</Link>
      <Link to={"/auth/login"}>Login</Link>
      {isLogin() ? (
        <Login />
      ) : isRegister() ? (
        <Register />
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
};

export default Authentication;
