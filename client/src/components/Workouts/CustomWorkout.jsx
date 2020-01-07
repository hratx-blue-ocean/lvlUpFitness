import React, { useState, useEffect } from "react";
// import { faRoute } from '@fortawesome/free-solid-svg-icons';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import App from '../../App';
import Axios from "axios";
import { Redirect } from "react-router-dom";
import "./CustomWorkout.css";

const CustomWorkout = () => {
  
  const [addWorkoutClicked, setAddWorkout] = useState(false);
  const [workOutOfDay, setWorkOutOfDay] = useState("No Workout Plan:");
  


  

  
  if (addWorkoutClicked) {
    return <Redirect to="/ListWorkOut" />;
  }

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
