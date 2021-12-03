import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/index";
import Cadastro from "./pages/cadastro/index";
import Checkout from "./pages/checkout/index";
import Petshop from "./pages/petshop/index";
import Home from "./pages/home/index";

const Rotas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petshop/:id" element={<Petshop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
      <Sidebar />
    </>
  );
};

export default Rotas;
