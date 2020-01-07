import React, { useState } from "react";

const SubListWorkout = ({ subList }) => {
  // console.log(subList);

  const [show, setShow] = useState(false);
  const [sendExercise, setSendExercise] = useState("");

  const showExercise = param => {
    const holder = subList.filter((el, i) => {
      if (el._id === param) {
        return el;
      }
    });
    setSendExercise(holder);
    setShow(true);
  };
  if (!show) {
    return subList.map((exercises, i) => (
      <h1
        key={exercises._id}
        onClick={() => {
          showExercise(exercises._id);
        }}
      >
        {exercises.muscleGroup}
      </h1>
    ));
  } else {
    return <Exercise exercise={sendExercise} />;
  }
};

const Exercise = ({ exercise }) => {
  let details = exercise[0].type;
  return details.map((el, i) => (
    <Details key = {el._id} name={el.name} intensity={el.intensity} duration={el.duration} amount = {el.amount} description = {el.description} />
  ));
};

const Details = ({ name, intensity, duration,amount,description }) => {
	// const desc = description.map((el, i)=>{
	// 	return el
	// })
	// console.log(desc);
	
  return (
    <div className="details">
      <div className="name">Name: {name}</div>
      <div className="intensity">Intensity: {intensity}</div>
	  <div className="duration">Duration: {duration}</div>
	  <div className = "amount">Amount: {amount}</div>
	  Description: {description.map((el, i)=>(
		<div key = {i} className = "description">{el}</div>
	  ))}
	  <br/>
    </div>
  );
};

export default SubListWorkout;
