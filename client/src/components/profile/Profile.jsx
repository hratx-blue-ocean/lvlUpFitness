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
  const [cachesavedWorkouts, setcacheSavedWorkOuts] = useState('');
  const [cachesavedMeals, setcacheSavedMeals] = useState('');

  const [item, setItem] = useState(false);
  useEffect(() => {
    getOneUser(uid);
  }, []);

  //   useEffect(() => {
  //     storeData((cacheuserName, cachesavedWorkouts, cachesavedMeals));
  //   }, [item]);

  const getOneUser = uid => {
    let URL = "http://localhost:8000/api/profile/";
    const reqURL = URL + uid;

    Axios.get(reqURL).then(({ data }) => {
      let c = data.username;
      setcacheUserName(c);

      let d = data.savedWorkouts;
      
      setcacheSavedWorkOuts(d);
      let e = data.savedMeals;
      setcacheSavedMeals(e);
    });
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
      <CustomWorkout savedWorkouts={cachesavedWorkouts||null} />
      <CustomMeal savedMeals={cachesavedMeals}/>
    </React.Fragment>
  );
}

// savedWorkouts={JSON.parse(localStorage.getItem("savedWorkouts"))}
// savedMeals={JSON.parse(localStorage.getItem("savedMeals"))}
