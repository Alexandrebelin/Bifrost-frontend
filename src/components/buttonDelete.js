import axios from "axios";
import { useHistory } from "react-router-dom";

const ButtonDelete = ({ id }) => {
  const history = useHistory();

  const handleDelete = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.delete(
        `https://bifrost-backend-test.herokuapp.com/product/delete/${id}`
      );

      if (response.status === 200) {
        history.push("/");
      } else {
        alert("An error has occured, please try again");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="buttonModifyDelete"
      data-testid="buttonDelete"
    >
      Supprimer
    </button>
  );
};

export default ButtonDelete;
