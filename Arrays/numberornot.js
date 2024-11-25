// Check whether the every elements of given array are numbers or not
function check(a) {
  let test = true;
  a.forEach((element) => {
    if (typeof element !== "number") {
      test = false;
    }
  });
  return test;
}

let arr = [1, 2, 3, 43, 4];
let checkthearr = check(arr);
if (checkthearr == true) {
  console.log("Given array is numbers");
} else {
  console.log("Array contains non numbers");
}
