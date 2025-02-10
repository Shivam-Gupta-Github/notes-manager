import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ name, url }) {
  return (
    <div className="item">
      <img
        className="item-image"
        src="https://static.vecteezy.com/system/resources/previews/006/693/046/non_2x/download-pdf-icon-template-black-color-editable-download-pdf-icon-symbol-flat-sign-isolated-on-white-background-simple-logo-illustration-for-graphic-and-web-design-free-vector.jpg"
        alt={name}
      />
      <p className="item-name">{name}</p>
    </div>
  );
}

export default ItemCard;
