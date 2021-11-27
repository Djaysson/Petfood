import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import Cadastro from "./pages/cadastro/index";
import Checkout from "./pages/checkout/index";
import Petshop from "./pages/petshop/index";

ReactDOM.render(
  <React.StrictMode>
    {/* <Cadastro /> */}
    {/* <Checkout /> */}
    <Petshop />
  </React.StrictMode>,
  document.getElementById("root")
);
