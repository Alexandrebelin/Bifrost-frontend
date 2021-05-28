import { Link } from "react-router-dom";

import ButtonPublish from "./buttonPublish";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <div className="containerHeader">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ButtonPublish />
      </div>
    </header>
  );
};

export default Header;
