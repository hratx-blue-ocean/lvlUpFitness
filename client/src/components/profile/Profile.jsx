import React, { useContext, useEffect, useState } from "react";
import CustomWorkout from "../Workouts/CustomWorkout.jsx";
import { useHistory } from "react-router-dom";
import CustomMeal from "../Meals/CustomMeal.jsx";
import { AuthContext } from "../../AuthContext.js";
import Axios from "axios";

export default function Profile() {
  let reRoute = useHistory();
  const context = useContext(AuthContext);
  const { isAuth, uid } = context;
  const [cachesavedWorkouts, setcacheSavedWorkOuts] = useState("");
  const [cachesavedMeals, setcacheSavedMeals] = useState("");
  if (!isAuth) {
    reRoute.push("/");
  }

  useEffect(() => {
    getOneUser(uid);
  }, [uid]);

  const getOneUser = uid => {
    // console.log("jkfahklajds", uid)
    if (uid) {
      let URL = "https://levelupfitness.herokuapp.com/api/profile/";
      if (uid) {
        const reqURL = `${URL}${uid}`;
        Axios.get(reqURL)
          .then(({ data }) => {
            let c = data.username;
            localStorage.setItem("username", c);

            let d = data.savedWorkouts;
            let f = d.filter((el, i) => {
              let dbDate = new Date(el.dateAdded).toUTCString();
              dbDate = dbDate.split(" ");
              let today = new Date().toUTCString();
              today = today.split(" ");
              let temp = " ";
              if (
                today[0] === dbDate[0] &&
                today[1] === dbDate[1] &&
                today[2] === dbDate[2]
              ) {
                temp = el;
              }
              return temp;
            });

            setcacheSavedWorkOuts(f);
            let e = data.savedMeals;
            let g = e.filter((el, i) => {
              let dbDate = new Date(el.dateAdded).toUTCString();
              dbDate = dbDate.split(" ");
              let today = new Date().toUTCString();
              today = today.split(" ");
              let temp = "";
              if (
                today[0] === dbDate[0] &&
                today[1] === dbDate[1] &&
                today[2] === dbDate[2]
              ) {
                temp = el;
              }
              return temp;
            });
            setcacheSavedMeals(g);
          })
          .catch(error => {
            console.error(error.message);
          });
      }
    }
  };

  return (
    <React.Fragment>
      <CustomWorkout savedWorkouts={cachesavedWorkouts} />
      <CustomMeal savedMeals={cachesavedMeals} />
    </React.Fragment>
  );
}
