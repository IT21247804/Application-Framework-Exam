const Timetable = require('../models/timetable');

const createTimetableEntry = async (req, res) => {
    const { module, lecturer, lectureHall, day, startTime, endTime } = req.body;

    try {
        const timetableEntry = new Timetable({ module, lecturer, lectureHall, day, startTime, endTime });
        await timetableEntry.save();
        res.status(201).json(timetableEntry);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const viewTimetable = async (req, res) => {
    try {
        const timetable = await Timetable.find().populate('module lecturer');
        res.status(200).json(timetable);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createTimetableEntry, viewTimetable };
