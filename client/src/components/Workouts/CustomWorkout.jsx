import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./CustomWorkout.css";

const CustomWorkout = ({ savedWorkouts }) => {
  let workOutData = savedWorkouts;

  const [addWorkoutClicked, setAddWorkout] = useState(false);
  const [workOutOfDay, setWorkOutOfDay] = useState("No Workout Plan:");
  const [workOutDescription, setWorkOutDescription] = useState(
    "Add Your Workout:"
  );
  const [propsExist, setPropsExist] = useState(false);

  const getData = arg => {
    if (arg) {
      if (arg.length > 0) {
        let num = Math.floor(Math.random() * arg.length);
        let todayWorkout = arg[num].name || "front end messed up";
        setWorkOutDescription(todayWorkout);
        setWorkOutOfDay("Today's Workout:");
        setPropsExist(true);
      }
    }
  };
  useEffect(() => {
    getData(workOutData);
  }, [workOutData]);

  if (addWorkoutClicked) {
    return <Redirect to="/ListWorkOut" />;
  }

  if (!propsExist) {
    return (
      <div className="user-workout-tile">
        <div className="workout-day">{workOutOfDay}</div>
        <div className="workout-description">
          {workOutDescription}

          <button className="description" onClick={() => setAddWorkout(true)}>
            Browse Work Outs
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="user-workout-tile">
        <div className="workout-day">{workOutOfDay}</div>
        <div className="workout-description">{workOutDescription}</div>
        <button className="description" onClick={() => console.log("click")}>
          Show Details
        </button>
      </div>
    );
  }
};

export default CustomWorkout;
