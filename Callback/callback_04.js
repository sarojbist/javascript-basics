function getdata(dataId, NextData) {
    setTimeout(() => { 
        console.log(dataId);
        if(NextData) {
            NextData(); // Call NextData callback function
        }
    }, 2000);
}

// Callback Hell -Nested Callback
getdata(1, () => {
    console.log("Getting data 2...");
    getdata(2, () => {
        console.log("Getting data 2...");
        getdata(3)
    });
});






// function check(a,b,callback) {
//     callback(a,b)
// }

// check(1,5,(a,b) => {
//     console.log(a+b)
// })