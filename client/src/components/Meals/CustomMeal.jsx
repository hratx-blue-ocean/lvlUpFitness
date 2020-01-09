import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./CustomMeal.css";

const CustomMeal = () => {
  const [addMealClicked, setAddMeal] = useState(false);
  const [mealOfDay, setWorkOutOfDay] = useState("No Meal Plan:");
  const [mealDescription, setWorkOutDescription] = useState("Add Meal Plan:");

  if (addMealClicked) {
    return <Redirect to="/ListMealPlan" />;
  }

  return (
    <div className="user-meal-tile">
      <div className="meal-day">{mealOfDay}</div>
      <div
        className="meal-description"
        onClick={() => {
          setAddMeal(true);
        }}
      >
        {mealDescription}
      </div>
    </div>
  );
};

export default CustomMeal;
