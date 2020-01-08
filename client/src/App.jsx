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
import ListWorkOut from "./components/listWorkOut/ListWorkOut.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class DebugRouter extends Router {
  constructor(props) {
    super(props);
    console.log("initial history is: ", JSON.stringify(this.history, null, 2));
    this.history.listen((location, action) => {
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      );
      console.log(
        `The last navigation action was ${action}`,
        JSON.stringify(this.history, null, 2)
      );
    });
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.api = "http://localhost:8000/api/example";
  }

  static contextType = AuthContext;
  //componentDidMount() {
  // this.fetchData();
  //SUjan commented this to test the initial setup
  // fetch(this.api)
  //   .then(res => res.json())
  //   .then(seaCreatures => {
  //     this.setState({ seaCreatures: seaCreatures.data });
  //   });
  //}

  // fetchData(){
  //   // console.log('nfakhjsdfbalksdfhahsdbfiauysdgh')
  //   Axios.get(`http://localhost:8000/api/example`)
  //   .then((data)=>{
  //     this.setState({test: data})
  //   })

  // }

  render() {
    return (
      <DebugRouter>
        <AuthContextProvider>
          <Navbar />
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/Navbar"></Route>
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Workout" component={CustomWorkout} />
            <Route exact path="/ListWorkOut" component={ListWorkOut} />
          </Switch>
        </AuthContextProvider>
      </DebugRouter>
    );
  }
}
