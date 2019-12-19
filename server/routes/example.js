const router = require('express').Router();
const express = require('express')
const path = require('path')

router.get('/', (req, res) => {
    res.json({data:['dolphins', 'manatees', 'sea turles']})
})


module.exports = router;