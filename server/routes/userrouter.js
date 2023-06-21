const express = require('express');
const router = express.Router();
const upload = require('../utils/upload'); // Import the file upload middleware

const { registerUser } = require('../controllers/register'); // Import the corresponding controller

// Register a new user
router.post('/register', upload.single('profileImage'), async (req, res) => {
  try {
    const result = await registerUser(req.body, req.file); // Pass the uploaded file to the controller
    if (result.success) {
      res.status(200).json(result); // Send the success response back to the frontend
    } else {
      res.status(400).json(result); // Send the error response back to the frontend
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
