// Dependencies
var express = require("express");
var path = require("path");

// Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Express app data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ROUTES
require(".htmlroute")(app);


//Start server to beging listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});