const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;

router.get('/', (req,res) => {
    MongoClient.connect('mongodb://127.0.0.1:27017/lvlupdb', (err,client) => {
        if(err) console.error(err);
        const db = client.db('lvlupdb')
        db.collection('meals').find().toArray( (err,result) => {
            if(err) console.error(err);
            res.send(result)
        })
    })
});

module.exports = router;