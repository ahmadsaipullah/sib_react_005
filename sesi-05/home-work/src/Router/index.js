import React from "react";
//import react router dom
import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home/Home";
import CreateMeetup from "../Pages/CreateMeetup";
import Explorer from "../Pages/Explorer";
import Login from "../Pages/Login";

const Navigasi = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/createMeetup" component={CreateMeetup} />
        <Route exact path="/explorer" component={Explorer} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
};

export default Navigasi;
