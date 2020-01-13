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
  savedWorkouts: [{ id: String, Name: String, dateAdded: {type: Date} }],
  savedMeals: [{ id: String, Name: String, dateAdded: {type: Date} }],
  dateAdded : {type: Date}
});
module.exports = mongoose.model("userProfile", profileSchema);

// const profiles = new userProfile({
//   profilePicture: {},
//   username: "Black Nasa",
//   emai: "blacknasa@nasa.org",
//   password: "password",
//   savedWorkouts: [{
//     id: "fuck u",
//     Name: "Eat Shit",
//     dateAdded: new Date
//   }],
//   savedMeals: [{}],
//   dateAdded: new Date
// });

// module.exports = profiles
