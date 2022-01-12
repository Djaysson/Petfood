import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import store from "./store";

import Routes from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
