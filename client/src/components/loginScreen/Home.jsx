import React, { useState, useEffect, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import firebase from "../../firebase.js";
import {
  faEye,
  faEyeSlash,
  faBackspace
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./loginScreen.css";
import { AuthContext } from "../../AuthContext.js";


const Home = () => {
  let reRoute = useHistory();
  const context = useContext(AuthContext);
  const { isAuth, loggedIn } = context;

  isAuth ? reRoute.push("/Profile") : null;

  const [email, setemail] = useState("");
  const [emailClass, setemailClass] = useState("email");
  const [password, setPassword] = useState("");
  const [pwClass, setPWClass] = useState("password");
  const [reveal, setReveal] = useState(false);
  /**************************************************** */
  const [newUser, setNewUserStatus] = useState(false);
  const [authStatus, setAuthStatus] = useState(false);


  const authenticateUser = (email, password) => {
    if (email.length > 0 && password.length > 0) {
      let a = new Promise((resolve, reject) => {
        resolve(firebase.login(email, password));
      })
        .then(() => {
          let info = firebase.auth.currentUser.uid;
          loggedIn(info);
        })
        .catch(error => {
          // Handle Errors here.
          console.log([error.code, error.message]);
          error.code === "auth/user-not-found"
            ? setemailClass("email-error")
            : setemailClass("email");
          error.code === "auth/wrong-password"
            ? setPWClass("password-error")
            : setPWClass("password");
        });
    }
  };

  if (authStatus === true) {
    return <Redirect to="/Navbar" />;
  } else if (newUser === true) {
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
            onChange={event => setemail(event.target.value)}
          ></input>
          <div className="email-clear" onClick={() => setemail("")}>
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
        <div className="sign-in">
          <div
            className="sign-in-text"
            type="readonly"
            onClick={() => {
              authenticateUser(email, password);
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
