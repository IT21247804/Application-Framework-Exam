const express = require('express');
const { registerUser, loginUser, viewProfile, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile/:id', viewProfile);
router.delete('/:id', deleteUser);

module.exports = router;

