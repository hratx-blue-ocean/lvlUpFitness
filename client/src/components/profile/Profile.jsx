import React, { useContext, useEffect, useState } from "react";
import CustomWorkout from "../Workouts/CustomWorkout.jsx";
import { useHistory } from "react-router-dom";
import CustomMeal from "../Meals/CustomMeal.jsx";
import { AuthContext } from "../../AuthContext.js";
import Axios from "axios";

export default function Profile() {
  let reRoute = useHistory();
  const context = useContext(AuthContext);
  const { isAuth, uid, loggedOut, storeDataInContext } = context;
  const [cacheuserName, setcacheUserName] = useState();
  const [cachesavedWorkouts, setcacheSavedWorkOuts] = useState("");
  const [cachesavedMeals, setcacheSavedMeals] = useState("");

  const [item, setItem] = useState(false);
  useEffect(() => {
    getOneUser(uid);
  }, []);

  //   useEffect(() => {
  //     storeData((cacheuserName, cachesavedWorkouts, cachesavedMeals));
  //   }, [item]);

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
            setcacheUserName(c);
            let d = data.savedWorkouts;
            let f = d.filter((el, i) => {
              let dbDate = new Date(el.dateAdded).toUTCString();
              dbDate = dbDate.split(" ");
              let today = new Date().toUTCString();
              today = today.split(" ");
              if (
                today[0] === dbDate[0] &&
                today[1] === dbDate[1] &&
                today[2] === dbDate[2]
              ) {
                return el;
              }
            });

            localStorage.setItem("savedWorkouts", JSON.stringify(f));
            setcacheSavedWorkOuts(f);
            let e = data.savedMeals;
            let g = e.filter((el, i) => {
              let dbDate = new Date(el.dateAdded).toUTCString();
              dbDate = dbDate.split(" ");
              let today = new Date().toUTCString();
              today = today.split(" ");
              if (
                today[0] === dbDate[0] &&
                today[1] === dbDate[1] &&
                today[2] === dbDate[2]
              ) {
                return el;
              }
            });
            // console.log(a, g)
            setcacheSavedMeals(g);
          })
          .catch(error => {
            console.error(error.message);
          });
      }
    }
  };

  //   const storeData = (a, b, c) => {
  // 	console.log("phonasdfasdf",a);
  // 	console.log("waterasdfasdf",b);
  // 	console.log("dongleasdfasdf",c);

  //     localStorage.setItem("savedMeals", JSON.stringify(a));
  //     localStorage.setItem("savedWorkouts", JSON.stringify(b));
  //     localStorage.setItem("savedMeals", JSON.stringify(c));
  //   };

  return (
    <React.Fragment>
      <CustomWorkout savedWorkouts={cachesavedWorkouts} />
      <CustomMeal savedMeals={cachesavedMeals} />
    </React.Fragment>
  );
}

// savedWorkouts={JSON.parse(localStorage.getItem("savedWorkouts"))}
// savedMeals={JSON.parse(localStorage.getItem("savedMeals"))}
