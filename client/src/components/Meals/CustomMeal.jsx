import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../AuthContext.js";
import { useHistory } from "react-router-dom";
import "./CustomMeal.css";

const CustomMeal = ({ savedMeals }) => {
  let reRoute = useHistory();
  const context = useContext(AuthContext);
  const { isAuth } = context;
  const [addMeal, setAddMeal] = useState(false);
  if (!isAuth) {
    return reRoute.push("/");
  } else {
    if (addMeal) {
      return <Redirect to="/ListMealPlan" />;
    }
    if (savedMeals && savedMeals.length > 0) {
      let temp3 = [];
      let temp1 = savedMeals.map(el => JSON.stringify(el));
      let temp2 = _.uniq(temp1);
      for (let item of temp2) {
        temp3.push(JSON.parse(item));
      }
      return temp3.map((el, i) => <SingleMeal key={i} singleMeal={el} />);
    } else {
      return (
        <div className="user-meal-tile">
          <div className="meal-day">No Meals Planned</div>

          <button
            className="description"
            onClick={() => {
              setAddMeal(true);
            }}
          >
            Add More
          </button>
        </div>
      );
    }
  }
};
const SingleMeal = ({ singleMeal }) => {
  let reRoute = useHistory();
  const context = useContext(AuthContext);
  const { isAuth } = context;
  const [addMoreMealsClicked, setAddMoreMeals] = useState(false);
  if (!isAuth) {
    reRoute.push("/");
  } else {
    if (addMoreMealsClicked) {
      return <Redirect to="/ListMealPlan" />;
    }

    return (
      <div className="user-meal-tile">
        <div className="meal-day">Today's Meal </div>
        <div className="meal-description">
          {singleMeal.name}
          <button
            className="description"
            onClick={() => alert("Don't do that")}
          >
            Show Details
          </button>
          <button
            className="description"
            onClick={() => {
              setAddMoreMeals(true);
            }}
          >
            Add More
          </button>
        </div>
      </div>
    );
  }
};

export default CustomMeal;
