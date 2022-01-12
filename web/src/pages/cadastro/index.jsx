import { useState } from "react";

import Header from "../../components/header/index";
import Illustration from "../../assets/illustration-1.svg";

const Cadastro = () => {
  const [customer, setCustomer] = useState({});
  return (
    <div className="container-fluid  h-100 bg-primary ">
      <Header darkVersion hideCart />
      <div className="row align-items-center text-center  ">
        <div className="col-6 text-right my-auto">
          <img
            src={Illustration}
            className="img-fluid img"
            alt="Person with pet"
          />
        </div>
        <div className="col-6">
          <div className="box col-8">
            <h2 className="text-center mb-4">
              Falta pouco pra fazer o seu pet feliz.
            </h2>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome completo"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="CPF"
            />
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="Data de Nascimento"
            />

            <button className="btn btn-lg btn-block btn-secondary">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cadastro;
