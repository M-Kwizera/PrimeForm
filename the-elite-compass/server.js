const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize dotenv to load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define API routes
app.get('/', (req, res) => {
    res.send('Welcome to The Elite Compass API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const axios = require('axios');

// Example API route to get workout plans
app.get('/api/workouts', async (req, res) => {
    try {
        const response = await axios.get('https://wger.de/api/v2/exercise/', {
            headers: {
                'Authorization': `Bearer ${process.env.WGER_API_KEY}`
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching workout data' });
    }
});

