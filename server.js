// dependencies
const express = require("express")

// Initialize the Express App, we call express like a function what that does is it returns an object, with all the properties and methods that we need to begin building our express web APP.
const app = express();

// configure App settings
require('dotenv').config();

const {PORT = 4000, MONGODB_URL } = process.env;
// Mount Middleware

// Mount Our Routes
app.get("/", (req, res) =>{
    res.send("Hello World!");
});

// Tell Express to Listen, we'll add a callback function that gets invoked once it has begun listening right so once that is successful, we can have this console log prints out and just give us some feedback to let us know that express is listening.

app.listen(PORT, () => {
    console.log(`Express listening on port:${PORT}`);
});