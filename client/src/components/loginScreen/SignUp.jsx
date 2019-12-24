import React, { useState, useEffect } from "react";
import {
  faEye,
  faEyeSlash,
  faBackspace
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./loginScreen.css";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isStrong, setRePasswordStatus] = useState(false);
  const [signUpComplete, setSignUpComplete] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [validationRequirement, setValidationRequirement] = useState(false);
  const [validationClass, setValidationClass] = useState(
    "password-requirement-inactive"
  );
  const [validCheck, setValidCheck] = useState({
    lower: "invalid",
    upper: "invalid",
    number: "invalid",
    len: "invalid"
  });

  useEffect(() => {
	  console.log('from effect')
	  validatePassword(password, validCheck)
	 
  }, [password])

  const validatePassword = (password, validCheck) => {
    if (password.match(/[a-z]/g)) {
      validCheck.lower = "valid";
      setValidCheck(validCheck);
    }
    if (password.match(/[A-Z]/g)) {
      validCheck.upper = "valid";
      setValidCheck(validCheck);
    }
    if (password.match(/[0-9]/g)) {
      validCheck.number = "valid";
      setValidCheck(validCheck);
    }
    if (password.length >= 8) {
      validCheck.len = "valid";
      setValidCheck(validCheck);
    }
  };
  console.log("Check for update", validCheck);
  return (
    <div className="signup-form">
      <div className="title">Create your Account</div>

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

      <div className="first-name-field">
        <input
          className="first-name"
          type="text"
          name="first-name"
          placeholder="Sujan"
          value={firstName}
          onChange={event => setFirst(event.target.value)}
        />
        <div className="first-name-clear" onClick={() => setFirst("")}>
          <FontAwesomeIcon icon={faBackspace} size="2x" />
        </div>
      </div>

      <div className="last-name-field">
        <input
          className="last-name"
          type="text"
          name="last-name"
          placeholder="Dahal"
          value={lastName}
          onChange={event => setLast(event.target.value)}
        />
        <div className="last-name-clear" onClick={() => setLast("")}>
          <FontAwesomeIcon icon={faBackspace} size="2x" />
        </div>
      </div>

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

      <div className="password-field">
        <input
          className="password"
          type={reveal ? "text" : "password"}
          name="password"
          placeholder="********"
          value={password}
          onFocus={event => {
            setValidationRequirement(true),
              setValidationClass("password-requirement-active");
          }}
          onChange={event => {
            setPassword(event.target.value);
            
		  }}
		  onKeyDown = {()=>validatePassword(password, validCheck)}
        />
        <div className="show-password" onClick={() => setReveal(!reveal)}>
          {reveal ? (
            <FontAwesomeIcon icon={faEye} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} size="2x" />
          )}
        </div>
      </div>

      <div className="re-password-field">
        <input
          className="re-password"
          type={reveal ? "text" : "password"}
          name="repassword"
          placeholder="********"
          value={rePassword}
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

      <div className="create-account">
        <input
          className="create-account-text"
          type="readonly"
          placeholder="Create Account"
          onClick={() => {
            setSignUpComplete(true);
          }}
        />
      </div>
      <div className={validationClass}>
        <h3>Password Requirement:</h3>
        <p id="letter" className={validCheck.lower}>
          A <b>lowercase</b> letter <p>{validCheck.lower}</p>
        </p>
        <p id="capital" className={validCheck.upper}>
          A <b>capital (uppercase)</b> letter<p>{validCheck.upper}</p>
        </p>
        <p id="number" className={validCheck.number}>
          A <b>number</b><p>{validCheck.number}</p>
        </p>
        <p id="length" className={validCheck.len}>
          Minimum <b>8 characters</b><p>{validCheck.length}</p>
        </p>
        <p id="same" className={validCheck.same}>
          <b>Must </b> match
        </p>
      </div>
    </div>
  );
}
