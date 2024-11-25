let arr1 = [2, 3, 43, 45, 32, 2];

for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i] > arr1[j]) {
            let temp;
            temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }
    }
}
console.log(arr1);
console.log(arr1[0], arr1[arr1.length - 1]);