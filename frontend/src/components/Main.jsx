import React from "react";
import Search from "./Search";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function Main() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
        setFilteredItems(data);
      });
  }, []);

  return (
    <div className="main">
      <Search />
      <div className="items shimmer-wrapper">
        {filteredItems.length === 0 ? (
          <Shimmer />
        ) : (
          items.map((item, index) => (
            <ItemCard key={index} name={item.name} url={item.url} />
          ))
        )}
      </div>
    </div>
  );
}

export default Main;
