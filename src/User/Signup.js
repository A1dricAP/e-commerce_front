// importing the layout from "../core/layout" folder to use the layout in this file.

import React, { useState } from "react";
import Layout from "../core/layout";
// import { API } from "../config";
// require("dotenv").config();

const Signup = () => {
  // creating this destructured const to use "useState" function.
  // this displays empty objects, which gets updated with the help of handleChange().
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  // this is a higher order function. Higher order functions are functions returning another function.
  // this function is used to update the values of the previously generated values.
  // setting the name of handleChange as "name" and event to be caused as "event".
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  // creating this jsx template for the signup form to be displayed.
  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")} // running handleChange() when a change occurs.
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">E-mail</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit, Bro!</button>
    </form>
  );
  return (
    <Layout
      title="SignUp"
      description="Signed up to Node react App"
      className="container col-md-8 offset-md-2"
    >
      {/* using the signup form created above to be displayed here. */}
      {signUpForm()}
      {JSON.stringify(values)}
    </Layout>
  );
};

export default Signup;
