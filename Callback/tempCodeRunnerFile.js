function getdata(dataId, NextData) {
    setTimeout(() => { 
        console.log(dataId);
        if(NextData) {
            NextData(); // Call NextData callback function
        }
    }, 2000);
}

// Example usage
getdata(1, () => {
    getdata(2);
});
