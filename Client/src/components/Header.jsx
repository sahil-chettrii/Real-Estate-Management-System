import React from "react";
import "./Style/Header.css";

const Header = ({ onAddClick }) => {
  return (
    <div className="header">
      <h1>Estoria</h1>
      <button onClick={onAddClick}>+ Add listing</button>
    </div>
  );
};

export default Header;