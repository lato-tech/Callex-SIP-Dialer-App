const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');
// Register
router.post('/register', async (req, res) => {
  try {
    const {
      username,
      password,
      sipServer
    } = req.body;
    const user = new User({
      username,
      password,
      settings: {
        sipServer
      }
    });
    await user.save();
    const token = jwt.sign({
      userId: user._id
    }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });
    res.status(201).json({
      token
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});
// Login
router.post('/login', async (req, res) => {
  try {
    const {
      username,
      password
    } = req.body;
    const user = await User.findOne({
      username
    });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        error: 'Invalid credentials'
      });
    }
    const token = jwt.sign({
      userId: user._id
    }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });
    res.json({
      token
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});
// Get user settings
router.get('/settings', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    res.json(user.settings);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});
module.exports = router;