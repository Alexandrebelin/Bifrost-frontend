import { Link } from "react-router-dom";

// Components
import ButtonPublish from "./buttonPublish";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <div className="containerHeader">
        <Link to="/">
          <img src={logo} alt="logo" data-testid="logo" />
        </Link>
        <ButtonPublish />
      </div>
    </header>
  );
};

export default Header;
