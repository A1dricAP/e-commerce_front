import React, { useState } from "react";
import Layout from "../core/layout";
import { API } from "../config";
// import { signUp } from "../auth";

//--------------------------------------------------------------------------------------------------

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  //--------------------------------------------------------------------------------------------------

  const { name, email, password, success, error } = values;

  //--------------------------------------------------------------------------------------------------

  // ? the 'name' is dynamic. depends upon which div calls it in the signUpForm
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  //--------------------------------------------------------------------------------------------------
  const signup = (user) => {
    console.log(name, email, password);
    return fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log(user); // ! This console code is for showing the user details in the console on the web[works].

        return response.json; // ! this snip is for showing the user details in the terminal[works].
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //--------------------------------------------------------------------------------------------------

  const clickSubmit = (event) => {
    event.preventDefault(); // ? using this method so that the browser does not reload when clicked.
    signup({ name, email, password }) // ? using {}, because we're sending the data as object, which will be recieved as "user"
      .then((data) => {
        console.log(data);

        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: true,
            success: false,
          });
        }
      });
  };

  //--------------------------------------------------------------------------------------------------

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        ></input>
      </div>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        ></input>
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        ></input>
      </div>

      <button onClick={clickSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );

  //--------------------------------------------------------------------------------------------------

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      Please Sign in.
    </div>
  );

  return (
    <Layout
      title="SignUp"
      description="Sign up to Node react App"
      className="container col-md-8 offset-md-2"
    >
      {showSuccess()}
      {showError()}
      {signUpForm()}
      {JSON.stringify(values)}
    </Layout>
  );
};

//--------------------------------------------------------------------------------------------------

export default SignUp;
