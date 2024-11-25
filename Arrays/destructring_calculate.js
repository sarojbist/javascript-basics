function calculate(a,b) {
    const add = a + b;
    const sub = a - b;
    const mul = a * b;
    const div = a / b;

    return[add, sub, mul, div];
}
let values = calculate(10, 2);
console.log(values) 
const [add, sub, mul, div] = values;
console.log(sub)