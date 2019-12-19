const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema ({
    username: String,
    email: String,
    password: String,
    savedWorkouts: [{}],
    meals: [{}]
});

const userProfile = mongoose.model('userProfile', profileSchema);

const profiles = new userProfile({})


module.exports = profiles