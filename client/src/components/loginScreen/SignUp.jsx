import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { useHistory } from "react-router-dom";
import {
  faEye,
  faEyeSlash,
  faBackspace
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./loginScreen.css";
import firebase from "../../firebase.js";

const SignUp = () => {
  let reRoute = useHistory();

  const context = useContext(AuthContext);
  const { isAuth, loggedIn } = context;
  isAuth === true ? reRoute.push("/Navbar") : null;

  const [userName, setUserName] = useState("");
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");
  /* passsword validation hooks*/
  const [password, setPassword] = useState("");
  const [reveal, setReveal] = useState(false);
  const [rePassword, setRePassword] = useState("");
  const [isStrong, setStrongPW] = useState(false);
  const [validationClass, setValidationClass] = useState(
    "password-requirement-inactive"
  );
  const [lower, setLower] = useState("invalid");
  const [upper, setUpper] = useState("invalid");
  const [number, setNumber] = useState("invalid");
  const [len, setLen] = useState("invalid");
  const [isSame, setSame] = useState("invalid");
  const [signUpComplete, setSignUpComplete] = useState(false);

  /*useEffect to validate form complete requirement*/
  useEffect(() => {
    checkEmail(email);
    validatePassword(password, lower, upper, number, len);
    checkSame(password, rePassword);
    formComplete(validEmail, isStrong, isSame);
  }, [email, password, rePassword, isSame, isStrong]);

  const checkEmail = email => {
    email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g)
      ? setValidEmail("valid")
      : setValidEmail("invalid");
  };

  const validatePassword = (password, lower, upper, number, len) => {
    password.match(/[a-z]/g) ? setLower("valid") : setLower("invalid");
    password.match(/[A-Z]/g) ? setUpper("valid") : setUpper("invalid");
    password.match(/[0-9]/g) ? setNumber("valid") : setNumber("invalid");
    password.length >= 8 ? setLen("valid") : setLen("invalid");
    lower === "invalid" &&
    upper === "invalid" &&
    number === "invalid" &&
    len === "invalid"
      ? setStrongPW(false)
      : setStrongPW(true);
  };

  const checkSame = (password, rePassword) => {
    password === rePassword && (password !== "" || rePassword !== "")
      ? setSame("valid")
      : setSame("invalid");
  };
  const formComplete = (validEmail, isStrong, isSame) => {
    validEmail === "valid" && isStrong === true && isSame === "valid"
      ? setSignUpComplete(true)
      : setSignUpComplete(false);
  };

  const handleCreateUser = (userNameToSend, emailToSend, passswordToSend) => {
    const regStatus = new Promise((resolve, reject) => {
      resolve(firebase.register(userNameToSend, emailToSend, passswordToSend));
    }).then(() => {
      setTimeout(() => {
        loggedIn();
      }, 2000);
    });
  };

  return (
    <div className="signup-form">
      <h1>{context.isAuth.toString()}</h1>
      <div className="title">Create your Account</div>
      <div className="input-label">Username: </div>
      <div className="username-field">
        <input
          className="username"
          type="text"
          name="username"
          placeholder="morning0wl"
          value={userName}
          onChange={event => setUserName(event.target.value)}
        />
        <div className="username-clear" onClick={() => setUserName("")}>
          <FontAwesomeIcon icon={faBackspace} size="2x" />
        </div>
      </div>

      <div className="input-label">First Name: </div>
      <div className="first-name-field">
        <input
          className="first-name"
          type="text"
          name="first-name"
          placeholder="John"
          value={firstName}
          onChange={event => setFirst(event.target.value)}
        />
        <div className="first-name-clear" onClick={() => setFirst("")}>
          <FontAwesomeIcon icon={faBackspace} size="2x" />
        </div>
      </div>

      <div className="input-label">Last Name: </div>
      <div className="last-name-field">
        <input
          className="last-name"
          type="text"
          name="last-name"
          placeholder="Doe"
          value={lastName}
          onChange={event => setLast(event.target.value)}
        />
        <div className="last-name-clear" onClick={() => setLast("")}>
          <FontAwesomeIcon icon={faBackspace} size="2x" />
        </div>
      </div>

      <div className="input-label">Email Adress: </div>
      <div className="email-field">
        <input
          className="email"
          type="email"
          name="email"
          placeholder="email@domain.com"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <div className="email-clear" onClick={() => setEmail("")}>
          <FontAwesomeIcon icon={faBackspace} size="2x" />
        </div>
      </div>

      <div className="input-label">Password: </div>
      <div className="password-field">
        <input
          className="password"
          type={reveal ? "text" : "password"}
          name="password"
          placeholder="********"
          value={password}
          onFocus={() => setValidationClass("password-requirement-active")}
          onChange={event => setPassword(event.target.value)}
        />
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

      <div className="input-label">Re Type Password: </div>
      <div className="re-password-field">
        <input
          className="re-password"
          type={reveal ? "text" : "password"}
          name="repassword"
          placeholder="********"
          value={rePassword}
          disabled={!isStrong}
          onChange={event => setRePassword(event.target.value)}
        />
        <div className="show-password-again" onClick={() => setReveal(!reveal)}>
          {reveal ? (
            <FontAwesomeIcon icon={faEye} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} size="2x" />
          )}
        </div>
      </div>

      <div className="create-account" disabled={!signUpComplete}>
        <div
          className="create-account-text"
          type="readonly"
          onClick={() => handleCreateUser(userName, email, password)}
        >
          Create Account
        </div>
      </div>

      <ul className={validationClass}>
        <h3>Password Requirement:</h3>
        <li className={lower}>
          A <b>lowercase</b> letter
        </li>
        <li className={upper}>
          A <b>capital (uppercase)</b> letter
        </li>
        <li className={number}>
          A <b>number</b>
        </li>
        <li className={len}>
          Minimum <b>8 characters</b>
        </li>
        <li className={isSame}>
          <b>Must </b> match
        </li>
      </ul>
    </div>
  );
};

export default SignUp;
