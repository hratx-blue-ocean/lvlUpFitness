import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import SubListMealPlan from './SubListMealPlan.jsx'
// import data from "./dummydata.js"
import "./ListMeal.css"
const ListMeal = () => {

  const [meals, setMeals] = useState([]
);
  const [show, setShow] = useState(false);

  useEffect((param) => {
    getList(param);
  }, []);

  const getList = (param) => {
    const URL = "http://localhost:8000/api/"
    const reqURL = URL+param;
    console.log(reqURL)
    Axios.get(reqURL)
      .then(({ data }) => {
        setMeals(data);
        setShow(true);
      })
      .catch(() => {
        console.error("Api call from meals failed");
      });
  };
  
  if(!show){
	return (
    <div className = 'list'>
      <div className = 'list-item' onClick = {()=>getList("mealPlans")}>
        Meal Plans
      </div>
      {/* <div className = 'list-item' onClick = {()=>getList("Carbs")}>
        Carbs 
      </div>  */}
      {/* <div className = 'list-item' onClick = {()=>getList("Diet")}>
         Diet
      </div>
       */}
    </div>
  );
  } else{
	  return <SubListMealPlan subList = {meals}/>
  }




  
  
};




export default ListMeal;
