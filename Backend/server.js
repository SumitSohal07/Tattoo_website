const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create User model
const User = mongoose.model('User', userSchema);

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Sign-up route
app.post('/signup', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

// Custom user data route
app.post('/custom-data', async (req, res) => {
  try {
    const { userId, customData } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.customData = customData;
    await user.save();
    res.json({ message: 'Custom data updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating custom data' });
  }
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});