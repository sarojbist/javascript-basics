// Simple example of using of Post Request to Fetch API
// Send a POST request to the specified URL
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: 'POST', // Specify the HTTP method as 'POST'
  headers: {
    'Content-Type': 'application/json', // Specify the content type of the request body as JSON
    // Add any other headers if needed (e.g., authentication headers)
  },
  body: JSON.stringify({
    title: 'Harry', // Sample title data
    body: 'Bhai', // Sample body data
    userId: 199, // Sample user ID data
  }) // Convert data to JSON format and include it in the request body
})
.then(response => response.json()) // Parse the response as JSON
.then(data => {
  // Handle the response data
  console.log(data); // Log the parsed JSON data to the console
})
.catch(error => {
  // Handle any errors that occur during the fetch operation
  console.error('Error:', error); // Log the error message to the console
});
