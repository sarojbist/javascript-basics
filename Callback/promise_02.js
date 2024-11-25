function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is " + id);
            resolve("success");
        }, 3000);
    });
}

getData(5);
