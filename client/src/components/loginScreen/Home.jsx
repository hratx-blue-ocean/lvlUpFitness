import React from 'react'

export default function Home() {
	// console.log(props)
	return (
		<div>
        <h1>Level ☝️ Fitness</h1>
        <p>
          Welcome {firebase.auth().currentUser.displayName}! You are now
          signed-in!
        </p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
	)
}

// {firebase.auth().currentUser.displayName}!
