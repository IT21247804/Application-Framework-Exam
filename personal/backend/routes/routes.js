const express = require('express');
const Workout = require('../models/workout')

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
router.post('/', async(req, res) => {
    const {title, reps, load} = req.body

    try{
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
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

