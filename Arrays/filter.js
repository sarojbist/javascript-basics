// Use Filter to check the array elements divisble by 2.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// This is normal function
// function check(num) {
//     if (num %2 == 0) {
//         return num;
//     }
// }
// let newnum = num.filter(check)
// console.log(newnum)

// This is arrow function
// let newnum = num.filter((num) => {
//   if (num % 2 == 0) {
//     return num;
//   }
// });
// console.log(newnum);

// This is ANonymous Function
let newnum = num.filter(function (num) {
  if (num % 2 == 0) {
    return num;
  }
});
console.log(newnum);
