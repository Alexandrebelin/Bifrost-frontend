import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

// Components
import ButtonDelete from "../components/buttonDelete";
import Loader from "../components/Loader";

const ProductById = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://bifrost-backend-test.herokuapp.com/product/${id}`
        );

        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="containerProduct">
      <div className="containerTitle ">
        <h2>{data.title}</h2>
      </div>
      <div className="descriptionContainer">
        <img src={data.image.secure_url} alt="phone" />
        <div>
          <h4>{data.brand}</h4>
          <p>{data.description}</p>
          <span>Couleur : {data.color}</span>

          <div className="stock">
            <div>
              <span>{data.price} €</span>
            </div>

            <div className="divider" />
            <div>
              <span>Quantité : {data.quantitie}</span>
            </div>
          </div>
          <div className="dividerButton">
            <Link to={`/modify/${id}`}>
              <button className="buttonModifyDelete" data-testid="buttonModify">
                Modifier
              </button>
            </Link>
            <ButtonDelete id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductById;
