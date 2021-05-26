import { Link } from "react-router-dom";

import ButtonPublish from "./buttonPublish";

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <ButtonPublish />
    </header>
  );
};

export default Header;
