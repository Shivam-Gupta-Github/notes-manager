import React from "react";

function Shimmer() {
  return (
    <div className="shimmer-wrapper">
      {Array.from(Array(10).keys()).map((items) => {
        return <div key={items} className="shimmer"></div>;
      })}
    </div>
  );
}

export default Shimmer;
