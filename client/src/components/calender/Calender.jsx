import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Axios from "axios";
import { AuthContext } from "../../AuthContext.js";
import "./Calender.css";
import "./test.css";
const localizer = momentLocalizer(moment);
const Calender = () => {
  let reRoute = useHistory();
  const context = useContext(AuthContext);
  const { isAuth, uid } = context;
  const [wos, setWos] = useState("");
  const [mls, setMls] = useState("");
  const [workouts, setWorkOuts] = useState([
    // {
    //   start: new Date("Sun Jan 12 2020 20:28:36"),
    //   end: new Date(moment().add(1, "days")),
    //   title: "All Workouts"
    // }
  ]);
  const [meals, setMeals] = useState([
    // {
    //   start: new Date("Sun Jan 12 2020 20:28:36"),
    //   end: new Date(moment().add(1, "days")),
    //   title: "All Meals"
    // }
  ]);
  useEffect(() => {
    getUserData(uid);
  }, []);
  useEffect(() => {
    updateWos(wos);
    updateMls(mls);
  }, [wos, mls]);
  const getUserData = uid => {
    let URL = "https://levelupfitness.herokuapp.com";
    const reqURL = `${URL}/profile/${uid}`;
  
    Axios.get(reqURL).then(({ data }) => {
      let d = data.savedWorkouts;
      let e = data.savedMeals;
      setWos(d);
      setMls(e);
    });
  };
  const updateWos = wos => {
    if (wos) {
      if (wos.length > 0) {
        wos.map((el, i) => {
          const { dateAdded, name } = el;
          let holder = [...workouts];
          holder.push({
            start: dateAdded,
            end: dateAdded,
            title: name
          });
          setWorkOuts(holder);
        });
      }
    }
  };
  const updateMls = mls => {
    if (mls) {
      if (mls.length > 0) {
        mls.map((el, i) => {
          const { dateAdded, name } = el;
          let holderOne = [...meals];
          holderOne.push({
            start: dateAdded,
            end: dateAdded,
            title: name
          });
          setMeals(holderOne);
        });
      }
    }
  };
  const totalEvent = [...meals].concat([...workouts]);
  return (
    <div className="calender">
      <div className="workouts">
        <Calendar
          localizer={localizer}
          defaultDate={new Date("Sun Jan 12 2020 20:28:36")}
          defaultView="month"
          events={totalEvent}
          style={{ height: "100vh" }}
        />
      </div>
    </div>
  );
};
export default Calender;
