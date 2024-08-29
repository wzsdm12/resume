const express = require('express');
const router = express.Router();
const Template = require('../models/template');

// Save a template
router.post('/', async (req, res) => {
  if (!req.auth.userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { name, data } = req.body;
  try {
    console.log('Saving template:', { userId: req.auth.userId, name, data });
    const newTemplate = new Template({
      userId: req.auth.userId,
      name,
      data
    });
    const savedTemplate = await newTemplate.save();
    console.log('Template saved successfully:', savedTemplate);
    res.json(savedTemplate);
  } catch (err) {
    console.error('Error saving template:', err);
    res.status(500).json({ error: err.message });
  }
});

// Get all templates for a user
router.get('/', async (req, res) => {
  if (!req.auth.userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const templates = await Template.find({ userId: req.auth.userId });
    res.json(templates);
  } catch (err) {
    console.error('Error fetching templates:', err);
    res.status(500).json({ error: err.message });
  }
});

// Load a specific template
router.get('/:templateId', async (req, res) => {
  if (!req.auth.userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const template = await Template.findOne({ _id: req.params.templateId, userId: req.auth.userId });
    if (!template) return res.status(404).json({ error: 'Template not found' });
    res.json(template);
  } catch (err) {
    console.error('Error loading template:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;