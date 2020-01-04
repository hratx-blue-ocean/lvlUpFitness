import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
// import './index.css';

ReactDOM.render(
  <Router exact path = '/'>
    <App />
  </Router>,
  document.getElementById("root")
);
