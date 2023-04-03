import React from "react";
import { Link } from "react-router-dom";

export const Main = (props) => {
  return (
    <div>
      <Link to={"/auth/register"}>Register</Link>
      <Link to={"/auth/login"}>Login</Link>
      Main
    </div>
  );
};
