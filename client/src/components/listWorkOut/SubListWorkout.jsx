import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../AuthContext.js";
import Axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const SubListWorkout = ({ subList }) => {
  const reRoute = useHistory();
  const [show, setShow] = useState(false);
  const [sendExercise, setSendExercise] = useState("");
  const context = useContext(AuthContext);
  const { isAuth, loggedIn, uid } = context;
  isAuth === false ? reRoute.push("/") : null;
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
  return details.map((el, i) => (
    <Details
      key={i}
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

  const [startDate, setStartDate] = useState(new Date());
  const [showCal, setShowCal] = useState(false);
  const [schedule, setSchedule] = useState(true);

  const savedWrkOut = () => {
    if (!schedule) {
      let URL = "https://levelupfitness.herokuapp.com";
      const reqURL = `${URL}/api/postfav`;
      Axios.post(reqURL, {
        u_id: uid,
        id: exerciseId,
        name: name,
        dateAdded: startDate
      }).catch(error => {
        console.error(error.message);
      });
    }
  };

  let flip = "";
  isFlipped ? (flip = "details-flipped") : (flip = "details-not-flipped");
  let sched = "";
  schedule ? (sched = "Schedule") : (sched = "Add To Profile");
  if (isFlipped === false) {
    return (
      <div className={flip}>
        <div
          className="favorite"
          onClick={uid => {
            showPicker();
          }}
        ></div>
        <div className="name">Name: {name}</div>
        <div className="intensity">Intensity: {intensity}</div>
        <div className="duration">Duration: {duration}</div>
        <div className="amount">Amount: {amount}</div>
        <button
          className="description"
          onClick={event => {
            event.preventDefault();
            flipTile(!isFlipped);
          }}
        >
          Show description
        </button>
        <button
          className={`schedule-${schedule}`}
          onClick={() => {
            setSchedule(!schedule);
            setShowCal(!showCal);
            savedWrkOut(startDate);
          }}
        >
          {sched}
        </button>
        <div className={`datepick-${showCal}`}>
          <input
            className="date-select"
            type="date"
            value={startDate}
            onChange={event => setStartDate(event.target.value)}
            required
          />
        </div>
        <br />
      </div>
    );
  } else {
    return (
      <div
        className={flip}
        onClick={event => {
          event.preventDefault();
          flipTile(!isFlipped);
        }}
      >
        {description.map((el, i) => (
          <Description key={i} test={i} desc={el} />
        ))}
      </div>
    );
  }
};

const Description = ({ test, desc }) => {
  return <div key={test}>{desc}</div>;
};

export default SubListWorkout;
