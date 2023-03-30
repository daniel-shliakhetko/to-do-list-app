import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./storage/store";

const isAuth = false;

function App() {
  return (
    <div className="App">
      <Router>
        {isAuth ? (
          <Routes>
            <Route path={"/workspace"} element={"Workspace"} />
            <Route path={"/account"} element={"Account"} />
            <Route path={"*"} element={<Navigate to={"/workspace"} />} />
          </Routes>
        ) : (
          <Routes>
            <Route path={"/auth"} element={"Register"} />
            <Route path={"/"} element={"Main"} />
            <Route path={"*"} element={<Navigate to={"/"} />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
