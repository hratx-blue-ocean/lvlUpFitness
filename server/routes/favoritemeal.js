const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const CONFIG = path.join(__dirname, "../../DB/config.js");
const config = require(CONFIG);


router.post("/", (req, res) => {
    MongoClient.connect(
      `mongodb+srv://shauncarr22:${config}@lvlupfitdb-lef31.mongodb.net/test?retryWrites=true&w=majority`,(err, client) => {
        if (err) console.error(err);
        console.log(req.body.u_id)
        console.log(req.body.id)
        console.log(req.body.name)
        const {  u_id, id, name } = req.body;
        const db = client.db("test");
        const myquery = {u_id: `${req.body.u_id}`}
        // const values = {id: `${req.body.id}`, name: `${req.body.name}`}
        const newValues = {$push : {favoriteMeals:{id: `${req.body.id}`, name: `${req.body.name}`}}}
        // newValues.$set.favoriteWorkouts.push(values)
        db.collection("userprofiles").updateOne(myquery, newValues, (err,results) => {
            if(err) console.error(err);
            res.send(results)
        })
      }
    );
  });


  module.exports = router