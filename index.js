const express = require('express');
const app = express();
const PORT = 3000;

// This is a simple route for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Welcome to the LaunchCut API!');
});

// ✨ NEW: Our first real API endpoint
app.get('/api/videos', (req, res) => {
  // In the future, we'll get this data from a database.
  // For now, we'll send back some "mock" (fake) data.
  const mockVideos = [
    { id: 1, title: 'My First Awesome Video' },
    { id: 2, title: 'A Trip to the Mountains' },
    { id: 3, title: 'Cooking Show: Episode 1' }
  ];

  // Send the data back as a JSON response.
  res.json(mockVideos);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});