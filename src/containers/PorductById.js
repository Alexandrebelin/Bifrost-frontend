import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

import ButtonDelete from "../components/buttonDelete";

const ProductById = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(`http://localhost:3100/product/${id}`);

        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return isLoading ? (
    <div></div>
  ) : (
    <div className="containerProduct">
      <div className="containerTitle ">
        <h2>{data.title}</h2>
      </div>
      <div className="productContainer">
        <img src={data.image.secure_url} alt="phone" />
        <div>
          <div>
            <p>{data.description}</p>
          </div>

          <span>{data.price}</span>
          <Link to={`/modify/${id}`}>Modify</Link>
          <ButtonDelete id={id} />
        </div>
      </div>
    </div>
  );
};

export default ProductById;
