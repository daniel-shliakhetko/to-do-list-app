import React, { useLayoutEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Login } from "./options/Login";
import { Register } from "./options/Register";
import "./index.scss";

const Authentication = (props) => {
  let { type } = useParams();

  const isLogin = () => type === "login";
  const isRegister = () => type === "register";

  const loginRef = useRef(null);
  const registerRef = useRef(null);

  const [loginSize, setLoginHeight] = useState(null);
  const [registerSize, setRegisterHeight] = useState(null);

  const setSizes = () => {
    setLoginHeight({
      width: loginRef?.current?.offsetWidth,
      height: loginRef?.current?.offsetHeight,
    });
    setRegisterHeight({
      width: registerRef?.current?.offsetWidth,
      height: registerRef?.current?.offsetHeight,
    });
  };

  useLayoutEffect(setSizes, []);

  return (
    <div
      className="Authentication Page"
      onMouseDownCapture={() => {
        setTimeout(setSizes, 500);
      }}
    >
      <div className="AuthenticationBackground"/>
      {/* {"login: " + loginSize?.width + " " + loginSize?.height}
      {"\nregister: " + registerSize?.width + " " + registerSize?.height} */}
      {!isLogin() && !isRegister() && <Navigate to={"/"} />}
      <Login
        isActive={isLogin()}
        myRef={loginRef}
        size={isRegister() && registerSize}
        setSizes={setSizes}
      />
      <Register
        isActive={isRegister()}
        myRef={registerRef}
        size={isLogin() && loginSize}
        setSizes={setSizes}
      />
    </div>
  );
};

export default Authentication;
