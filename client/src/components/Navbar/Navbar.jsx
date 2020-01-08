import React, { Component, useContext, useState, useEffect } from "react";
import { AuthContext } from "../../AuthContext";
import { Link, useHistory, NavLink } from "react-router-dom";
import { DebugRouter } from "../../App.jsx";
import { AuthContextProvider } from "../../AuthContext.js";
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
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   callFn()
  // }, [searchQuery])
  // const callFn = (e)=>{
  //   e.preventDefault();
  //   setSearchQuery(e.target.value)
  // }
  return (
    <div className="search-bar">
      <input
        type="text"
        name="name"
        value={searchQuery}
        placeholder="Search this bro"
        onChange={e => {
          setSearchQuery(e.target.value);
        }}
      />
      <div className="search-button" onClick={() => setSearchQuery("")}>
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </div>
    </div>
  );
};

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
        <SearchBar />
        <div className="message">
          <div>Welcome</div>

          <div>
            <strong>Rodney</strong>
          </div>
        </div>

        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </div>

        <div className="profile-icon">
          <NavLink to="/Profile">
            <FontAwesomeIcon icon={faHome} size="2x" />
            <p>Profile</p>
          </NavLink>
        </div>
        <div className="dumbell-icon">
          <NavLink to="/Workout">
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
          <Link to="/">
            <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
            <p>Schedule</p>
          </Link>
        </div>
      </div>
    );
  }else {
    return <h1>Loading</h1>
  }
};

export default Navbar;
