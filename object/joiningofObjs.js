let person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};
let boy = {
  name: "Saroj",
  gender: "male",
  favNumber: 7,
};

// method 1 => This will add new keys, if there is same keys, then it will add according to 2nd argument.
// const newPerson = Object.assign(person, boy);
// This will mutate the original person as well
// console.log(boy)
// console.log(newPerson)

// method 2 => Using spread operator
const newObj = { ...person, ...boy };
console.log(newObj);

let student1 = { name: "Ram", age: 10, grade: 5 };
let student = { name: "Sam", age: 1, grade: 5 };

let students = [
  { name: "Ram", age: 10, grade: 5 },
  { name: "Sam", age: 1, grade: 5 },
];
console.log(students[1].name)
//Sam