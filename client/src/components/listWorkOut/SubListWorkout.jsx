import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext.js";
import Axios from "axios";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubListWorkout = ({ subList }) => {
  const [show, setShow] = useState(false);
  const [sendExercise, setSendExercise] = useState("");
  const context = useContext(AuthContext);
  const { isAuth, loggedIn, uid } = context;

  // console.log(uid);

  const showExercise = param => {
    const holder = subList.filter((el, i) => {
      if (i === param) {
        return el;
      }
    });
    setSendExercise(holder);
    setShow(true);
  };
  if (!show) {
    return subList.map((exercises, i) => (
      <div
        className="list-item"
        key={exercises._id}
        onClick={() => {
          showExercise(i);
        }}
      >
        {exercises.muscleGroup || exercises.exercise}
      </div>
    ));
  } else {
    return <Exercise exercise={sendExercise} />;
  }
};

const Exercise = ({ exercise }) => {
  const context = useContext(AuthContext);
  const { isAuth, loggedIn, uid } = context;
  let details = exercise[0].type;
  //console.log(exercise[0].type);
  return details.map((el, i) => (
    <Details
      key={el._id}
      exerciseId={el._id}
      name={el.name}
      intensity={el.intensity}
      duration={el.duration}
      amount={el.amount}
      description={el.description}
    />
  ));
};

const Details = ({
  name,
  intensity,
  duration,
  amount,
  description,
  exerciseId
}) => {
  const [isFlipped, setFlipped] = useState(false);
  const context = useContext(AuthContext);
  const { isAuth, loggedIn, uid } = context;
  const flipTile = () => {
    setFlipped(!isFlipped);
  };

  const savedWrkOut = () => {
   
    Axios.post(`http://localhost:8000/api/postfav`, {
      u_id: uid,
      id: exerciseId,
      name: name
    }).then(({data}) => {
      console.log("bauyksdgfykausbbsdk",data);
    });
  };

 

  let flip = "";
  isFlipped ? (flip = "details-flipped") : (flip = "details-not-flipped");
  if (isFlipped === false) {
    return (
      <div className={flip}>
        <div
          className="favorite"
          onClick={(uid) => {
            savedWrkOut(uid);
          }}
        >
          <FontAwesomeIcon size="1x" icon={faHeart} style={{ '--fa-primary-color': "#F96F6D" }}/>
        </div>
        <div className="name">Name: {name}</div>
        <div className="intensity">Intensity: {intensity}</div>
        <div className="duration">Duration: {duration}</div>
        <div className="amount">Amount: {amount}</div>
        <div className="name" onClick={() => flipTile(!isFlipped)}>
          Description:
        </div>
        <br />
      </div>
    );
  } else {
    return (
      <div className={flip} onClick={() => flipTile(!isFlipped)}>
        {description.map((el, i) => (
          <Description key={i} desc={el} />
        ))}
      </div>
    );
  }
};

const Description = ({ key, desc }) => {
  return <div key={key}>{desc}</div>;
};

export default SubListWorkout;
