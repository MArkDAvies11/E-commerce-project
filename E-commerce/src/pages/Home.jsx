import React from "react";
import ProductList from "../components/ProductList";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to ShopEasy</h2>
      <ProductList />
    </div>
  );
};

export default Home;
