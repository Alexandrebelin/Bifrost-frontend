import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Publish = () => {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
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
      formData.append("quantitie", quantitie);

      const response = await axios.post(
        "https://bifrost-backend-test.herokuapp.com/product/publish",
        formData
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
    <div className="publishContainer">
      <h2 data-testid="titlePublishPage">Ajouter un article</h2>
      <form onSubmit={handleSubmit}>
        <div className="selectFile">
          <input
            type="file"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />
        </div>
        <div className="titleSection">
          <div className="textInput">
            <h4>Tittre</h4>
            <input
              type="text"
              id="title"
              placeholder="ex: Apple iPhone 12 Pro Max"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="textInput">
            <h4>Description</h4>
            <textarea
              id="description"
              rows="5"
              placeholder="ex: L'iPhone 12 Pro Max est équipé de la puce A14 Bionic ..."
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="detailsSection">
          <div className="textInput">
            <h4>Marque</h4>
            <input
              type="text"
              id="selectedBrand"
              placeholder="ex: Apple"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>
          <div className="textInput">
            <h4>Couleur</h4>
            <input
              type="text"
              placeholder="ex: blanc "
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
          <div className="textInput">
            <h4>Quantité</h4>
            <input
              type="text"
              placeholder="ex: 5"
              onChange={(event) => {
                setQuantitie(event.target.value);
              }}
            />
          </div>

          <div className="textInput">
            <h4>Prix</h4>
            <input
              type="text"
              placeholder="0.00 €"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="diplayButton">
          <button type="submit" className="buttonAdd">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Publish;
