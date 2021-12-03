import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import Sidebar from "./components/sidebar/index";
import Cadastro from "./pages/cadastro/index";
import Checkout from "./pages/checkout/index";
import Petshop from "./pages/petshop/index";
import Home from "./pages/home/index";

ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
    {/* <Cadastro /> */}
    {/* <Checkout /> */}
    {/* <Petshop /> */}
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
