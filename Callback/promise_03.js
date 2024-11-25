// Define a function to create and return a promise
function getPromise() {
    // Return a new promise
    return new Promise((resolve, reject) => {
        // Log a message indicating that the promise is being created
        console.log("Hey");

        // Resolve the promise with the value "done"
        resolve("done");
    });
}

// Call the function to get a promise
let promise = getPromise();

// Handle the successful resolution of the promise
promise.then((res) => {
    // Log a message indicating that the promise has been fulfilled
    console.log("Promise fulfilled: "+ res);
});
