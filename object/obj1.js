// Here you have object, and I use spread operator to make copy of the person object to add new key and values.
const person = {
    name: "Saroj",
    age: 20
}
const gender = "male";
const newobj = {...person, gender: gender}
console.log(newobj)

// In this case, the ouput will be like { name: 'Saroj', age: 20, gender: 'male' }

// Now, I want you to give answer to this question. What will be the ouptut if I give key with square braces kike this
// const newobj = {...person, [gender]: gender}