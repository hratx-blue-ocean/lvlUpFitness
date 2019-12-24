import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import firebaseConfig from "./config.js";
import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp(firebaseConfig);

export default function SignIn( {location}) {
  
  const [email, password] = [location.state.email, location.state.password]
  const [isSignedIn, setSignIn] = useState(false)
  console.log([email, password])

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user)=>setSignIn(!!user))
    return () => {
      unregisterAuthObserver()
    };
  }, [isSignedIn])

  if (!isSignedIn) {
    return (
      <div>
        <h1>Level ☝️ Fitness</h1>
        <p>Please sign-in:</p>
        <div>
          {firebaseAuth=firebase.auth()}
        </div>
          
        
      </div>
    ) }else {
      return (
        <Redirect to ='/Nabbar'/>
      )
    }
  
  
}
