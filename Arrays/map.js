// Show the example of map in Array using different types of function.

let num = [1, 2, 3, 4, 5];

// This is normal function
// function multiply (a) {
//     return a*a;
// }

// let newnum = num.map(multiply);
// console.log(newnum)

// This is arrow function
// let newnum = num.map((a) => {
//     return a*a;
// })
// console.log(newnum)

// This is Anonymous Function
let newnum = num.map(function (a) {
  return a * a;
});
console.log(newnum);
