import React, { Component } from "react";
// import fetch from 'node-fetch';
// import Axios from 'axios';
import SignIn from "./components/loginScreen/SignIn.jsx";
import Home from './components/loginScreen/Home.jsx'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import "./App.css";

class DebugRouter extends Router {
  constructor(props){
    super(props);
    console.log('initial history is: ', JSON.stringify(this.history, null,2))
    this.history.listen((location, action)=>{
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      )
      console.log(`The last navigation action was ${action}`, JSON.stringify(this.history, null,2));
    });
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: [],
      test: ""
    };
    this.api = `http://localhost:8000/api/example`;

    


  }
  componentDidMount() {
    // this.fetchData();
    //SUjan commented this to test the initial setup
    // fetch(this.api)
    //   .then(res => res.json())
    //   .then(seaCreatures => {
    //     this.setState({ seaCreatures: seaCreatures.data });
    //   });
  }

  // fetchData(){
  //   Axios.get(`http://localhost:8000/api/example`)
  //   .then((data)=>{
  //     this.setState({test: data})
  //   })

  // }

  render() {
    // console.log(this.state)
    return (
      <DebugRouter>
        <div>
          <Link to="/SignIn">Login</Link>

          <Switch>
            <Route path="/SignIn" component={SignIn}></Route>
            <Route path ='/Home' component = {Home}></Route>
          </Switch>
        </div>
      </DebugRouter>
    );
  }
}
