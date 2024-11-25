// Function to simulate an asynchronous operation with a callback
function simulateAsyncOperation(callback) {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            callback(null, randomNumber); // Call the callback with the random number if it's greater than 0.5
        } else {
            callback(new Error('Random number is too low')); // Call the callback with an error otherwise
        }
    }, 1000); // Simulate delay of 1 second
}

// Callback function to handle the result or error
function handleResult(error, result) {
    if (error) {
        console.error('Error:', error.message); // Handle error
    } else {
        console.log('Success:', result); // Handle result
    }
}

// Call the simulateAsyncOperation function with the handleResult callback
simulateAsyncOperation(handleResult);
