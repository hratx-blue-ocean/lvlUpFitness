import React, { useContext, useEffect, useState } from "react";
import CustomWorkout from "../Workouts/CustomWorkout.jsx";
import { useHistory } from "react-router-dom";
import CustomMeal from "../Meals/CustomMeal.jsx";
import { AuthContext } from "../../AuthContext.js";
import Axios from "axios";
import { setSessionCookie, getSessionCookie } from "../Cookies.js";

export default function Profile() {
	
  let reRoute = useHistory();
  const context = useContext(AuthContext);
  const { isAuth, uid, loggedOut, username, storeDataInContext } = context;

//   if(isAuth === false) {
// 	console.log("I am bas");
// 	reRoute.push("/")
//   }  
  const [axiosData, setAxiosData] = useState({
    username: "",
    savedWorkouts: "",
    savedMeals: ""
  });
  const [item, setItem] = useState(false);
  useEffect(() => {
    getOneUser();
  }, []);

  useEffect(() => {
    storeData(axiosData);
  }, [item]);

  const getOneUser = () => {
    let user = uid;
    let URL = "http://localhost:8000/api/profile/";
    const reqURL = URL + user;

    Axios.get(reqURL).then(({ data }) => {
      setAxiosData({
        username: data.username,
        savedWorkouts: data.savedWorkouts,
        savedMeals: data.savedMeals
      });
      setItem(true);
    });
  };

  const storeData = (axiosData)=>{
	  const {username, savedWorkouts, savedMeals} = axiosData
	  localStorage.setItem('username', JSON.stringify(username))
	  localStorage.setItem('savedWorkouts', JSON.stringify(savedWorkouts))
	  localStorage.setItem('savedMeals', JSON.stringify(savedMeals))
  }

  return (
    <React.Fragment>
      <CustomWorkout />
      <CustomMeal />
    </React.Fragment>
  );
}
