// server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Your secure API key
const API_KEY = process.env.WEATHER;

app.post('/api/weather', async (req, res) => {
  const { city, units, lang } = req.body;

  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}&lang=${lang}`;
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error making API call');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
