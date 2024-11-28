// import express module
const express = require("express");

// create an express app
const app = express();

// serve static files from public directory
app.use(express.static("public"));

// define route for the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index");
});

// define route for the about
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about");
});

// define route for the 404 page
app.get((req, res) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

// set port
const port = 3000;

// start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
