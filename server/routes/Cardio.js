const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const CONFIG = path.join(__dirname, "../../DB/config.js");
const config = require(CONFIG);
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  MongoClient.connect(
    `mongodb+srv://shauncarr22:${config}@lvlupfitdb-lef31.mongodb.net/test?retryWrites=true&w=majority`,
    (err, client) => {
      console.log(mongoose.connection.readyState);
      if (err) console.error(err);
      const db = client.db("test");
      db.collection("exercises")
        .find()
        .toArray((err, result) => {
          if (err) console.error(err);
          res.send(result);
        });
    }
  );
});
module.exports = router;
