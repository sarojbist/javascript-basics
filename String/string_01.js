// Use For Loop to print a string.
const prompt = require("prompt-sync")();

let name = prompt("Enter a string: ");

for (let i = 0; i < name.length; i++ )
{
    console.log(name[i]);
}
