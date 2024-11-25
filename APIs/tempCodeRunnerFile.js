let promise = fetch("https://goweather.herokuapp.com/weather/Curitiba");

promise.then((value1) => {
return value1.json()
}).then((value2) => {
    console.log(value2);
})