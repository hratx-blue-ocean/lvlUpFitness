import React, { useState } from "react";
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
  /* passsword validation hooks*/
  const [password, setPassword] = useState("");
  const [reveal, setReveal] = useState(false);
  const [rePassword, setRePassword] = useState("");
  const [isStrong, setStrongPW] = useState(false);
  const [validationClass, setValidationClass] = useState(
    "password-requirement-inactive"
  );
  const [validCheck, setValidCheck] = useState({
    lower: "invalid",
    upper: "invalid",
    number: "invalid",
    len: "invalid"
  });
  const [isSame, setSame] = useState(false)

  const [signUpComplete, setSignUpComplete] = useState(true);
  const validatePassword = () => {
    if (password.match(/[a-z]/g)) {
      validCheck.lower = "valid";
      setValidCheck(validCheck);
    } else {
      validCheck.lower = "invalid";
      setValidCheck(validCheck);
    }
    if (password.match(/[A-Z]/g)) {
      validCheck.upper = "valid";
      setValidCheck(validCheck);
    } else {
      validCheck.upper = "invalid";
      setValidCheck(validCheck);
    }
    if (password.match(/[0-9]/g)) {
      validCheck.number = "valid";
      setValidCheck(validCheck);
    } else {
      validCheck.number = "invalid";
      setValidCheck(validCheck);
    }
    if (password.length >= 8) {
      validCheck.len = "valid";
      setValidCheck(validCheck);
    } else {
      validCheck.len = "invalid";
      setValidCheck(validCheck);
    }
    if (Object.values(validCheck).includes("invalid")) {
      setStrongPW(false);
    } else {
      setStrongPW(true);
    }
  };
  const checkSame = (a, b)=>{
	  a===b? setSame(true):setSame(false)
  }
  const formComplete = ()=>{
	  console.log()
	  if (isStrong && isSame){
		  setSignUpComplete(false)
	  }
	  else setSignUpComplete(true)
  }
  

  return (
    <div className="signup-form" onChange = {()=> formComplete()}>
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
          placeholder="John"
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
          placeholder="Doe"
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
          onFocus={() => setValidationClass("password-requirement-active")}
          onChange={event => {
            setPassword(event.target.value);
		  }}
		  onKeyUp={()=> validatePassword()}
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
          disabled={!isStrong}
          onChange={event => {
            setRePassword(event.target.value)
            
		  }}
		  onKeyDown={()=>checkSame(password, rePassword)}
        />
        <div className="show-password-again" onClick={() => setReveal(!reveal)}>
          {reveal ? (
            <FontAwesomeIcon icon={faEye} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} size="2x" />
          )}
        </div>
      </div>

      <button className="create-account" disabled = {signUpComplete}>
        <div
          className="create-account-text"
          type="readonly"
         
        >  Create Account</div>
      </button>

      <ul className={validationClass}>
        <h3>Password Requirement:</h3>
        <li className={validCheck.lower}>
          A <b>lowercase</b> letter
        </li>
        <li className={validCheck.upper}>
          A <b>capital (uppercase)</b> letter
        </li>
        <li className={validCheck.number}>
          A <b>number</b>
        </li>
        <li className={validCheck.len}>
          Minimum <b>8 characters</b>
        </li>
        <li className={validCheck.same}>
          <b>Must </b> match
        </li>
      </ul>
    </div>
  );
}
