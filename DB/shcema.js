const mongoose = require('mongoose');
const profiles = require('./seeds/userprofiles');

const db = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27017/lvlupdb', {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('were connected')
});


profiles.save( (err, profiles) => {
    if(err) console.log(err);
    console.log(profiles);
});








