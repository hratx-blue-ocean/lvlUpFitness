import React, { Component } from "react";
// import fetch from 'node-fetch';
// import Axios from 'axios';
// import Login from "./components/loginScreen/Login.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Button,AppBar, Toolbar,IconButton,Typography } from '@material-ui/core';
// import { MenuIcon } from 'material-ui-icons'
import "./App.css";

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
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              
              color="inherit"
              aria-label="menu"
            >
            
            </IconButton>
            <Typography variant="h6" >
            <Button color="inherit">Login</Button>
            </Typography>
           
          </Toolbar>
        </AppBar>
      </Router>
    );
  }
}
