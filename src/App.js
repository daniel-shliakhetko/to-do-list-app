import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const isAuth = true;

function App() {
  return (
    <div className="App">
      <Router>
          {
            isAuth ? (
              <Routes>
                <Route path={'/workspace'} element={"Workspace"}/>
                <Route path={'/account'} element={"Account"}/>
                <Route path={'*'} element={<Navigate to={'/workspace'}/>}/>
              </Routes>
            ) : (
              <Routes>
                <Route path={'/auth'} element={"Register"}/>
                <Route path={'/'} element={"Main"}/>
                <Route path={'*'} element={<Navigate to={'/'}/>}/>
              </Routes>
            )
          }
      </Router>
    </div>
  );
}

export default App;