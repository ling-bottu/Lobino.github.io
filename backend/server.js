const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

// MySQL connection setup
const connection = mysql.createConnection({
    host: 'localhost', // Change this to your MySQL host
    user: 'your_username', // Change this to your MySQL username
    password: 'your_password', // Change this to your MySQL password
    database: 'your_database' // Change this to your MySQL database name
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
});

// Middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json());

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

// API endpoint to handle order submissions
app.post('/submit-order', (req, res) => {
    const orderData = req.body;
    // Store the order in the database or perform other processing
    // For now, we'll just log the order data
    console.log('Order received:', orderData);
    // Send a response to acknowledge receipt of the order
    res.status(200).send('Order received successfully!');
});

// Start the server
const PORT = process.env.PORT || 4000; // Use port 4000 or the environment port if available
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

