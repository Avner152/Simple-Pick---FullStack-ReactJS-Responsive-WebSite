import logo from "./logo.svg";
import "./CSS/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import Images from "./components/Images";

import ImagesService from "./services/ImagesService";
import React, { useState, useEffect } from "react";

const URL = "https://www.breakingbadapi.com/api/characters";
var text;

const toggleShow = () => {
  console.log("clicked");
  var el = document.getElementById("box");
  el.classList.toggle("show");
};

var data = [];
const App = () => {
  const [images, setImages] = useState([]);

  const { render } = Header(text);

  // useEffect(() => {
  //   Axios.get(URL).then((res) => {
  //     data = res.data;

  //     console.log(res.data);
  //   });
  // });

  useEffect(() => {
    Axios.get(URL).then((res) => {
      setImages(res.data);
      console.log(res.data);
    });
  }, []);

  let location = useLocation();
  // console.log(location);

  return (
    <div className="MAIN">
      {render}

      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/logIn" element={<LogIn />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/images" element={<Images images={images} />}></Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};

export default App;
