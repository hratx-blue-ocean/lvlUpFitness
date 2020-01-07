import React, { Component, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { Link, useHistory } from "react-router-dom";
import { DebugRouter } from "../../App.jsx";
import { AuthContextProvider } from "../../AuthContext.js";
import {
  faHome,
  faDumbbell,
  faUtensils,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import SearchBar from './SearchBar.js';
import BodyPart from './BodyPart.js';

const Navbar = () => {
  let reRoute = useHistory();
  const context = useContext(AuthContext);
  const { isAuth } = context;
  console.log(isAuth);

  return (
    <div className="header-bar">
    
     
      <ul className="icons-bar">
        <li className="profile-icon">
          <Link to="/Profile">
            <FontAwesomeIcon icon={faHome} size="2x" />
            Profile
          </Link>
        </li>
        <li className="dumbell-icon">
          <Link to="/" >
            <FontAwesomeIcon icon={faDumbbell} size="2x" />
            Workout
          </Link>
        </li>
        <li className="meal-icon">
          <Link to="/">
            <FontAwesomeIcon icon={faUtensils} size="2x" />
            Meals
          </Link>
        </li>
        <li className="calender-icon">
          <Link to="/">
            <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
            Schedule
          </Link>
        </li>
      </ul>
    </div>
  );

  // return (
  //   <div className="header-bar">
  //     <div
  //       className="profile-icon"
  //       onClick={() => {
  //         reRoute.push("/Profile");
  //       }}
  //     >
  //       <FontAwesomeIcon icon={faHome} size="2x" />
  //     </div>
  //     <div
  //       className="dumbell-icon"
  //       onClick={() => {
  //         reRoute.push("/Profile");
  //       }}
  //     >
  //       <FontAwesomeIcon icon={faDumbbell} size="2x" />
  //     </div>
  //     <div
  //       className="meal-icon"
  //       onClick={() => {
  //         reRoute.push("/Profile");
  //       }}
  //     >
  //       <FontAwesomeIcon icon={faUtensils} size="2x" />
  //     </div>
  //     <div
  //       className="calender-icon"
  //       onClick={() => {
  //         reRoute.push("/Profile");
  //       }}
  //     >
  //       <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
  //     </div>
  //   </div>
  // );
};

export default Navbar;
