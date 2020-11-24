import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./User/Signup";
import Signin from "./User/Signin";
import Home from "./core/Home";
import App from "./App";
import PrivateRoute from '../src/auth/PrivateRoute'
import AdminRoute from '../src/auth/AdminRoute'
import Dashboard from './User/userDashboard'
import adminDashboard from './User/adminDashboard'
import AddCategory from './admin/addCategory'
import AddProduct from './admin/addProduct'

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
        <AdminRoute path='/admin/dashboard' exact component={adminDashboard}/>   
        <AdminRoute path='/create/category' exact component={AddCategory}/>   
        <AdminRoute path='/create/product' exact component={AddProduct}/>   
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
