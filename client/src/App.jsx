import React, { Component } from "react";
// import fetch from 'node-fetch';
// import Axios from 'axios';
import "./App.css";
import AuthContextProvider from "./AuthContext.js";
import { AuthContext } from "./AuthContext.js";
import Home from "./components/loginScreen/Home.jsx";
import SignUp from "./components/loginScreen/SignUp.jsx";
import ForOfor from "./components/forOfor/forOfor.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/profile/Profile.jsx";
import CustomWorkout from "./components/Workouts/CustomWorkout.jsx";
import CustomMeal from './components/Meals/CustomMeal.jsx'
import ListWorkOut from "./components/listWorkOut/ListWorkOut.jsx";
import ListMealPlan from "./components/listMealPlan/ListMealPlan.jsx";
import Calender from "./components/calender/Calender.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// export default class App extends Component {
 
    

//   static contextType = AuthContext;

//   render() {
  const App = ()=>{
  
  
    return (
      
        <AuthContextProvider>
          <Navbar />
          
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/SignUp" component={SignUp}/>
            <Route exact path="/Navbar"></Route>
            <Route exact path="/Profile" component={Profile}/>
            <Route exact path="/Workout" component={CustomWorkout}/>
            <Route exact path="/Meals" component={CustomMeal}/>
            <Route exact path="/ListWorkOut" component={ListWorkOut}/>
            <Route exact path="/ListMealPlan" component={ListMealPlan} />
            <Route exact path="/Calender" component={Calender} />
          </Switch>
        </AuthContextProvider>
   
    );
  }
// }

export default App
