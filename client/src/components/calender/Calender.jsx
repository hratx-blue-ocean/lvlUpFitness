import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment-timezone";
import Axios from "axios";
import { AuthContext } from "../../AuthContext.js";
import "./Calender.css";
import "./test.css";
import { isEqual } from "lodash";
// import _ from "underscore"
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
      let holder = [];
      let a = wos.filter((el, i) => {
        let formatDate = el.dateAdded.toLocaleString().split(/[-T]/);
        if (formatDate[3] === "00:00:00.000Z") {
          return el;
        }
      });
      let temp3 = [];
      let temp1 = a.map(el => JSON.stringify(el));
      let temp2 = new Set(temp1);
      for (let item of temp2) {
        temp3.push(JSON.parse(item));
      }
      temp3.map((el, i) => {
        let samaya = moment.tz(el.dateAdded, "America/Denver")._i.slice(0, 10);
        holder.push({
          start: samaya,
          end: samaya,
          title: el.name,
          allDay: true
        });
      });
      setWorkOuts(holder);
    }
  };
  const updateMls = mls => {
    if (mls && mls.length > 0) {
      let holder = [];
      let a = mls.filter((el, i) => {
        let formatDate = el.dateAdded.toLocaleString().split(/[-T]/);
        if (formatDate[3] === "00:00:00.000Z") {
          return el;
        }
      });
      let temp3 = [];
      let temp1 = a.map(el => JSON.stringify(el));
      let temp2 = new Set(temp1);
      for (let item of temp2) {
        temp3.push(JSON.parse(item));
      }
      temp3.map((el, i) => {
        let samaya = moment.tz(el.dateAdded, "America/Denver")._i.slice(0, 10);
        holder.push({
          start: samaya,
          end: samaya,
          title: el.name,
          allDay: true
        });
      });
      setMeals(holder);
    }
  };
 
  const totalEvent = [...meals].concat([...workouts]);
  return (
    <div className="calender">
      <div className="workouts">
        <Calendar
          localizer={localizer}
          defaultView={"month"}
          events={totalEvent}
          style={{ height: "100vh" }}
        />
      </div>
    </div>
  );
};
export default Calender;
