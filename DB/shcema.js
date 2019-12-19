const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/lvlupdb', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('were connected')
});

// Example on how to set up the seed




const chickienuggs = require('./seeds/meals')

chickienuggs.save( (err, chickienuggs) => {
    if(err) console.log(err);
    console.log(chickienuggs);
})






