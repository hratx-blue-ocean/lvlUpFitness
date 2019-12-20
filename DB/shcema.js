const mongoose = require('mongoose');
const profiles = require('./seeds/userprofiles');
const config = require('./config')
const {bwFullBody,bwLegs,bwChest,bwBack,bwArms,bwShoulders,bwCore} = require('./seeds/bodyWeightDB');
const db = mongoose.connection;

// mongoose.connect(`mongodb+srv://shauncarr22:${config}@lvlupfitdb-lef31.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});
mongoose.connect('mongodb://127.0.0.1:27017/lvlupdb', {useNewUrlParser: true})

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('were connected')
});


// profiles.save( (err, profiles) => {
//     if(err) console.log(err);
//     console.log('profiles saved');
// });

bwFullBody.save( (err , bwFullBody) => {
    if(err) console.log(err);
    console.log('bwFullbody Saved')
});

bwLegs.save( (err,bwLegs) => {
    if(err) console.error(err);
    console.log('bwLegs saved');
});

bwChest.save( (err,bwChest) => {
    if(err) console.error(err);
    console.log('bwChest saved')
});

bwBack.save( (err,bwBack) => {
    if(err) console.error(err);
    console.log('bwBack saved');
});

bwArms.save( (err,bwArms) => {
    if(err) console.error(err);
    console.log('bwArms saved');
});

bwShoulders.save( (err,bwShoulders) => {
    if(err) console.error(err);
    console.log('bwShoulders saved');
});

bwCore.save( (err, bwCore) => {
    if(err) console.error(err);
    console.log('bwCore saved');
});