import React from "react";

export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={url} alt={url} />
    </div>
  );
};
