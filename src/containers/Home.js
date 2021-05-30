import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

// Components
import Cards from "../components/Cards";

// Pictures
import hero from "../assets/img/hero.jpg";
import Loader from "../components/Loader";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "https://bifrost-backend-test.herokuapp.com/product"
        );
        if (response.data) {
          setData(response.data);
          setIsLoading(false);
        } else {
          alert("Something went wrong");
        }
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="hero">
        <img src={hero} alt="hero" />
      </div>
      <div className="container">
        <div className="cardsWrapper">
          {data.map((product) => {
            return (
              <Link
                key={product._id}
                to={`/product/${product._id}`}
                className="link"
              >
                <Cards data={product} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
