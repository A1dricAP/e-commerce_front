// creating this layout file, as a common layout file for other files to inherit.

import React from "react";

// importing the Menu from "Core/Menu" to work directly with the layout instead of "Router.js"
import Menu from "./Menu";

// creating a component, with the idea of it being a layout for other files to use.
// in the name of "Layout"; to be imported by other files.

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => (
  <div>
    <Menu />
    <div className="jumbotron">
      <h2>{title}</h2>
      <p className="lead">{description}</p>
    </div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
