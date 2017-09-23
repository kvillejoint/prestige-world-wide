// ===============================
//          Dependencies
// ===============================
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
// Initialize Express
var app = express();
// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("build", {
  index: "homepage.html"
}));

// app.use(express.static("public"));

app.get("/app/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/app", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "homepage.html"));
});

// ===============================
//       MONGOOSE / MONGO
// ===============================
mongoose.connect("mongodb://phil:pww@ds147034.mlab.com:47034/heroku_7pkzfm7p");
// mongoose.connect("mongodb://localhost/prestige-world-wide");
var db = mongoose.connection;
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});
db.once("open", function () {
  console.log("Mongoose connection successful.");
});
app.listen(80, function () {
  console.log("App running on port 4000!");
});