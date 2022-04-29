import "../CSS/index.css";

import App from "../App";
import Register from "./Register";
import LogIn from "./LogIn";
import Nav from "./Nav";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [search_text, set_searched_text] = useState("");

  const searchHandler = (event) => {
    let value = event.target.value;
    set_searched_text(value);
    console.log(value);
  };

  const mapImages = () => {
    console.log(search_text);
    localStorage.setItem(
      "searchValue",
      document.querySelector(".search__box").value
    );
  };

  return {
    render: (
      <div>
        <Nav />
        <div className="search_container">
          <input
            type="text"
            id="box"
            // onChange={searchHandler}
            onClick={searchHandler}
            placeholder="Search anything..."
            className="search__box"
          />
          <a href="/images">
            <FontAwesomeIcon
              icon={faSearch}
              onClick={mapImages}
            ></FontAwesomeIcon>
          </a>
        </div>
        <header>
          <div className="overlay">
            <h1>Simple Pick</h1>
            <br />
            <br />
            <br />
          </div>
        </header>
      </div>
    ),
  };
}

export default Header;
