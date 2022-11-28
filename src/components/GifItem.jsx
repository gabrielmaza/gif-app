import React from "react";

const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <img src={url} alt={`${title} img`} />
      <h3 className="p">{title}</h3>
    </div>
  );
};

export default GifItem;
