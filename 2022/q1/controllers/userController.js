const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { userName, email, password, userType, other } = req.body;

    try {
        const user = new User({ userName, email, password, userType, other });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id, userType: user.userType }, 'secret', { expiresIn: '1h' });
        res.status(200).json({ token, user });
        console.log(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const viewProfile = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
      const users = await User.find(); // Fetch all users
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const editUser = async (req, res) => {
    const { id } = req.params;
    const { userName, email, password, userType, other } = req.body; // Updated user data
  
    try {
      // Find the user to update
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update user fields (except password for now)
      user.userName = userName;
      user.email = email;
      user.userType = userType;
      user.other = other;
  
      // If password is provided, hash it before saving
      if (password) {
        user.password = await bcrypt.hash(password, 10); // Adjust hashing rounds as needed
      }
  
      await user.save(); // Save the updated user
  
      res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = { registerUser, loginUser, viewProfile, deleteUser, getAllUsers, editUser };
