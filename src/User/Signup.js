// importing the layout from "../core/layout" folder to use the layout in this file.

import React, { useState } from "react";
import Layout from "../core/layout";
import { Link } from "react-router-dom";
import { signUp } from "../auth";
// require("dotenv").config();

/*----------------------------------------------------------------------------------------------------*/

const Signup = () => {
  //  creating this destructured const to use "useState" function.
  // ! this displays empty objects, which gets updated with the help of handleChange().
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
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

  // const showSuccess = () => {
  //   if (success) {
  //     return (
  //       <div
  //         className="alert alert-info"
  //         // style={{ display: error ? "" : "none" }}
  //       >
  //         New account created. Please <Link to="/signin">Signin, </Link> Bro
  //       </div>
  //     );
  //   }
  // };
  // const showError = () => (
  //   <div
  //     className="alert alert-danger"
  //     style={{ display: error ? "" : "none" }}
  //   >
  //     {error}
  //   </div>
  // );

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

  return (
    <Layout
      title="SignUp"
      description="Signed up to Node react App"
      className="container col-md-8 offset-md-2"
    >
      {/* {showError()}
      {showSuccess()} */}
      {/* using the signup form created above to be displayed here. */}
      {signUpForm()}
      {/* {JSON.stringify(values)} */}
    </Layout>
  );
};

export default Signup;
