import React, {useState, useEffect } from "react";
import Axios from "axios";
import SubListMealPlan from "./SubListMealPlan.jsx";
const ListMeal = () => {
  const [meals, setMeals] = useState([]);
  const [show, setShow] = useState(false);
  const categoryId = {
    carbs: 0,
    protien: 1,
    diet: 2
  };
  const [showId, setShowId] = useState();

  useEffect(param => {
    getList(param);
  }, []);

  const getList = (param, event) => {
    let URL = "https://levelupfitness.herokuapp.com";
    const reqURL = `${URL}/api/${param}`;
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
          Protein
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
