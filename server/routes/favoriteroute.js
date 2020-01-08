const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const CONFIG = path.join(__dirname, "../../DB/config.js");
const config = require(CONFIG);


router.post("/", (req, res) => {
    MongoClient.connect(
      `mongodb+srv://shauncarr22:${config}@lvlupfitdb-lef31.mongodb.net/test?retryWrites=true&w=majority`,(err, client) => {
        if (err) console.error(err);
        const { username, u_id, email } = req.body;
        const newUser = new Profile({
          username,
          u_id,
          email
        });
        newUser.save();
        res.send("workout favorited")
      }
    );
  });


  module.exports = router