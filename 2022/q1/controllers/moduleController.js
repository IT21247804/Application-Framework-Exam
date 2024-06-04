const Module = require('../models/module');

// Function to create a module
const createModule = async (req, res) => {
    const { moduleName, duration, lecturerIds, academicYear } = req.body;

    try {
        const module = new Module({ moduleName, duration, lecturerIds, academicYear });
        await module.save();
        res.status(201).json(module);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to allocate a timeslot to a module
const allocateTimeslot = async (req, res) => {
    const { id } = req.params;
    const { timeslot } = req.body; // timeslot should have the day and time

    try {
        const module = await Module.findByIdAndUpdate(id, { timeslot }, { new: true });
        if (!module) {
            return res.status(404).json({ error: 'Module not found' });
        }
        res.status(200).json(module);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to view all modules
const viewModules = async (req, res) => {
    try {
        const modules = await Module.find().populate('lecturerIds');
        res.status(200).json(modules);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createModule, allocateTimeslot, viewModules };
