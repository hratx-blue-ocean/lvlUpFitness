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
  const [workOutDescription, setWorkOutDescription] = useState(
    "Add Your Workout:"
  );

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
