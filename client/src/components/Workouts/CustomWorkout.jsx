import React, { useState, useEffect } from "react";
// import { faRoute } from '@fortawesome/free-solid-svg-icons';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import App from '../../App';
import Axios from "axios";
import { Redirect } from "react-router-dom";
import "./CustomWorkout.css";

const CustomWorkout = ({savedWorkouts}) => {
  
  const [addWorkoutClicked, setAddWorkout] = useState(false);
  const [workOutOfDay, setWorkOutOfDay] = useState("No Workout Plan:");
  const [workOutDescription, setWorkOutDescription] = useState(
    "Add Your Workout:"
  );

  useEffect(() => {
    getData();
  }, [])

  const getData = ()=>{
    let todayWorkout = ''
    console.log(savedWorkouts.length);
    
    let num = Math.floor(Math.random()*savedWorkouts.length)
      console.log(num);
      
      setWorkOutDescription(savedWorkouts[num].name)
      setWorkOutOfDay("Today's Workout:")
      
    
  }

  if (addWorkoutClicked) {
    return <Redirect to="/ListWorkOut" />;
  }

  return (
    <div className="user-workout-tile">
      <div className="workout-day">{workOutOfDay}</div>
      <div
        className="workout-description"
        onClick={() => {
          setAddWorkout(true);
        }}
      >
        {workOutDescription}
      </div>
    </div>
  );
};

export default CustomWorkout;
