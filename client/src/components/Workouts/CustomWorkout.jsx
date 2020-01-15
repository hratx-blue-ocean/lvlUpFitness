import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./CustomWorkout.css";

const CustomWorkout = ({ savedWorkouts }) => {
  const [addWorkout, setAddMoreWorkout] = useState(false);
  if (addWorkout) {
    return <Redirect to="/ListWorkOut" />;
  }
  if (savedWorkouts && savedWorkouts.length > 0) {
    let temp3 = []
    let temp1 = savedWorkouts.map(el => JSON.stringify(el));
    let temp2 = _.uniq(temp1);
    for (let item of temp2){
      temp3.push(JSON.parse(item))
    }
  
 
    return temp3.map((el, i) => (
      <SingleTile key={i} singleWorkouts={el} />
    ));
  } else
    return (
      <div>
        <div className="user-workout-tile">
          <div className="workout-day">"No Workout Planed"</div>

          <button
            className="description"
            onClick={() => setAddMoreWorkout(true)}
          >
            Browse Work Outs
          </button>
        </div>
      </div>
    );
};
const SingleTile = ({ singleWorkouts }) => {
  const [addMoreClicked, setAddMoreWorkout] = useState(false);
  if (addMoreClicked) {
    return <Redirect to="/ListWorkOut" />;
  }

  return (
    <div className="user-workout-tile">
      <div className="workout-day">Today's Workout</div>
      <div className="workout-description">{singleWorkouts.name}</div>
      <button className="description" onClick={() => alert("Don't do that")}>
        Show Details
      </button>
      <button className="description" onClick={() => setAddMoreWorkout(true)}>
        Add More
      </button>
    </div>
  );
};

export default CustomWorkout;
