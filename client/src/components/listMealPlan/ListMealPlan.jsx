import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import SubListMealPlan from "./SubListMealPlan.jsx";
// import data from "./dummydata.js"
import "./ListMeal.css";
const ListMeal = () => {
  const [meals, setMeals] = useState([]);
  const [show, setShow] = useState(false);
  const [categoryId, setCategory] = useState({
    carbs: 0,
    protien: 1,
    diet: 2
  });
  const [showId, setShowId] = useState();

  useEffect(param => {
    getList(param);
  }, []);

  const getList = (param, event) => {
    let URL = "https://levelupfitness.herokuapp.com";
    const reqURL = `${URL}/api/${param}`;
    console.log(reqURL)
    Axios.get(reqURL)
      .then(({ data }) => {
        setMeals(data[event]);
        setShowId(event);
        setShow(true);
      })
      .catch(() => {
        console.error("Api call from meals failed");
      });
  };
  // console.log("showId", showId, "meals", meals);
  if (!show && !showId) {
    return (
      <div className="list">
        <div
          className="list-item"
          id={categoryId.carbs}
          onClick={() => getList("mealPlans", categoryId.carbs)}
        >
          Carbs
        </div>
        <div
          className="list-item"
          id="1"
          onClick={() => getList("mealPlans", categoryId.protien)}
        >
          Protien
        </div>
        <div
          className="list-item"
          id="2"
          onClick={() => getList("mealPlans", categoryId.diet)}
        >
          Diet
        </div>
      </div>
    );
  } else {
    return <SubListMealPlan subList={meals} />;
  }
};

export default ListMeal;
