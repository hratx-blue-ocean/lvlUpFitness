

import React,{useContext, useEffect} from "react";
import CustomWorkout from "../Workouts/CustomWorkout.jsx";
import { AuthContext } from "../../AuthContext.js";
import Axios from "axios"

export default function Profile() {
  const context = useContext(AuthContext);
  const { isAuth, uid, loggedIn, loggedOut } = context;

  useEffect(() => {
	  getOneUser()
  }, [])

  const getOneUser=()=>{
	  let user = uid;
	  console.log(user)
	  let URL = "http://localhost:8000/api/profile/"
	  const reqURL = URL + user;
	  console.log(reqURL);
	  
	  Axios.get(reqURL)
	  .then(({data})=>{
		  console.log(data);
		  
	  })
  }

  return (
    <div className="user">
      <CustomWorkout />
    </div>
  );

}
