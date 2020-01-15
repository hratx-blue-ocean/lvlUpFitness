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
  const [workouts, setWorkOuts] = useState([]);
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    getUserData(uid);
  }, []);
  useEffect(() => {
    updateWos();
    updateMls(mls);
  }, [wos, mls]);
  const getUserData = uid => {
    let URL = "https://levelupfitness.herokuapp.com";
    const reqURL = `${URL}/api/profile/${uid}`;

    Axios.get(reqURL).then(({ data }) => {
      let d = data.savedWorkouts;
      setWos(d);
      let e = data.savedMeals;
      setMls(e);
    });
  };

  const updateWos = () => {
    if (wos && wos.length > 0) {
      let holder = [...workouts];

      wos.map((el, i) => {
        let test = Date.parse(el.dateAdded);
        holder.push({
          start: test,
          end: test,
          title: el.name,
          allDay: true
        });
      });

      setWorkOuts(holder);
    }
  };

  const updateMls = mls => {
    if (mls && mls.length > 0) {
      // console.log(mls)
      let holderOne = [...meals];
      let ok = removeDuplicates(mls);
      // console.log(ok);
      mls.map((el, i) => {
        let test = el.dateAdded;
        test = Date.parse(test);
        const { dateAdded, name } = el;

        holderOne.push({
          start: test,
          end: test,
          title: name,
          allDay: true
        });
      });
      setMeals(holderOne);
    }
  };

  const totalEvent = [...meals].concat([...workouts]);

  return (
    <div className="calender">
      <div className="workouts">
        <Calendar
          localizer={localizer}
          popup
          defaultView="month"
          events={totalEvent}
          style={{ height: "100vh" }}
        />
      </div>
    </div>
  );
};
export default Calender;
