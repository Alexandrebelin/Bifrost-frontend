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
    <div>
      <h2>Modify</h2>
      <h2>Ajouter un article</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(event) => {
            setFile(event.target.files[0]);
          }}
        />

        <h4>Tittre</h4>
        <input
          type="text"
          id="title"
          placeholder="ex: Chemise Sézane verte"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <h4>Description</h4>
        <textarea
          id="description"
          rows="5"
          placeholder="ex: porté quelquefois, taille correctement"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <h4>Marque</h4>
        <input
          type="text"
          id="selectedBrand"
          placeholder="ex: Apple"
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        />

        <h4>Couleur</h4>
        <input
          type="text"
          placeholder="ex: blanc "
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <h4>Condition</h4>
        <input
          type="text"
          placeholder="ex: neuf "
          onChange={(event) => {
            setCondition(event.target.value);
          }}
        />
        <h4>Quantité</h4>
        <input
          type="text"
          placeholder="ex: 5"
          onChange={(event) => {
            setQuantitie(event.target.value);
          }}
        />
        <h4>Prix</h4>
        <input
          type="text"
          placeholder="0,00 €"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default Modify;
