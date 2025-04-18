// server/boots/alumni.js
const express = require('express');
const router = express.Router();
const Alumni = require('../models/alumni');

// @desc    Get all alumni
// @route   GET /api/alumni
router.get('/', async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.json(alumni);
  } catch (err) {
    res.status(500).json({ message: 'Server error: ' + err.message });
  }
});

// @desc    Create new alumni
// @route   POST /api/alumni
router.post('/', async (req, res) => {
  try {
    const newAlumni = new Alumni(req.body);
    await newAlumni.save();
    res.status(201).json(newAlumni);
  } catch (err) {
    res.status(400).json({ message: 'Error saving alumni: ' + err.message });
  }
});

module.exports = router;
