function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("success");
            resolve(200);
        }, 2000)
    })
}

async function getWeather() {
    await api(); //1st call
    await api(); //2nd call
}

getWeather();