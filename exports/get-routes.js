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

router.get('/demographic', (req, res) => {
    db('part1').select()
    .where('part1.patient_code', req.query['patient_code'])
    .returning()
    .then((data) => res.json(data))
})

router.get('/therapy', (req, res) => {
    db('part2').select()
    .where('part2.patient_id', req.query['patient_code'])
    .returning()
    .then((data) => res.json(data))
})

router.get('/post-therapy', (req, res) => {
    db('part3').select()
    .where('part3.patient_id', req.query['patient_code'])
    .returning()
    .then((data) => res.json(data))
})

router.get('/followup', (req, res) => {
    db('part3').select()
    .where('part3.patient_id', req.query['patient_code'])
    .returning()
    .then((data) => res.json(data))
})
//count
router.get('/count-assessment', (req, res) => {
    db('part1').select(['part1.patient_code', 'part1.first_name', 'part1.last_name'])
    .where('part1.assessment', req.query['assessment'])
    .returning()
    .then((data) => res.json(data))
})

router.get('/count-metastasis', (req, res) => {
    db('part1').select(['part1.patient_code', 'part1.first_name', 'part1.last_name'])
    .where('part1.bone_scan', true)
    .returning()
    .then((data) => res.json(data))
})

//make this distinct
//get count side effects
//get count of lesion from part1, part4, and part3
module.exports = router