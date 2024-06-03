const express = require('express');

const router = express.Router()

//get all workouts
router.get('/', (req, res) => {
    res.json({mssg:"get All workouts"})
})

//get workout by id
router.get('/:id', (req, res) => {
    res.json({mssg:"get a workout by id"})
})

//post new workout
router.post('/', (req, res) => {
    res.json({mssg:"post new workout"})
})

//update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg:"update a workout by id"})
})

//delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg:"delete a workout by id"})
})

module.exports = router;

