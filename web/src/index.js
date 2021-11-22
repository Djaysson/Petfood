import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import Cadastro from "./pages/cadastro/index";

ReactDOM.render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>,
  document.getElementById("root")
);
