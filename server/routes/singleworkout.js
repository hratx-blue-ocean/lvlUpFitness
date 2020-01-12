const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectId
const path = require("path");
const CONFIG = path.join(__dirname, "../../DB/config.js");
const config = require(CONFIG);
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  MongoClient.connect(
    `mongodb+srv://shauncarr22:${config}@lvlupfitdb-lef31.mongodb.net/test?retryWrites=true&w=majority`,
    (err, client) => {
      if (err) console.error(err);
      const db = client.db("test");
     //console.log(req.body.id);
      const findId = req.body.id
    //   console.log(findId)
      db.collection("bodyweights").aggregate([{$unwind: "bodyweight"}, {$match: {"bodyweights._id": `"${findId}"`}}]).toArray((err,results) => {
          if(err) console.error(err);
          res.send(results)
      })
    }
  );
});

module.exports = router;