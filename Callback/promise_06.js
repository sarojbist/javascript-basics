// Write a function that accepts a number as input and returns a promise. The promise should resolve if the number is even and reject if the number is odd. If the input is not a number, the promise should reject with an error message.
const prompt = require("prompt-sync")();
function acceptnum(num) {
    return new Promise((resolve, reject) => {
        // Check if the input is a number
        if (typeof num !== 'number' || isNaN(num)) {
            reject(new Error('Input is not a number'));
            return; // Exit the function early
        }
        
        // Simulate an asynchronous operation
        setTimeout(() => {
            if (num % 2 === 0) {
                resolve("Number is even");
            } else {
                reject("Odd number");
            }
        }, 2000);
    });
}

let a = acceptnum(5);
a.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
