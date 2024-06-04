const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
    moduleName: { type: String, required: true },
    duration: { type: Number, required: true },
    lecturerIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    academicYear: { type: Number, required: true }
}, { timestamps: true });

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;
