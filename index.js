const express = require('express');
const app = express();
app.use(express.json());
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
// ✨ NEW: User Registration Endpoint
app.post('/api/register', (req, res) => {
  // Get the email and password from the incoming request body
  const { email, password } = req.body;

  // For now, we just log it to our own console to show it works
  console.log(`New user registered: Email - ${email}, Password - ${password}`);

  // Send back a success message
  res.status(201).json({ message: 'User registered successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});