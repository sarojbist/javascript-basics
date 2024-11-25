// Simple use of Constructor Function

// Define a constructor function called HouseKeeper
function HouseKeeper(name, age, language) {
    this.name = name;
    this.age = age;
    this.language = language;
}

// Create instances of HouseKeeper using the 'new' keyword
var houseKeeper1 = new HouseKeeper("Rita", 15, ["Eng", "UK"]);
var houseKeeper2 = new HouseKeeper("Roji", 15, ["Eng", "UK"]);

// Log the instances to the console
console.log(houseKeeper1);
console.log(houseKeeper2);

// Log the 'name' property of houseKeeper1
console.log(houseKeeper1.name);
