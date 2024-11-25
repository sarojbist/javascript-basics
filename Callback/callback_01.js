// Callback function in JavaScript
// function show() {
//   console.log("I'm show function");
// }

// function geeky(callback) {
//   callback();
//   // callback and show is same now. SO calling callback means calling show
// }
// geeky(show);
// // calling geeky function and passing show function
 
function geeky(callback) {
    callback()
}

geeky( function show(){
    console.log("I'm show")
})