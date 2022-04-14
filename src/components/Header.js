import "../CSS/index.css";

import App from "../App";
import Register from "./Register";
import LogIn from "./LogIn";
import Nav from "./Nav";

function Header() {
  return (
    <div>
      <Nav />
      <div className="search_container">
        <input
          type="text"
          id="box"
          placeholder="Search anything..."
          className="search__box"
        />
        <i
          className="fas fa-search search__icon"
          id="icon"
          // onClick="toggleShow()"
        ></i>
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
  );
}

export default Header;
