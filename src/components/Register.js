import "../CSS/index.css";
import "../CSS/register.css";
import "../CSS/login.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

class User {
  constructor(username, pw) {}
}

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

function Register() {
  waitForElm("#indicator").then((elm) => {
    elm.style.left = "70%";
  });
  const [username, setUsername] = useState("");
  const [pw, setPassword] = useState("");
  const [confirmed_pw, setConfirmedPassword] = useState("");

  const clearInput = () => {};

  const handleUserNameChange = (event) => {
    let name = event.target.value;
    console.log(name);
    setUsername(name);
  };

  const handlePasswordChange = (event) => {
    let pw = event.target.value;
    console.log(pw);
    setPassword(pw);
  };

  const handlePWConfirmChange = (event) => {
    let con_pw = event.target.value;
    console.log(con_pw);
    setConfirmedPassword(con_pw);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("been there");
    // const login = this.state.newUser.email.trim();
    // const password = this.state.newUser.password.trim();
    // const passwordConfirmation = this.state.newUser.passwordConfirmation.trim();
    // if (password.length && password === passwordConfirmation)
    //   this.props.signUp(login, password);
  };

  return (
    <div id="login" style={{ opacity: 1 }}>
      <h3>Register</h3>
      <form className="login-form" onSubmit={handleSubmit}>
        <span>
          <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
        </span>
        <input
          autoFocus
          maxLength="25"
          onChange={handleUserNameChange}
          placeholder="Your user-name"
          type="text"
          value={username}
          required
        />
        <span>
          <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
        </span>
        <input
          autoComplete="off"
          maxLength="8"
          onChange={handlePasswordChange}
          placeholder="Password"
          type="password"
          value={pw}
          required
        />
        <span>
          <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>
        </span>
        <input
          autoComplete="off"
          maxLength="8"
          onChange={handlePWConfirmChange}
          placeholder="Confirm your Password"
          type="password"
          value={confirmed_pw}
          required
        />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default Register;
