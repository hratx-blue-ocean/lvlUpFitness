import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import SubListWorkout from "./SubListWorkout.jsx";
import data from "./dummydata.js";
import "./ListWorkOut.css";
const ListWorkOut = () => {
  const [workOuts, setWorkouts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(param => {
    getList(param);
  }, []);

  const getList = param => {
    if (param) {
      const URL = "http://localhost:8000/api/";
      const reqURL = URL + param;
      Axios.get(reqURL)
        .then(({ data }) => {

          setWorkouts(data);
          setShow(true);
        })
        .catch(() => {
          console.error("Api call from cardiovascular failed");
        });
    }
  };

  if (!show) {
    return (
      <div className="list">
        <div className="list-item" onClick={() => getList("cardio")}>
          Cardio
        </div>
        <div className="list-item" onClick={() => getList("BodyWeight")}>
          BodyWeight
        </div>
        <div className="list-item" onClick={() => getList("flexibility")}>
          Flex
        </div>
        <div className="list-item" onClick={() => getList("WeightLifting")}>
          WeightLifting
        </div>
      </div>
    );
  } else {
    return <SubListWorkout subList={workOuts} />;
  }
};

export default ListWorkOut;
