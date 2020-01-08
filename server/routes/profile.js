const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const CONFIG = path.join(__dirname, "../../DB/config.js");
const config = require(CONFIG);
const Profile = require("../../DB/seeds/Userprofiles");
const Profile = require("../../DB/seeds/Userprofiles.js");

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


      res.send("Profile created")

    }
  );
});

//retrive my profiles
router.get("/:u_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({ u_id: req.params.u_id });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind) res.status(400).json({ msg: "Profile not found" });
  }
});
//   MongoClient.connect(
//     `mongodb+srv://shauncarr22:${config}@lvlupfitdb-lef31.mongodb.net/test?retryWrites=true&w=majority`,
//     (err, client) => {
//       if (err) console.error(err);
//       const db = client.db("test");
//       db.collection("userprofiles")
//         .findBy()
//         .toArray((err, result) => {
//           if (err) console.error(err);
//           res.send(result);
//         });
//     }
//   );
// });

//

//retrive all profiles
router.get("/", (req, res) => {
  MongoClient.connect(
    `mongodb+srv://shauncarr22:${config}@lvlupfitdb-lef31.mongodb.net/test?retryWrites=true&w=majority`,
    (err, client) => {
      if (err) console.error(err);
      const db = client.db("test");
      db.collection("userprofiles").find().toArray((err, result) => {
          if (err) console.error(err);
          res.send(result);
        });
    }
  );
});

//update profile to add

module.exports = router;
