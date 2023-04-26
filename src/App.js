import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./storage/store";
import Authentication from "./pages/Authentication/Authentication";
import { AuthContext } from "./contexts/AuthContext";
import { Account } from "./pages/Account/Account";
import { Workspace } from "./pages/Workspace/Workspace";
import { Main } from "./pages/Main/Main";
import { getUserData } from "./database/firebase";
import { setUserDataAction } from "./storage/actions";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(
    () => async () => {
      if (!props.userData) {
        const userData = await getUserData();
        if (!userData) return;
        dispatch(setUserDataAction(userData));
        console.log(props.auth, props.userData);
      }
    },
    [dispatch, props]
  );

  return (
    <div className="App">
      <AuthContext>
        <Router>
          {props.auth.isAuth ? (
            <Routes>
              <Route
                path={"/workspace"}
                element={<Workspace userData={props.userData} />}
              />
              <Route
                path={"/workspace/:page"}
                element={<Workspace userData={props.userData} />}
              />
              <Route path={"/account"} element={<Account />} />
              <Route path={"*"} element={<Navigate to={"/workspace"} />} />
            </Routes>
          ) : (
            <Routes>
              <Route path={"/auth/:type"} element={<Authentication />} />
              <Route path={"/"} element={<Main />} />
              <Route path={"*"} element={<Navigate to={"/"} />} />
            </Routes>
          )}
        </Router>
      </AuthContext>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
