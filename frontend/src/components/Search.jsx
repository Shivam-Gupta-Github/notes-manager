import React from "react";

function Search({ itemList }) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        name="search"
        placeholder="Search File"
      />
      <button className="search-button">Search </button>
    </div>
  );
}

export default Search;
