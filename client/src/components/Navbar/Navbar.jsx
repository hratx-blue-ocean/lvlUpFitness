import React, { Component } from 'react';

export default class Navbar extends React.Component{

    render (){
        
        return(
            <div>
                <h2>Navbar</h2>
    
            </div>
        );
      }
}


/*

import React, { Component } from 'react';
// import fetch from 'node-fetch';
// import Axios from 'axios';
// import Navbar from "./src/Navbar.jsx";
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
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

  // fetchData(){
  //   // console.log('nfakhjsdfbalksdfhahsdbfiauysdgh')
  //   Axios.get(`http://localhost:8000/api/example`)
  //   .then((data)=>{
  //     this.setState({test: data})
  //   })
    
 // }



  render() {
    // console.log(this.state)
    return (
      <div className="Topnav">
      <img className="Icons" src={"lvlUpFitness_Calendar-2.png at master · hratx-blue-ocean_lvlUpFitness_files"}></img>
        {/* <h1>Welcome to Blue Ocean!</h1>
        <ul>
          {this.state.seaCreatures.map((creature, index) => (
            <li key={index}>{creature}</li>
          ))}    a
        </ul> }

        </div>
        );
      }
    }
    
*/