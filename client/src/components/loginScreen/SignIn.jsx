import React, { useState, useEffect } from "react";
import firebase from "../../firebase.js";
import { Redirect } from "react-router-dom";

export default function SignIn({ location }) {
  const [email, password] = [location.state.email, location.state.password];
  const [isAuthenticated, setAuthentication] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false)
  const [wrongPassword, setWrongPassword] = useState(false)
  const [userInfo, setUserInfo] = useState("");
  

  

  useEffect(() => {
    
    authenticateUser(email, password);
    
    
  }, [email])

  const authenticateUser = (email, password) => {
    let a = new Promise((resolve, reject) => {
      resolve(firebase.login(email, password));
    })
      .then(() => {
        setAuthentication(true);
        setUserInfo(a);
      })
      .catch(error => {
        setAuthentication(false);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode = 'auth/wrong-password'){
          setWrongPassword(true)
        }
        console.error("I am messed up", errorCode, errorMessage);
      });
  };

  if (isAuthenticated === true) {
    return (
      <Redirect
        to={{
          pathname: "/Navbar",
          state: { a:userInfo }
        }}
      />
    );
  }
  if (setWrongPassword(true)){
    <Redirect
        to={{
          pathname: "/Home",
          state: { email: email, password: password}
        }}
      />

  }
}
