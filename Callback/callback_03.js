// Create a function named `calculateSquareAndCube` that takes a number as input. If the number is even, calculate its square; if it's odd, calculate its cube. The function should perform the calculation asynchronously and use a callback function to handle the result or any potential errors. If the input is not a number, the function should call the callback with an error message.
// Importing the prompt-sync module to get user input from the console
const prompt = require("prompt-sync")();

// Function to calculate square or cube asynchronously and handle the result or errors using a callback
function calculateSquareAndCube(num, callback) {
  // Simulating asynchronous operation with setTimeout
  setTimeout(() => {
    // Check if the input is not a number
    if (typeof num !== "number") {
      // If not a number, call the callback with an error
      callback(new Error("Not a number."));
    } else if (num % 2 == 0) {
      // If the number is even, calculate its square
      var a = ("Square of your num is: " + num * num);
      // Call the callback with null (no error) and the calculated square
      callback(null, a);
    } else {
      // If the number is odd, calculate its cube
      var a = ("Cube of your number is: " + num * num * num);
      // Call the callback with null (no error) and the calculated cube
      callback(null, a);
    }
  }, 1000); // Simulating delay of 1 second
}

// Callback function to handle the result or errors
function result(err, result) {
  // If an error occurred during the calculation
  if (err) {
    // Log the error message
    console.error("Error: " + err.message);
  } else {
    // Log the calculated result
    console.log(result);
  }
}

// Get input from the user
var a = parseInt(prompt("Give a number: "));
// Call the calculateSquareAndCube function with the user input and the result callback
calculateSquareAndCube(a, result);
