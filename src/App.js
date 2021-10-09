import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
