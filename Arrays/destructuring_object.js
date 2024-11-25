const user = {
    name: "xyz",
    age: 5
}
// const Name = user.name;
// console.log(Name)
// const{name, age} = user;
// console.log(name);

function greet({name}) {
    console.log("Hi "+ name);
}
greet(user)