// Import the Express library, which we defined in package.json
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number our server will listen on. 3000 is standard for development.
const PORT = 3000;

// This is our first "API route".
// When someone visits our server's main address, this function will run.
app.get('/', (req, res) => {
  res.send('Welcome to the LaunchCut API! The server is running.');
});

// Start the server and make it listen for requests on our specified port.
// The message inside console.log will be displayed when the server starts successfully.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
