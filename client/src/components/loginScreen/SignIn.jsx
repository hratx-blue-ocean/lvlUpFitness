import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import firebaseConfig from "./config.js";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp(firebaseConfig);


class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false 
    };
    this.uiConfig = {
     
      signInFlow: "popup",
     
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
       
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
      }
    };
  }
  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user => this.setState({ isSignedIn: !!user }));
  }
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>Level ☝️ Fitness</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      );
    }
    return (
      <Redirect to ='/Home'render={() => <Home {...props} isSignedIn={true} />}/>
     
     
    );
  }
}




export default SignIn;
