import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import ErrorMessage from "./components/ErrorMessage";
import UserInfo from "./components/UserInfo";

function App() {
  const { userInfo } = useSelector((store) => store);

  const style = { marginTop: "100px" };

  return (
    <Router>
      <div className="container" style={style}>
        <Switch>
          <Route exact={true} path="/">
            <LoginForm />
          </Route>
          <Route path="/error">
            <ErrorMessage />
          </Route>
          <Route path="/main">
            <UserInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
