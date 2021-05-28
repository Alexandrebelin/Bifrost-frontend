import React, { useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const Modify = () => {
  const { id } = useParams();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [quantitie, setQuantitie] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData();
      formData.append("image", file);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("brand", brand);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("quantitie", quantitie);

      const response = await axios.put(
        `http://localhost:3100/product/update/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data._id) {
        history.push(`/product/${response.data._id}`);
      } else {
        alert("An error has occured, please try again");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="containerProduct">
      <form onSubmit={handleSubmit}>
        <div className="containerTitle ">
          <input
            type="text"
            id="title"
            placeholder="Modifier le titre"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="descriptionContainer">
          <div className="modifyImg">
            <input
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
          </div>
          <div className="inputContainer">
            <input
              type="text"
              id="selectedBrand"
              placeholder="Modifier la marque"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
            <textarea
              id="description"
              rows="5"
              placeholder="Modifier la description"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Modifier la couleur"
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />

            <div className="stock">
              <div>
                <input
                  type="text"
                  placeholder="Modifier le prix"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
              </div>

              <div className="divider" />
              <div>
                <input
                  type="text"
                  placeholder="Mofifier la quantité"
                  onChange={(event) => {
                    setQuantitie(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="displayMoify">
              <button type="submit" className="buttonModifyDelete">
                Modifier
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modify;
