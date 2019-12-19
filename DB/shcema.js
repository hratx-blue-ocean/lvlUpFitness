const mongoose = require('mongoose');
const chickienuggs = require('./seeds/Example');

const db = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27017/lvlupdb', {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('were connected')
});


chickienuggs.save( (err, chickienuggs) => {
    if(err) console.log(err);
    console.log(chickienuggs);
})






