import React, { useContext, useEffect, useState } from "react";
import CustomWorkout from "../Workouts/CustomWorkout.jsx";
import { useHistory } from "react-router-dom";
import CustomMeal from "../Meals/CustomMeal.jsx";
import { AuthContext } from "../../AuthContext.js";
import Axios from "axios";

import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
const localizer = momentLocalizer(moment);
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
  let currentDay = new Date();
  currentDay = currentDay.toLocaleString().split(/[/,]/);
  const getOneUser = uid => {
    if (uid) {
      let URL = "https://levelupfitness.herokuapp.com/api/profile/";
      if (uid) {
        const reqURL = `${URL}${uid}`;
        Axios.get(reqURL)
          .then(({ data }) => {
            let c = data.username;
            localStorage.setItem("username", c);
            //////////////////////////////////////////////////////////////////////////
            let d = data.savedWorkouts;
            let f = d.filter((el, i) => {
              let formatDate = el.dateAdded.toLocaleString().split(/[-T]/);
              if (
                formatDate[0] === currentDay[2] &&
                formatDate[1] === `0${currentDay[0]}` &&
                formatDate[2] === currentDay[1] && formatDate[3]==="00:00:00.000Z"
              ) {
                return el;
              }
            });
            let temp3 = [];
            let temp1 = f.map(el => JSON.stringify(el));
            let temp2 = new Set(temp1);
            for (let item of temp2) {
              temp3.push(JSON.parse(item));
            }
            setcacheSavedWorkOuts(temp3);

            //////////////////////////////////////////////////////////////////////////
            let e = data.savedMeals;
            let g = e.filter((el, i) => {
              let formatDate = el.dateAdded.toLocaleString().split(/[-T]/);
              if (
                formatDate[0] === currentDay[2] &&
                formatDate[1] === `0${currentDay[0]}` &&
                formatDate[2] === currentDay[1] && formatDate[3]==="00:00:00.000Z"
              ) {
                return el;
              }
            });
            let temp6 = [];
            let temp4 = g.map(el => JSON.stringify(el));
            let temp5 = new Set(temp4);
            for (let item of temp5) {
              temp6.push(JSON.parse(item));
            }
            setcacheSavedMeals(temp6);
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
