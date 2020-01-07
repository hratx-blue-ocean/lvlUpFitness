import React, {useState} from 'react';
// import { faRoute } from '@fortawesome/free-solid-svg-icons';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import App from '../../App';

import {Redirect } from 'react-router-dom'
import me from './me.jsx'
import "./CustomMeal.css";




const CustomMeal = () => {

    

    const [addMealClicked, setAddMeal]= useState(false)
    console.log(addMealClicked);
    


if (addMealClicked){
    return <Redirect to ='/me'/>
}

 const newMeal = () => {

 }
 const addMeal = ()=>{

 }
    return (
        <div>
            <form className="meal">
                <h1>No Meal Plan:</h1>
                <div onClick = {()=>{setAddMeal(true)}}>Add Your Meal:</div>
                {/* <input type="text" className="custom" */}
               
            </form>
        </div>
    );
};



export default CustomMeal; 
