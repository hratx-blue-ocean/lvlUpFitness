import React, { useContext, useEffect, useState } from "react";
import CustomWorkout from "../Workouts/CustomWorkout.jsx";
import CustomMeal from "../Meals/CustomMeal.jsx";
import { AuthContext } from "../../AuthContext.js";
import Axios from "axios";

export default function Profile() {
  const context = useContext(AuthContext);
  const { isAuth, uid, loggedIn, loggedOut } = context;

  const [axiosData, setAxiosData] = useState({});

  useEffect(() => {
    getOneUser();
  }, []);

  useEffect(() => {
    storeData();
  }, []);

  const getOneUser = () => {
    let userPref;
    let user = uid;
    let URL = "http://localhost:8000/api/profile/";
    const reqURL = URL + user;

    Axios.get(reqURL).then(({ data }) => {
      setAxiosData(data);
      storeData(data);
    });
    //       .then(() => {

    //       });
  };

  const storeData = data => {
    console.log(data);
    if (data) {
      sessionStorage.setItem("username", JSON.stringify(data.username));
      sessionStorage.setItem("savedWorkout", data.savedWorkouts);
      sessionStorage.setItem("username", data.savedMeals);
      sessionStorage.setItem("username", data.favoriteWorkouts);
      sessionStorage.setItem("username", data.favoriteMeals);
      sessionStorage.setItem("username", data.createdWorkouts);
    }

    console.log(sessionStorage.getItem("username"));
  };

  return (
    <React.Fragment>
      <CustomWorkout />
      <CustomMeal />
    </React.Fragment>
  );
}
