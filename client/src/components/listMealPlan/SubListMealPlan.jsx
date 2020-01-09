import React, { useState } from "react";

const SubListMealPlan = ({ subList }) => {
  const [show, setShow] = useState(false);
  const [sendMeal, setSendMeal] = useState("");

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
  let details = meal[0].recipes;
  return details.map((el, i) => (
    <Details
      key={el._id}
      name={el.name}
      body={el.body}
      calories={el.calories}
      ingredients={el.ingredients}
      favorite={el.favorite}
    />
  ));
};

const Details = ({ name, body, calories, ingredients}) => {
  const [isFlipped, setFlipped] = useState(false);
  const flipTile = () => {
    setFlipped(!isFlipped);
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
        <button className="favorite" onClick={() => flipTile(!isFlipped)}>
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
