const express = require("express");
const Workout = require("../models/workout");
const {
  createworkout,
  getworkout,
  getworkouts,
  deleteworkout,
  updateworkout,
} = require("../controllers/controller");
const router = express.Router();

//get all workouts
router.get("/", getworkouts);

//get workout by id
router.get("/:id", getworkout);
//post new workout
router.post("/", createworkout);

//update a workout
router.patch("/:id", updateworkout);

//delete a workout
router.delete("/:id", deleteworkout);

module.exports = router;
