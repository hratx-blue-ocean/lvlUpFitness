import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import config from "./config";
import * as firebase from "firebase/app";
import "firebase/auth";



export default function SignIn( {location}) {
  
  const [email, password] = [location.state.email, location.state.password]

  
  
  
}
