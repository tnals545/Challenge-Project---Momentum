import React from "react";
import "./picture.scss";

function Picture({ imageUrl }) {
  return (
    <div className="background">
      <img src={imageUrl} alt="" />
    </div>
  );
}

export default Picture;
