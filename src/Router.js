import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./User/Signup";
import Signin from "./User/Signin";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" exact componeup={Signup} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
