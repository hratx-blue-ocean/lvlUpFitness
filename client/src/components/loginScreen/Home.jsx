import React, { useState, useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";
import firebase from "../../firebase.js";
import {
  faEye,
  faEyeSlash,
  faBackspace
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./loginScreen.css";

const Home = () => {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [newUser, setNewUserStatus] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [emailClass, setEmailClass] = useState("email");
  const [password, setPassword] = useState("");
  const [pwClass, setPWClass] = useState("password");
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    authenticateUser(email, password);
  }, [signIn]);

  const authenticateUser = (email, password) => {
    if (email.length > 0 && password.length > 0) {
      let a = new Promise((resolve, reject) => {
        resolve(firebase.login(email, password));
      })
        .then(() => {
          setAuthentication(true);
          setUserInfo(a);
        })
        .catch(error => {
          // Handle Errors here.
          console.log([error.code, error.message]);
          (error.code === "auth/user-not-found")? 
            setEmailClass("email-error"):setEmailClass("email");
          (error.code === "auth/wrong-password") ?
            setPWClass("password-error"):setPWClass("password");
          
        });
      setSignIn(false);
    }
  };
  if (isAuthenticated === true) {
    return (
      <Redirect
        to={{
          pathname: "/Navbar",
          state: { a: userInfo }
        }}
      />
    );
  }
  if (newUser === true) {
    return <Redirect push to="/SignUp" />;
  } else {
    return (
      <div className="login-form">
        <div className="title">Log In</div>
        <div className="email-field">
          <input
            className={emailClass}
            type="email"
            name="email"
            placeholder="email@domain.com"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
            className={pwClass}
            type={reveal ? "text" : "password"}
            name="password"
            placeholder="********"
            value={password}
            onChange={event => setPassword(event.target.value)}
          ></input>
          <div
            className="show-password"
            onMouseDown={() => setReveal(!reveal)}
            onMouseUp={() => setReveal(!reveal)}
          >
            {reveal ? (
              <FontAwesomeIcon icon={faEye} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} size="2x" />
            )}
          </div>
        </div>
        <div className="sign-in" disabled={signIn}>
          <div
            className="sign-in-text"
            type="readonly"
            onClick={() => {
              setSignIn(true);
            }}
          >
            Sign In
          </div>
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
