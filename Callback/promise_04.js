function asyncOperation1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some Details1");
            resolve("Details retrieved successfully1"); // Resolve the promise with a value
        }, 2000);
    });
}
function asyncOperation2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some Details2");
            resolve("Details retrieved successfully2"); // Resolve the promise with a value
        }, 2000);
    });
}

console.log("Fetching Data1...")
let p1 = asyncOperation1();
p1.then((res) => {
    console.log(res); // Log the resolved value
    console.log("Fetching Data2...")
    let p2 = asyncOperation2();
    p2.then((res) => {
        console.log(res)
    })
});

// The second operation (asyncOperation2) is initiated after the first one (asyncOperation1) is completed.