import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./User/Signup";
import Signin from "./User/Signin";
import Home from "./core/Home";
import Menu from "./core/Menu";
import App from "./App";

const Routes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />{" "}
        {/* setting the path to "/" so that the main landing page is home. */}
        <Route path="/signup" exact component={Signup} />
        <Route path="/app" exact component={App} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
