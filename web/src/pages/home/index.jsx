import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestPetshops } from "../../store/modules/shop/actions";

import "./styles.css";
import Header from "../../components/header/index";
import Petshop from "../../components/petshop/index";
import Map from "../../components/map/index";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPetshops());
  }, []);

  return (
    <div className="h-100">
      <Header hideCart />
      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Mais próximos de você (5)</h5>
        </div>
        <ul className="col-12 petshop-list">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
            <Petshop />
          ))}
        </ul>
      </div>
      <Map />
    </div>
  );
};

export default Home;

// 1ºiniciar o projeto web yarn start e iniciar o projeto backend yarn start
// 2ºiniciar o video no momento 01:12:25
// 3º inicar o mongodb
//so pode da o commit quando cocluir a ação ok
