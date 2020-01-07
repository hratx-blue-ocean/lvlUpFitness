import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import SubListWorkout from './SubListWorkout.jsx'
const ListWorkOut = () => {
  const [workOuts, setWorkouts] = useState([]);
  const [show, setShow] = useState(false);

//   useEffect((param) => {
//     getList(param);
//   }, []);

  const getList = (param) => {
    Axios.get(`http://localhost:8000/api/${param}`)
      .then(({ data }) => {
        setWorkouts(data);
        setShow(true);
      })
      .catch(() => {
        console.error("Api call from cardiovascular failed");
      });
  };
  
  if(!show){
	return (
    <div className = 'list'>
      <div className = 'list-item' onClick = {()=>getList("cardio")}>
        <h1>Cardio</h1>
      </div>
      <div className = 'list-item' onClick = {()=>getList("BodyWeight")}>
        <h1>BodyWeight</h1>
      </div> 
      <div className = 'list-item' onClick = {()=>getList("flexibility")}>
        <h1>Flex</h1>
      </div>
      <div className = 'list-item' onClick = {()=>getList("WeightLifting")}>
        <h1>WeightLifting</h1>
      </div>
    </div>
  );
  } else{
	  return <SubListWorkout subList = {workOuts}/>
  }
  
};


export default ListWorkOut;
