import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ name, url }) {
  return (
    <div className="item">
      <img
        className="item-image"
        src="https://cdn.pixabay.com/photo/2017/03/08/21/20/pdf-2127829_640.png"
        alt={name}
      />
      {/* <Link to="sahkgdjsf">{name}</Link> */}
    </div>
  );
}

export default ItemCard;
