// dependencies
const express = require("express")
// we are going to use mongoose, so we can extablish our connection to MONGODB
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")
const Dev = require("./models/Dev")
// Initialize the Express App, we call express like a function what that does is it returns an object, with all the properties and methods that we need to begin building our express web APP.
const app = express();

// configure App settings
require('dotenv').config();

const {PORT = 4000, MONGODB_URL } = process.env;
// Below our settings we connect to mongodb
mongoose.connect(MONGODB_URL);

// Mongo Status Listen, ".on is a connected event listener and you can also do error in mongodb"
mongoose.connection
.on("connected", ()=> console.log("Connected to MongoDB"))
.on("error", (err) => console.log("Error with MongoDB: " + err.message))
// Mount Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}))
// ^ only when express is serving HTML and creates req.body

// app.use(express.json());
// ^ creates req.boy in json format

// Mount Our Routes
app.get("/", (req, res) =>{
    res.send("Hello and welcome to the people app");
});

// Index


// Create


// Tell Express to Listen, we'll add a callback function that gets invoked once it has begun listening right so once that is successful, we can have this console log prints out and just give us some feedback to let us know that express is listening.

app.listen(PORT, () => {
    console.log(`Express listening on port:${PORT}`);
});