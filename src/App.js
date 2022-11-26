import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
