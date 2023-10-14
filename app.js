const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Call the function to connect to the database
// const notesRoute = require("./routes/notes");
const chatRoutes = require("./routes/chatRoutes");

app.use("/chat", chatRoutes);


module.exports = app;