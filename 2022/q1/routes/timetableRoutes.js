const express = require('express');
const { createTimetableEntry, viewTimetable } = require('../controllers/timetableController');
const router = express.Router();

router.post('/', createTimetableEntry);
router.get('/', viewTimetable);

module.exports = router;
