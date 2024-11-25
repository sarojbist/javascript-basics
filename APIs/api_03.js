let btn = document.querySelector(".btn");
let input = document.querySelector(".input");

btn.addEventListener("click", function() {
  let city = input.value;
  console.log(city)
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6215fd08ac2cdf4b1b82db179c7c1440&units=metric`;

  // Make an HTTPS GET request using fetch API
  fetch(url) // Initiate an HTTP GET request to the specified URL
    .then(response => response.json()) // Convert the HTTP response to JSON format
    .then(data => {
      // Handle the JSON data returned from the API

      // Extract the temperature description from the API response
      const temp = data.main.temp;

      // Log the temperature description to the browser's console
      console.log(temp);

      // Update the DOM to display the temperature description on the webpage
      document.getElementById("tempDisplay").textContent = `The temp is ${temp}`;

      // Getting image from API
      const icon = data.weather[0].icon;
      let img = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      document.querySelector("img").setAttribute("src", img);
    })
    .catch(error => {
      // Handle any errors that occur during the HTTP request or JSON parsing

      // Log the error message to the browser's console
      console.error('Error:', error);
    });
});
