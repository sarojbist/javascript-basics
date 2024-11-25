// Use Reduce method to find sum of all array elements using difeerent types of functions.

let num = [1, 2, 3, 4, 5, 6];

// This is normal function
// function sum(a, b) {
//   return a + b;
// }

// let newnum = num.reduce(sum);
// console.log(newnum);

// This is Anonymous Function
// let newnum = num.reduce(function (a,b) {
//     return a+b;
// })
// console.log(newnum)

// This is arrow function
let newnum = num.reduce((a, b) => {
  return a + b;
});
console.log(newnum);
