// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber); // Resolve with the random number if it's greater than 0.5
        } else {
            reject(new Error('Random number is too low')); // Reject with an error otherwise
        }
    }, 1000); // Simulate delay of 1 second
});

// Handling the promise
myPromise.then((result) => {
    console.log('Success:', result); // Handle fulfillment
}).catch((error) => {
    console.error('Error:', error.message); // Handle rejection
});
