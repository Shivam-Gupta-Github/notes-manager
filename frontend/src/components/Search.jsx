import React from "react";

function Search({ itemList }) {
  return (
    <div>
      <input
        className="search"
        type="text"
        name="search"
        placeholder="Search File"
      />
      <button>Search </button>
    </div>
  );
}

export default Search;
