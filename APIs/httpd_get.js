// Creating an Express Server and Making an HTTPS Request in Node.js

// Importing required modules
const express = require("express"); // Import Express.js module for creating web servers
const https = require("https"); // Import the Node.js HTTPS module for making HTTPS requests


// Create an Express application
const app = express(); // Create an instance of Express

// Define the URL for the HTTPS GET request
const url = "https://api.openweathermap.org/data/2.5/weather?q=Dhangadhi&appid=6215fd08ac2cdf4b1b82db179c7c1440&units=metric";

// Make an HTTPS GET request to the specified URL
https.get(url, function(response) {
    // This callback function executes when a response is received from the API
    // console.log(response); // Log the response object (Note: This may not display the response data directly)
    response.on("data", function(data) {
        // console.log(data);
        const weatherData = JSON.parse(data);
        const temp = weatherData.weather[0].description;
        console.log(temp);
    })

});

// Define a route for handling GET requests to the root URL "/"
app.get("/", function(req, res){
    // This callback function executes when a GET request is made to "/"
    // res.send("server is up"); // Send a response "server is up" back to the client
    res.send("The temp is"+ temp);
});

// Start the Express application server and make it listen on port 3000
app.listen(3000, function() {
    // This callback function executes once the server starts successfully
    console.log("server is running... "); // Log a message to the console indicating that the server is running
});
