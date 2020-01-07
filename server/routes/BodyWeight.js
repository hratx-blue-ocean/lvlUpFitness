const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const config = require('/Users/studentThree/Desktop/lvlUpFitness/DB/config.js')

router.get('/', (req, res) => {
    MongoClient.connect(`mongodb+srv://shauncarr22:${config}@lvlupfitdb-lef31.mongodb.net/test?retryWrites=true&w=majority`, (err, client) => {
        if (err) console.error(err);
        const db = client.db('test')
        db.collection('bodyweights').find().toArray((err, result) => {
            if (err) console.error(err);
            res.send(result)
        })
    })
})

module.exports = router;