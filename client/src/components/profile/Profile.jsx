import React from 'react'
import CustomWorkout from '../Workouts/CustomWorkout.jsx'
import CustomMeal from '../Meals/CustomMeal.jsx'

export default function Profile() {
	return (
		<div className = "user">
			
			<CustomWorkout/>
			<CustomMeal />

		</div>
	)
}
