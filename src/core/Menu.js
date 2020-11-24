import React,{Fragment} from "react";
import { Link, withRouter } from "react-router-dom";
//react-router-dom is basically a file from react to take care of the routing within our app.
import { signout, isAuthenticated } from "../auth";

//creating a sort of middelware for changing the color of the button tab.
const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = (
  { history } //getting the history from props. By destructuring. instead of props.history
) => (
  <div>
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/")} to="/">
          Home
        </Link>
      </li>

     {isAuthenticated() && isAuthenticated().user.role === 0 && (
        <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/user/dashboard")} to="/user/dashboard">
          Dashboard
        </Link>
      </li>
     )}

     {isAuthenticated() && isAuthenticated().user.role === 1 && (
        <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/admin/dashboard")} to="/admin/dashboard">
          Dashboard
        </Link>
      </li>
     )}

      {!isAuthenticated() && (
        <Fragment>
      <li className="nav-item">
        <Link
          className="nav-link"
          style={isActive(history, "/signin")}
          to="/signin"
        >
          SignIn
        </Link>
      </li>

      <li className="nav-item">
        <Link
          className="nav-link"
          style={isActive(history, "/signup")}
          to="/signup"
        >
          SignUp
        </Link>
      </li>

      </Fragment>
      )}


      {isAuthenticated()&&(
        <li className="nav-item">
        <span
          className="nav-link"
          style={{ cursor: "pointer", color: "#ffffff" }}
          onClick={() =>
            signout(() => {
              history.push("/");
            })
          }
        >
          SignOut
        </span>
      </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
