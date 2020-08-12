// importing the layout from "../core/layout" folder to use the layout in this file.

import React, { useState } from "react";
import Layout from "../core/layout";
import { API } from "../config";
// require("dotenv").config();

/*----------------------------------------------------------------------------------------------------*/

const Signup = () => {
  // creating this destructured const to use "useState" function.
  // this displays empty objects, which gets updated with the help of handleChange().
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: true,
    success: false,
  });

  // destructuring the values.
  const { name, email, password, error, success } = values;

  // this is a higher order function. Higher order functions are functions returning another function.
  // this function is used to update the values of the previously generated values.
  // setting the name of handleChange as "name" and event to be caused as "event".
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  /*----------------------------------------------------------------------------------------------------*/

  // this method comprehends the values received as user object.
  const signUp = (user) => {
    // sending the body of this fetch() with POST method
    // to the already created signup route in the server backend that connects with the database.
    return fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signUp({ name, email, password }) // sending these values as an object to signUp()
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: true, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: false,
            success: true,
          });
        }
      });
  };

  /*----------------------------------------------------------------------------------------------------*/

  // creating this jsx template for the signup form to be displayed.
  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")} // running handleChange() when a change occurs.
          type="text"
          className="form-control"
          value={name}
        />
      </div>
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

  // const showError = () => (
  //   <div
  //     className="alert alert-danger"
  //     style={{ display: error ? "" : "none" }}
  //   >
  //     {error}
  //   </div>
  // );

  // const showSuccess = () => (
  //   <div
  //     className="alert alert-info"
  //     style={{ display: success ? "" : "none" }}
  //   >
  //     New account created. Please sign in, Bro.
  //   </div>
  // );

  return (
    <Layout
      title="SignUp"
      description="Signed up to Node react App"
      className="container col-md-8 offset-md-2"
    >
      {/* {showSuccess()} */}
      {/* {showError()} */}
      {/* using the signup form created above to be displayed here. */}
      {signUpForm()}
      {/* {JSON.stringify(values)} */}
    </Layout>
  );
};

export default Signup;
