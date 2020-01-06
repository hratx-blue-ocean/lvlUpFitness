const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema ({
    profilePicture: {data: Buffer, contentType: String},
    username: String,
    email: String,
    password: String,
    savedWorkouts: [{id: String, Name: String}],
    savedMeals: [{id: String, Name: String}],
    favoriteWorkouts: [{id: String, Name: String}],
    favoriteMeals: [{id: String, Name: String}],
    createdWorkouts: [{Name: String, Info: String}]
});

const userProfile = mongoose.model('userProfile', profileSchema);

const profiles = new userProfile({
    profilePicture: {},
    username: 'Black Nasa',
    emai: 'blacknasa@nasa.org',
    password: 'password',
    savedWorkouts: [{}],
    savedMeals: [{}],
    favoriteWorkouts: [{}],
    favoriteMeals: [{}],
    createdWorkouts: [{Name: 'Moon Jump', Info: 'Jump around on the moon and call the empire trash' }]
});


module.exports = profiles
