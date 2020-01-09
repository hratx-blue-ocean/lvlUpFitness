import React, { useState, useContext } from "react";
import { AuthContext } from "../../AuthContext.js";
import Axios from "axios";

const SubListMealPlan = ({ subList }) => {
  
  const [show, setShow] = useState(false);
  const [sendMeal, setSendMeal] = useState("");
  const context = useContext(AuthContext);
  const { isAuth, loggedIn, uid } = context;

  const showMeal = param => {
    const holder = subList.filter((el, i) => {
      if (i === param) { 
        return el;
      }
    });
    setSendMeal(holder);
    setShow(true);
  };
  if (!show) {
    return subList.map((meals, i) => (
      <div
        className="list-item"
        key={meals._id}
        mealId = {meals._id}
        onClick={() => {
          showMeal(i);
        }}
      >
        {meals.catergory}
      </div>
    ));
  } else {
    return <Meal meal={sendMeal} />;
  }
};

const Meal = ({ meal }) => {
  const context = useContext(AuthContext);
  const { isAuth, loggedIn, uid } = context;

  let details = meal[0].recipes;
  return details.map((el, i) => (
    <Details
      key={el._id}
      name={el.name}
      body={el.body}
      calories={el.calories}
      ingredients={el.ingredients}
      favorite={el.favorite}
      mealId = {el._id}
    />
  ));
};

const Details = ({ name, body, calories, ingredients, mealId }) => {
  const [isFlipped, setFlipped] = useState(false);
  const context = useContext(AuthContext);
  const { isAuth, loggedIn, uid } = context;

  const flipTile = () => {
    setFlipped(!isFlipped);
  };

  const savedMeal = () => {
    Axios.post(`http://localhost:8000/api/favmeal`, {
      u_id: uid,
      id: mealId,
      name: name
    }) .catch((error)=>{
      console.error(error.message);
    });
  };

  let flip = ''
  isFlipped? flip = "details-flipped": flip = "details-not-flipped"
  if (isFlipped ===false) {
    return (
      <div className={flip}>
        
        <div className="name">Name: {name}</div>
        <div className="calories">Calories: {calories}</div>
        <div className="body">Body: {body}</div>
        <button className="description" onClick={() => flipTile(!isFlipped)}>
          Show Ingredients
        </button>
        <button className="favorite" onClick={uid => {
          savedMeal(uid);
          }}>
          Add to favorites 
        </button>
        <br />
      </div>
    );
  } else {
    return (
      
        <div  className = {flip} onClick={() => flipTile(!isFlipped)}>
          {ingredients.map((el, i) => (
            <Ingredients key={i} ing={el} />
          ))}
        </div>
        
    );
  }
};

const Ingredients = ({  key, ing}) => {
  return (
    <div key={key}  >
      {ing}
    </div>
  );
};

export default SubListMealPlan;
