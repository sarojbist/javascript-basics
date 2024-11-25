// Write a function that takes an array of numbers as input and returns a promise. 
// The promise should resolve with the sum of all the numbers in the array. 
// If the input is not an array or if any element in the array is not a number, 
// the promise should reject with an error message.

function checkArray(get) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(get)) {
            reject(new Error("Input is not an array"));
            return;
        }

        setTimeout(() => {
            const sum = get.reduce((a, b) => {
                return a + b;
            }, 0);
            resolve(sum);
        });
    });
}

let arr = [1, 2, 3, 4, 5];
let nonarr = "Haha";

let a = checkArray(arr);
a.then((result) => {
    console.log(result);
})