const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./db'); // Import the database connection code
const registerRouter = require('./routes/register'); // Import the router code for the register page

// Connect to the database
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Routes
app.use('/api', registerRouter); // Use the register router for '/api/register' endpoint

// Start the server
const PORT = process.env.PORT || 3000; // Use the environment variable for the port or default to 3000
app.listen(8000, () => {
  console.log(`Server is running on port 8000!`);
});
