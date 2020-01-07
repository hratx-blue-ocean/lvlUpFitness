import React, { useState, useEffect } from "react";
// import { faRoute } from '@fortawesome/free-solid-svg-icons';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import App from '../../App';
import Axios from "axios";
import { Redirect } from "react-router-dom";
import wo from "./wo.jsx";
import "./CustomWorkout.css";

const CustomWorkout = () => {
    const [isTileEmpty, setIsTileEmpty] = useState(false);
  const [addWorkoutClicked, setAddWorkout] = useState(false);
  const [workOutOfDay, setWorkOutOfDay] = useState("No Workout Plan:");
  const [axiosData, setAxiosData] = useState([]);
  const [workouts, setWorkouts] = useState("");
  console.log(addWorkoutClicked);

  if (addWorkoutClicked) {
    return <Redirect to="/Navbar" />;
  }

  useEffect(() => {
    getWorkout();
  }, []);

  const getWorkout = () => {
    Axios.get("http://localhost:8000/api/cardio")
      .then(({ data }) => {
        setAxiosData(data);
        setWorkOutOfDay(data[0].muscleGroup)
      })
      .catch(() => {
        console.error("Api call from cardiovascular failed");
      });
  };
  

  const newWorkout = () => {};
  const addWorkout = () => {};
  return (
    <div>
      <form className="workout">
        <h1>{workOutOfDay}</h1>
        <div
          onClick={() => {
            setAddWorkout(true);
          }}
        >
          Add Your Workout:
        </div>
      </form>
    </div>
  );
};

export default CustomWorkout;
