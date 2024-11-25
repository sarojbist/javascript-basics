// Simulated asynchronous function to fetch user data
function fetchUserData(userId, callback) {
    setTimeout(() => {
        // Simulated user data in object form
        const users = {
            1: { id: 1, username: 'alice', email: 'alice@example.com' },
            2: { id: 2, username: 'bob', email: 'bob@example.com' },
            3: { id: 3, username: 'charlie', email: 'charlie@example.com' }
        };

        const user = users[userId]; // Simulated database lookup

        if (user) {
            callback(null, user); // Call the callback with null error and user data
        } else {
            callback(new Error('User not found')); // Call the callback with an error
        }
    }, 1000); // Simulate delay of 1 second
}

// Callback function to handle the result
function handleUserData(err, user) {
    if (err) {
        console.error('Error:', err.message);
    } else {
        console.log('User data:', user);
    }
}

// Example usage: Fetch user data for user with id 2
fetchUserData(1, handleUserData);

// This example demonstrates how callback functions can be used to handle asynchronous operations, such as fetching data from a server, in a clean and modular way.