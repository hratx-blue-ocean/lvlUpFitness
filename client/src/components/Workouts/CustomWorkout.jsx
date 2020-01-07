import React, { useState } from 'react';
// import { faRoute } from '@fortawesome/free-solid-svg-icons';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import App from '../../App';

import { Redirect } from 'react-router-dom'
import wo from './wo.jsx'
import "./CustomWorkout.css";




const CustomWorkout = () => {

    const [addWorkoutClicked, setAddWorkout] = useState(false)
    console.log(addWorkoutClicked);

    if (addWorkoutClicked) {
        return <Redirect to='/Navbar' />
    }

    const newWorkout = () => {

    }
    const addWorkout = () => {

    }
    return (
        <div>
            <form className="workout">
                <h1>No Workout Plan:</h1>
                <div onClick={() => { setAddWorkout(true) }}>Add Your Workout:</div>
                {/* <input type="text" className="custom" */}

            </form>
        </div>
    );
};



export default CustomWorkout; 
