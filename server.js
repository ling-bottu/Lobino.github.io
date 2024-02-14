const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors()); // Add the cors middleware to enable CORS

// Route handler for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});


// API endpoint to handle user actions
app.post('/user-action', (req, res) => {
    const { action, productName } = req.body;

    // Store the user action in the database
    // Send notification to you
    sendNotification(`User performed ${action} action for product: ${productName}`);

    res.sendStatus(200);
});

// Function to send notifications
function sendNotification(message) {
    // Implement notification logic here (e.g., send email, push notification, etc.)
    console.log(message);
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
