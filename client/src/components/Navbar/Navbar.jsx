import React, { Component, useContext, useState, useEffect } from "react";
import { AuthContext } from "../../AuthContext";
import { Link, useHistory, NavLink } from "react-router-dom";
import { DebugRouter } from "../../App.jsx";
import { AuthContextProvider } from "../../AuthContext.js";
import CustomWorkout from "../Workouts/CustomWorkout.jsx"
import {
  faHome,
  faDumbbell,
  faUtensils,
  faCalendarAlt,
  faHeart,
  faBackspace,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

const Navbar = () => {
  let reRoute = useHistory();
  const context = useContext(AuthContext);
  const { isAuth, uid } = context;
  if (isAuth === true) {
    return (
      
      <div className="header-bar">
        <div className="logo">
          <NavLink to="/Navbar">
            <FontAwesomeIcon
              size="4x"
              icon={faHeart}
              fixedWidth={false}
              transform=" right 1 rotate-350"
            />
          </NavLink>
        </div>
        
        <div className="message">
          <div>Welcome</div>
          <div>
            <strong>ahsdf</strong>
          </div>
        </div>

        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </div>

        <div className="profile-icon">
          <Link to="/Profile">
            <FontAwesomeIcon icon={faHome} size="2x" />
            <p>Profile</p>
          </Link>
        </div>
        <div className="dumbell-icon">
          <NavLink to="/ListWorkOut">
            <FontAwesomeIcon icon={faDumbbell} size="2x" />
            <p>Workout</p>
          </NavLink>
        </div>
        <div className="meal-icon">
          <Link to="/ListMealPlan">
            <FontAwesomeIcon icon={faUtensils} size="2x" />
            <p>Meals</p>
          </Link>
        </div>
        <div className="calender-icon">
          <Link to="/Calender">
            <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
            <p>Schedule</p>
          </Link>
        </div>
      </div>
    );
  }else{
 return null
  }
};

export default Navbar;
