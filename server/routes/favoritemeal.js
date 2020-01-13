const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const CONFIG = path.join(__dirname, "../../DB/config.js");
const config = require(CONFIG);


router.post("/", (req, res) => {
    MongoClient.connect(
      `mongodb+srv://shauncarr22:${config}@lvlupfitdb-lef31.mongodb.net/test?retryWrites=true&w=majority`,(err, client) => {
        if (err) console.error(err);
        console.log("A---------",req.body.u_id)
        console.log("B---------",req.body.id)
        console.log("C---------",req.body.name)
        console.log("D---------",req,body.dateAdded)
        const {  u_id, id, name , dateAdded} = req.body;
        const db = client.db("test");
        const myquery = {u_id: `${req.body.u_id}`}
        // const values = {id: `${req.body.id}`, name: `${req.body.name}`}
        const newValues = {$push : {savedMeals:{id: `${req.body.id}`, name: `${req.body.name}`, dateAdded : `${req.body.dateAdded}`}}}
        // newValues.$set.favoriteWorkouts.push(values)
        db.collection("userprofiles").updateOne(myquery, newValues, (err,results) => {
            if(err) console.error(err);
            res.send(results)
        })
      }
    );
  });


  module.exports = router