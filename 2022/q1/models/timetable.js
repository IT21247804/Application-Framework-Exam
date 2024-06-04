const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
    module: { type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: true },
    lecturer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    lectureHall: { type: Number, required: true },
    day: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true }
}, { timestamps: true });

const Timetable = mongoose.model('Timetable', timetableSchema);

module.exports = Timetable;
