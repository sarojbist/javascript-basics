// Define an asynchronous function named greet
async function greet() {
    // This function immediately returns a resolved promise with the value "haha"
    return "haha";
}

// Call the greet function and assign its return value (a promise) to the variable 'a'
let a = greet();

// Log the value of 'a' to the console
console.log(a);

a.then((res) => {
    console.log(res);
})
