// Define the URL endpoint for fetching cat facts
const URL = "https://cat-fact.herokuapp.com/facts";
let para = document.querySelector(".data");
let btn = document.querySelector(".btn");

// Create a function to asynchronously fetch cat facts
const getFacts = async () => {
    console.log("Getting Data..."); // Log a message indicating that data retrieval is in progress
    let response = await fetch(URL); // Use the fetch API to make a GET request to the specified URL
    // console.log(response); // Log the response object received from the fetch request
    // console.log(response.status);
    let data = await response.json();
    console.log(data[0].text);
    btn.addEventListener("click", function() {
        para.innerText = data[1].text;
    })
    

}

// Call the getFacts function to initiate the data retrieval process
getFacts();
