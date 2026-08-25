import React from "react";
import "./Style/Header.css";
const Header = ({ onAddClick }) => {
  return (
    <nav className="navbar">
      <span className="logo">Estoria</span>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button onClick={onAddClick}>+ Add listing</button>
    </nav>
  );
};

export default Header;