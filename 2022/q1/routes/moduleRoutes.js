const express = require('express');
const { createModule, allocateTimeslot, viewModules } = require('../controllers/moduleController');
const router = express.Router();

router.post('/', createModule);
router.put('/:id/timeslot', allocateTimeslot);
router.get('/', viewModules);

module.exports = router;
