const express = require('express');
const db = require('../database/connection');
const router = express.Router();

router.get('/patient', (req, res) => {
    db('part1').select(['part1.first_name', 'part1.last_name', 'part1.patient_code'])
    .where((builder) => {
        if(req.query['part1.first_name']) builder.where('part1.first_name', req.query['part1.first_name']);
        if(req.query['part1.last_name']) builder.where('part1.last_name', req.query['part1.last_name']);
    })
    .orderBy('part1.created_at', 'asc')
    .returning()
    .then((data) => {
        res.json(data);
    })
})
module.exports = router