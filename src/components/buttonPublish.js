import { Link } from "react-router-dom";

const ButtonPublish = () => {
  return (
    <Link to="/publish">
      <span>add new product</span>
    </Link>
  );
};

export default ButtonPublish;
