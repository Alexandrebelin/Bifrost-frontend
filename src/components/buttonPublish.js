import { Link } from "react-router-dom";

const ButtonPublish = () => {
  return (
    <Link to="/publish">
      <button className="buttonHeader" data-testid="buttonHeader">
        Ajouter un nouveau produit
      </button>
    </Link>
  );
};

export default ButtonPublish;
