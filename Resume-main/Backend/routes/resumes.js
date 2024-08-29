const express = require('express');
const router = express.Router();
const Resume = require('../models/resume')
// Create a new resume
router.post('/', async (req, res) => {
  const { userId, personalInformation, education, experience, contactInformation, awards } = req.body;
  try {
    const newResume = new Resume({
      userId,
      personalInformation,
      education,
      experience,
      contactInformation,
      awards,
    });
    const savedResume = await newResume.save();
    res.json(savedResume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a user's resume
router.get('/:userId', async (req, res) => {
  try {
    const resume = await Resume.findOne({ userId: req.params.userId });
    if (!resume) return res.status(404).json({ error: 'Resume not found' });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
