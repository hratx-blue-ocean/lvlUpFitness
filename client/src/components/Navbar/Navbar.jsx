import React, { Component, useContext, useState, useEffect } from "react";
import { AuthContext } from "../../AuthContext";
import { Link, useHistory, NavLink, Redirect } from "react-router-dom";
import {
  faHome,
  faDumbbell,
  faUtensils,
  faCalendarAlt,
  faHeart,
  faSearch,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import firebase from "../../firebase.js"

const Navbar = () => {
  let reRoute = useHistory();
  const context = useContext(AuthContext);
  const { isAuth, uid, loggedOut } = context;
  useEffect(() => {
    
  }, [isAuth])
  if (isAuth === true) {
    return (
      <div className="header-bar">
        <div className="logo">
          <NavLink to="/Profile">
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
            <strong>{localStorage.getItem("username")}</strong>
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
        <div className="signOut-icon" onClick={() => {firebase.signOut();loggedOut()}}>
          <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
          <p>SignOut</p>
        </div>
      </div>
    );
    
  } else {
    return <Redirect to ="/"/>
  }
};

export default Navbar;
