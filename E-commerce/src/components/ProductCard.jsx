import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.thumbnail} alt={product.title} />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <button>Add to Cart</button>
  </div>
);

export default ProductCard;
