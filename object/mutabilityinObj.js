// Mutability means changable. It means, we can chage the properties of object.
// For example, we can use person.age = 30 to actually change the person's age.

let person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};

// let newPerson = person;
// Here newPerson is the refrence of person. If we apply any change to this, it will change the original person as well.
// newPerson.age = 30;
// console.log(newPerson.age); //30

// So, you might think if we ever need to change on the new copy of the object but don't want to apply it on the original. In such cases we can do shallow copy of the object.
let newPerson2 = { ...person };
newPerson2.age = 30;

console.log("Original Age: ", person.age); 
//25
console.log("New Obj Age: ", newPerson2.age);
//30
