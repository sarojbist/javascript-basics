// Creating a promise to simulate fetching data asynchronously
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = { name: 'John', age: 30 };
        // Simulating a successful data retrieval
        resolve(data);
        // Simulating an error
        // reject(new Error('Failed to fetch data'));
    }, 2000);
});

// Consuming the promise
fetchData.then((data) => {
    console.log('Data:', data);
}).catch((error) => {
    console.error('Error:', error.message);
});
