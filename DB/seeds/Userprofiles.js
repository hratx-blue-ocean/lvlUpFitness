const mongoose = require("mongoose");
const config = require("../config");

mongoose.connect(
  `mongodb+srv://shauncarr22:${config}@lvlupfitdb-lef31.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const profileSchema = new mongoose.Schema({
  profilePicture: { data: Buffer, contentType: String },
  username: String,
  u_id: String,
  email: String,
  savedWorkouts: [{ id: String, Name: String }],
  savedMeals: [{ id: String, Name: String }],
  favoriteWorkouts: [{ id: String, Name: String }],
  favoriteMeals: [{ id: String, Name: String }],
  createdWorkouts: [{ Name: String, Info: String }]
});

module.exports = mongoose.model("userProfile", profileSchema);

// const profiles = new userProfile({
//   profilePicture: {},
//   username: "Black Nasa",
//   emai: "blacknasa@nasa.org",
//   password: "password",
//   savedWorkouts: [{}],
//   savedMeals: [{}],
//   favoriteWorkouts: [{}],
//   favoriteMeals: [{}],
//   createdWorkouts: [
//     {
//       Name: "Moon Jump",
//       Info: "Jump around on the moon and call the empire trash"
//     }
//   ]
// });

//module.exports = Profile = mongoose.model("userProfile", profileSchema);
