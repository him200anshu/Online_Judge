const User = require('../models/user');

const registerUser = async (req, res) => {
  try {
    const { username, name, email, password } = req.body;

    // Perform any validation or data manipulation here

    const newUser = new User({
      username,
      name,
      email,
      password
    });

    const savedUser = await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during registration' });
  }
};

module.exports = {
  registerUser
};
