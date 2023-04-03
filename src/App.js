import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./storage/store";
import Authentication from "./pages/Authentication/Authentication";
import { AuthContext } from "./contexts/AuthContext";
import { Account } from "./pages/Account/Account";
import { Workspace } from "./pages/Workspace/Workspace";
import { Main } from "./pages/Main/Main";

const App = (props) => {

  return (
    <div className="App">
      <AuthContext>
        <Router>
          {props.auth.isAuth ? (
            <Routes>
              <Route path={"/workspace"} element={<Workspace/>} />
              <Route path={"/account"} element={<Account/>} />
              <Route path={"*"} element={<Navigate to={"/workspace"} />} />
            </Routes>
          ) : (
            <Routes>
              <Route path={"/auth/:type"} element={<Authentication />} />
              <Route path={"/"} element={<Main/>} />
              <Route path={"*"} element={<Navigate to={"/"} />} />
            </Routes>
          )}
        </Router>
      </AuthContext>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
