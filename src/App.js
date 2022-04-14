import logo from "./logo.svg";
import "./CSS/App.css";
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
// import ImagesService from "./services/ImagesService";
import { useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/photos";

const toggleShow = () => {
  console.log("clicked");
  var el = document.getElementById("box");
  el.classList.toggle("show");
};

var data = [];
const App = () => {
  useEffect(() => {
    Axios.get(URL).then((res) => {
      data = res.data;
      console.log(res.data);
    });
  });

  let location = useLocation();
  console.log(location);

  return (
    <div className="MAIN">
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/logIn" element={<LogIn />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};

export default App;
