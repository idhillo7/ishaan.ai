import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";

import ProfilePage from "views/ProfilePage/ProfilePage.js";


var hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <ProfilePage />
  </React.StrictMode>,
  document.getElementById("root")
);
