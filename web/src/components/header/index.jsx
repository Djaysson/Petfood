import "./styles.css";
import Logo from "../../assets/logo/logo.png";
import Logo2 from "../../assets/logo/logo-2.png";
import { Link } from "react-router-dom";

const Header = ({ darkVersion, hideCart }) => {
  const handleOpenMenuButton = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };

  return (
    <div className="col-12">
      <header className="py-2 px-2 text-center header">
        <Link to="/">
          <img
            src={darkVersion ? Logo2 : Logo}
            className="img-fluid"
            alt="Logo"
          />
        </Link>
      </header>
      {!hideCart && (
        <button
          onClick={() => handleOpenMenuButton()}
          className="btn btn-secondary cart-button"
        >
          <span className="mdi mdi-cart"></span>2 itens
        </button>
      )}
    </div>
  );
};
export default Header;
