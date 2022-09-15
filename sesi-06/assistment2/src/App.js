import React from "react";
import Main from "./components/Main";
import Profile from "./components/profile";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </>
  );
}

export default App;
