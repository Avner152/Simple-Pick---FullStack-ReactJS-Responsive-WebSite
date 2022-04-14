import "../CSS/index.css";
import "../CSS/login.css";
import React, { useState } from "react";

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

function LogIn() {
  waitForElm("#indicator").then((elm) => {
    elm.style.left = "38%";
  });
  const [email, setEmail] = useState("");
  const [pw, setPassword] = useState("");

  const handleEmailChange = (event) => {
    let value = event.target.value;
    setEmail(value);
    console.log(value);
  };

  const handlePasswordChange = (event) => {
    let value = event.target.value;
    setPassword(value);
    // console.log(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("been there done that");
    // alert(`Submitting Email ${email}`);
    setEmail("");
    setPassword("");

  };

  return (
    <div className="loginWrapper">
      <div id="login">
        <h3>Log-In</h3>
        <div>
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="fa fa-user"></span>
            <input
              value={email}
              autoFocus
              maxLength="25"
              onChange={handleEmailChange}
              placeholder="Email"
              type="email"
            // required
            />
            <span className="fa fa-lock"></span>
            <input
              autoComplete="off"
              maxLength="8"
              onChange={handlePasswordChange}
              placeholder="Password"
              type="password"
              value={pw}
            // required
            />
            <input type="submit" value="Log in" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
