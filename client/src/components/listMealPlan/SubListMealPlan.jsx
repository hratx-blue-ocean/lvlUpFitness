import React, { useState, useContext } from "react";
import { AuthContext } from "../../AuthContext.js";
import Axios from "axios";

const SubListMealPlan = ({ subList }) => {
  return(
    <Meal meals = {subList.recipes}/>
  )
};

const Meal = ({meals}) => {
  const context = useContext(AuthContext);
  const { isAuth, loggedIn, uid } = context;

  return meals.map((el, i) => (
    <Details
      key={el._id}
      name={el.name}
      body={el.body}
      calories={el.calories}
      ingredients={el.ingredients}
      favorite={el.favorite}
      mealId={el._id}
    />
  ));
};

const Details = ({ name, body, calories, ingredients, mealId }) => {
  const [isFlipped, setFlipped] = useState(false);
  const context = useContext(AuthContext);
  const { isAuth, loggedIn, uid } = context;

  const [startDate, setStartDate] = useState(new Date());
  const [showCal, setShowCal] = useState(false);
  const [schedule, setSchedule] = useState(true);

  const flipTile = () => {
    setFlipped(!isFlipped);
  };

  const savedMeal = () => {
    let URL = "https://levelupfitness.herokuapp.com/api/favmeal";
    Axios.post(`${URL}`, {
      u_id: uid,
      id: mealId,
      name: name,
      dateAdded: startDate
    })
    .catch(error => {
      console.error(error.message);
    });
  };

  

  let flip = "";
  isFlipped ? (flip = "details-flipped") : (flip = "details-not-flipped");
  let sched = "";
  schedule ? (sched = "Schedule") : (sched = "Add To Profile");
  if (isFlipped === false) {
    return (
      <div className={flip}>
        <div className="name">Name: {name}</div>
        <div className="calories">Calories: {calories}</div>
        <div className="body">Body: {body}</div>
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
            savedMeal(startDate);
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
      <div className={flip} onClick={() => flipTile(!isFlipped)}>
        {ingredients.map((el, i) => (
          <Ingredients key={i} ing={el} />
        ))}
      </div>
    );
  }
};

const Ingredients = ({ key, ing }) => {
  return <div key={key}>{ing}</div>;
};

export default SubListMealPlan;
