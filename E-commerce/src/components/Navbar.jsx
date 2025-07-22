import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">ShopEasy</h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </div>
  </nav>
);

export default Navbar;
