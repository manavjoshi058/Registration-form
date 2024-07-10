const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

// Handle form submission
router.post('/', async (req, res, next) => {
    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Please fill all fields.' });
        }

        // Create new submission
        const newSubmission = new Submission({
            name,
            email,
            message
        });

        // Save to database
        await newSubmission.save();

        // Respond to client
        res.status(200).json({ message: 'Form submitted successfully.' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
