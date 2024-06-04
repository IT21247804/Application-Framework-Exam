const express = require('express');
const { registerUser, loginUser, viewProfile, deleteUser, getAllUsers, editUser  } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile/:id', viewProfile);
router.delete('/:id', deleteUser);
router.get('/profiles/', getAllUsers );
router.patch('/profile/:id', editUser);

module.exports = router;

