import React, { useState, useEffect } from "react";
import Axios from "axios";

function Images(props) {
  var i = 0;
  const searchValue = localStorage.getItem("searchValue");
  console.log(searchValue);

  return (
    <div id="imageSearch">
      <h1>Results:</h1>
      <div className="images_wrapper">
        {props.images
          .filter(
            (img) =>
              img.name.toLowerCase().includes(searchValue.toLowerCase()) ||
              img.category.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((filteredImages) => (
            <img key={filteredImages.char_id} src={filteredImages.img} />
          ))}
      </div>
    </div>
  );
}

export default Images;
