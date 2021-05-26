import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("http://localhost:3100/product");

        setData(response.data);
        console.log(response.data);
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
    <div>
      <div className="hero"></div>

      <div className="container">
        {data.map((product) => {
          return (
            <Link key={product._id} to={`/product/${product._id}`}>
              {product.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
