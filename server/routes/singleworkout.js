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
    //   console.log(req.body.id);
      const findId = req.body.id
      console.log(findId)
      db.collection("bodyweights").find().toArray((err, result) => {
          if (err) console.error(err);
        //   console.log(result)
          let newResult = []
          let foundWorkout = []
          for(let i = 0; i < result.length; i++){
              for(let j = 0; j < result[i].type.length; j++){
                if(result[i].type[j]._id === findId){
                    newResult.push(result[i])
                }
                //   console.log(result[i].type[i]._id)
                console.log(result[i].type[j]._id)
            }
        } 
        res.send(newResult)
        // res.send(result[0].type[0]._id)
      });
    }
  );
});

module.exports = router;