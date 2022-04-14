import "../CSS/index.css";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Register from "./Register";
import Home from "./Register";

function Nav() {
  return (
    <div className="nav_container">
      <nav>
        <a href="/home">Home</a>
        <a href="/login">Log-In</a>
        <a href="/register">Register</a>

        <div id="indicator"></div>
      </nav>
    </div>
  );
}

export default Nav;
