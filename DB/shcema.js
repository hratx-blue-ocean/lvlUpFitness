const mongoose = require("mongoose");
const profiles = require("./seeds/userprofiles");
const config = require("./config");
const {
  bwFullBody,
  bwLegs,
  bwChest,
  bwBack,
  bwArms,
  bwShoulders,
  bwCore
} = require("./seeds/bodyWeightDB");
const { carbMeals, proteinPlans, dietPlans } = require("./seeds/mealPlans");
const {
  cardioJumpRope,
  cardioStrengthCircuit,
  cardioDistanceRunning,
  cardioSprints,
  cardioWalking,
  cardioCycling,
  cardioSwimming
} = require("./seeds/cardio");
const {
  fwChest,
  fwBack,
  fwAbs,
  fwShoulder,
  fwLegs,
  fwBicep,
  fwTricep
} = require("./seeds/WeightLifting");
const { flxUpper, flxCore, flxLower } = require("./seeds/Flexibility");
const db = mongoose.connection;

mongoose.connect(
  `mongodb+srv://shauncarr22:${config}@lvlupfitdb-lef31.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);
//mongoose.connect('mongodb://127.0.0.1:27017/lvlupdb', {useNewUrlParser: true})

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("were connected");
});

profiles.save((err, profiles) => {
  if (err) console.log(err);
  console.log("profiles saved");
});

bwFullBody.save((err, bwFullBody) => {
  if (err) console.log(err);
  console.log("bwFullbody Saved");
});

bwLegs.save((err, bwLegs) => {
  if (err) console.error(err);
  console.log("bwLegs saved");
});

bwChest.save((err, bwChest) => {
  if (err) console.error(err);
  console.log("bwChest saved");
});

bwBack.save((err, bwBack) => {
  if (err) console.error(err);
  console.log("bwBack saved");
});

bwArms.save((err, bwArms) => {
  if (err) console.error(err);
  console.log("bwArms saved");
});

bwShoulders.save((err, bwShoulders) => {
  if (err) console.error(err);
  console.log("bwShoulders saved");
});

bwCore.save((err, bwCore) => {
  if (err) console.error(err);
  console.log("bwCore saved");
});

carbMeals.save((err, carbMeals) => {
  if (err) console.error(err);
  console.log("carbMeals saved");
});

proteinPlans.save((err, proteinPlans) => {
  if (err) console.error(err);
  console.log("proteinPlans saved");
});

dietPlans.save((err, dietPlans) => {
  if (err) console.error(err);
  console.log("dietPlans saved");
});

cardioJumpRope.save((err, cardioJumpRope) => {
  if (err) console.error(err);
  console.log("cardioJumpRope saved");
});
cardioCycling.save((err, cardioCycling) => {
  if (err) console.error(err);
  console.log("cardioCycling saved");
});
cardioDistanceRunning.save((err, cardioDistanceRunning) => {
  if (err) console.error(err);
  console.log("cardioDistanceRunning saved");
});
cardioSprints.save((err, cardioSprints) => {
  if (err) console.error(err);
  console.log("cardioSprints saved");
});
cardioSwimming.save((err, cardioSwimming) => {
  if (err) console.error(err);
  console.log("cardioSwimming saved");
});
cardioWalking.save((err, cardioWalking) => {
  if (err) console.error(err);
  console.log("cardioWalking saved");
});
cardioStrengthCircuit.save((err, cardioStrengthCircuit) => {
  if (err) console.error(err);
  console.log("cardioStrengthCircuit saved");
});
fwChest.save((err, fwChest) => {
  if (err) console.log(err);
  console.log("fwChest saved");
});
fwBack.save((err, fwBack) => {
  if (err) console.error(err);
  console.log("fwBack saved");
});
fwAbs.save((err, fwAbs) => {
  if (err) console.error(err);
  console.log("fwAbs saved");
});
fwShoulder.save((err, fwShoulder) => {
  if (err) console.error(err);
  console.log("fwShoulder");
});
fwLegs.save((err, fwLegs) => {
  if (err) console.error(err);
  console.log("fwLegs");
});
fwBicep.save((err, fwBicep) => {
  if (err) console.error(err);
  console.log("fwBicep");
});
fwTricep.save((err, fwTricep) => {
  if (err) console.error(err);
  console.log("fwTricep");
});
flxUpper.save((err, flxUpper) => {
  if (err) console.error(err);
  console.log("flxUpper");
});
flxCore.save((err, flxCore) => {
  if (err) console.error(err);
  console.log("flxCore");
});
flxLower.save((err, flxLower) => {
  if (err) console.error(err);
  console.log("flxLower");
});
