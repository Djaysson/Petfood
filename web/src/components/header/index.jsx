import Logo from "../../assets/logo/logo.png";
import Logo2 from "../../assets/logo/logo-2.png";

const Header = ({ darkVersion }) => {
  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <img
          src={darkVersion ? Logo2 : Logo}
          className="img-fluid"
          alt="Logo"
        />
      </header>
    </div>
  );
};
export default Header;
