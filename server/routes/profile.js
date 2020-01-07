const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const CONFIG = path.join(__dirname, "../../DB/config.js");
const config = require(CONFIG);
const Profile = require("../../db/seeds/Userprofiles");
const mongoose = require("mongoose");
//create profile from ui
router.post("/", (req, res) => {
  MongoClient.connect(
    `mongodb+srv://shauncarr22:${config}@lvlupfitdb-lef31.mongodb.net/test?retryWrites=true&w=majority`,
    (err, client) => {
      if (err) console.error(err);
      const { username, u_id, email } = req.body;
      const newUser = new Profile({
        username,
        u_id,
        email
      });
      newUser.save();
    }
  );
});

//retrive my profile
router.get("/", (req, res) => {
  MongoClient.connect(
    `mongodb+srv://shauncarr22:${config}@lvlupfitdb-lef31.mongodb.net/test?retryWrites=true&w=majority`,
    (err, client) => {
      if (err) console.error(err);
      const db = client.db("test");
      db.collection("userprofiles")
        .find()
        .toArray((err, result) => {
          if (err) console.error(err);
          res.send(result);
        });
    }
  );
});

//update profile to add

module.exports = router;
