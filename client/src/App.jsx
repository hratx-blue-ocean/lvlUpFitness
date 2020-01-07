import React, { Component } from 'react';
// import fetch from 'node-fetch';
// import Axios from 'axios';
<<<<<<< HEAD:client/src/App.js
import './App.css';
import CustomWorkout from '/Users/studentFifteen/Desktop/lvlUpFitness/client/src/components/customWorkout/customWorkout.jsx';
=======
import "./App.css";
import AuthContextProvider from "./AuthContext.js";
import { AuthContext } from "./AuthContext.js";
import Home from "./components/loginScreen/Home.jsx";
import SignUp from "./components/loginScreen/SignUp.jsx";
import ForOfor from "./components/forOfor/forOfor.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/profile/Profile.jsx"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
>>>>>>> 44bcb87c492a1cd637452e4870f060db3a479ccf:client/src/App.jsx

export default class App extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD:client/src/App.js
    this.state = {
      seaCreatures: [],
      test:''
    };
    this.api = `http://localhost:8000/api/example`;
  }
  componentDidMount() {
    // this.fetchData();
    //SUjan commented this to test the initial setup
    fetch(this.api)
      .then(res => res.json())
      .then(seaCreatures => {
        this.setState({ seaCreatures: seaCreatures.data });
      });
      
  }
=======
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
>>>>>>> 44bcb87c492a1cd637452e4870f060db3a479ccf:client/src/App.jsx

  // fetchData(){
  //   // console.log('nfakhjsdfbalksdfhahsdbfiauysdgh')
  //   Axios.get(`http://localhost:8000/api/example`)
  //   .then((data)=>{
  //     this.setState({test: data})
  //   })
    
 // }



  render() {
<<<<<<< HEAD:client/src/App.js
    // console.log(this.state)
    return (
      <div>
        <h1>Welcome to Blue Ocean!</h1>
        <ul>
          {this.state.seaCreatures.map((creature, index) => (
            <li key={index}>{creature}</li>
          ))}
        </ul>
        <CustomWorkout/>
      </div>
=======
    return (
      <DebugRouter>
        <AuthContextProvider>
          <Switch>
            <Route exact path="/"  >
              <Home />
            </Route>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
            <Route exact path="/Navbar">
              <Navbar />
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route>
              <ForOfor />
            </Route>
          </Switch>
        </AuthContextProvider>
      </DebugRouter>
>>>>>>> 44bcb87c492a1cd637452e4870f060db3a479ccf:client/src/App.jsx
    );
  }
}

