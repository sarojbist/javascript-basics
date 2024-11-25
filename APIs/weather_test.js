// Initiating a fetch request to the Chuck Norris Jokes API to fetch a random joke
let promise = fetch("https://api.chucknorris.io/jokes/random");

// Handling the response from the fetch request using promises
promise.then((value1) => {
    // Converting the response to JSON format
    return value1.json();
}).then((value2) => {
    // Logging the JSON data (random joke) to the console
    console.log(value2);
});
