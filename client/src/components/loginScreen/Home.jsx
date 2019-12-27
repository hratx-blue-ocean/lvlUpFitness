import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import {
  faEye,
  faEyeSlash,
  faBackspace
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./loginScreen.css";

const Home = () => {
  const [newUser, setNewUserStatus] = useState(false);
  const [signIn, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reveal, setReveal] = useState(false);

  if (newUser === true) {
    return <Redirect push to="/SignUp" />;
  } else if (signIn === true) {
    return (
      <Redirect
        to={{
          pathname: "/SignIn",
          state: { email: email, password: password }
        }}
      />
    );
  } else {
    return (
      <div className="login-form">
        <div className="title">Log In</div>
        <div className="email-field">
          <input
            className="email"
            type="email"
            name="email"
            placeholder="email@domain.com"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          ></input>
          <div className="email-clear" onClick={() => setEmail("")}>
            <FontAwesomeIcon icon={faBackspace} size="2x" />
          </div>
        </div>

        <div className="password-field">
          <input
            className="password"
            type={reveal ? "text" : "password"}
            name="password"
            placeholder="********"
            value={password}
            onChange={event => setPassword(event.target.value)}
          ></input>
          <div className="show-password" onClick={() => setReveal(!reveal)}>
            {reveal ? (
              <FontAwesomeIcon icon={faEye} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} size="2x" />
            )}
          </div>
        </div>

        <div className="sign-in">
          <input
            className="sign-in-text"
            type="readonly"
            placeholder="Login"
            onClick={() => {
              setLogin(true);
            }}
          ></input>
        </div>

        <div className="forgot-password">Forgot-Password</div>
        <div className="sign-up" onClick={() => setNewUserStatus(true)}>
          Sign-Up
        </div>
       
          
       
      </div>
    );
  }
};

export default Home;
