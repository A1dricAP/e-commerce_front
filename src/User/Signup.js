// importing the layout from "../core/layout" folder to use the layout in this file.

import React from "react";
import Layout from "../core/layout";
import { API } from "../config";
// require("dotenv").config();

const Signup = () => (
  <Layout title="Signed Up" description="Signed up for Node React App">
    {API}
  </Layout>
);

export default Signup;
