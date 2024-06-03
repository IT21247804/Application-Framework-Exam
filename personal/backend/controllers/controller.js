const Workout = require("../models/workout");
const mongoose = require("mongoose");

const getworkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

//get workout by id
const getworkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

//post new workout
const createworkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update a workout
const updateworkout = async (req, res) => {
  const { id } = req.params;
  const { title, reps, load } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  try {
    const workout = await Workout.findByIdAndUpdate(id, { title, reps, load }, { new: true });

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout
const deleteworkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  try {
    const workout = await Workout.findByIdAndDelete(id);

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    res.status(200).json({ message: "Workout deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createworkout,
  getworkout,
  getworkouts,
  deleteworkout,
  updateworkout,
};
