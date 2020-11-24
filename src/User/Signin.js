// importing the layout from "../core/layout" folder to use the layout in this file.

import React, { useState } from "react";
import Layout from "../core/layout";
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth";
// require("dotenv").config();

/*----------------------------------------------------------------------------------------------------*/

const Signin = () => {
  //  creating this destructured const to use "useState" function.
  // ! this displays empty objects, which gets updated with the help of handleChange().
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  // destructuring the values.
  const { email, password, error, loading, redirectToReferrer } = values;
  const {user}=isAuthenticated()

  // this is a higher order function. Higher order functions are functions returning another function.
  // this function is used to update the values of the previously generated values.
  // setting the name of handleChange as "name" and event to be caused as "event".
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  /*----------------------------------------------------------------------------------------------------*/

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }) // sending these values as an object to signUp()
      .then((data) => {
        if (data.error) {
          console.log("IF part of clicksubmit(signin)");

          setValues({ ...values, error: true, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              redirectToReferrer: true,
            });
          });
          console.log("else part of clicksubmit(signin)");
        }
      });
  };

  /*----------------------------------------------------------------------------------------------------*/

  // creating this jsx template for the signup form to be displayed.

  const showLoading = () => {
    if (loading) {
      return (
        <div className="alert alert-info">
          <h2>Loading</h2>
        </div>
      );
    }
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      if(user && user.role===1){
        return <Redirect to="/admin/dashboard" />;
      }else{
        return <Redirect to="/user/dashboard" />;
      }
    }
    if(isAuthenticated()){
      return <Redirect to='/'/>
    }
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">E-mail</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">
        Submit, Bro!
      </button>
    </form>
  );

  return (
    <Layout
      title="SignIn"
      description="Sign in to Node react App"
      className="container col-md-8 offset-md-2"
    >
      {showLoading()}
      {showError()}
      {/* using the signup form created above to be displayed here. */}
      {signUpForm()}
      {redirectUser()}
      {/* {JSON.stringify(values)} */}
    </Layout>
  );
};

export default Signin;
