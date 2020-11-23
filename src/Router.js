import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./User/Signup";
import Signin from "./User/Signin";
import Home from "./core/Home";
import App from "./App";
import PrivateRoute from '../src/auth/PrivateRoute'
import Dashboard from './User/userDashboard'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />{" "}
        {/* setting the path to "/" so that the main landing page is home. */}
        <Route path="/signup" exact component={Signup} />
        <Route path="/app" exact component={App} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRoute path='/user/dashboard' exact component={Dashboard}/>   
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
