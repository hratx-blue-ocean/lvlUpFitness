const mongoose = require('mongoose');
const profiles = require('./seeds/userprofiles');
const config = require('./config')

const db = mongoose.connection;

mongoose.connect(`mongodb+srv://shauncarr22:${config}@lvlupfitdb-lef31.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('were connected')
});


// profiles.save( (err, profiles) => {
//     if(err) console.log(err);
//     console.log(profiles);
// });








