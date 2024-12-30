//variables Names
let firstName="John"
let lastName="Doe"

let price=19.90
let tax=0.20

let fullPrice=price+(price*tax)
console.log(fullPrice)

// Always put space around operator (=+-*/),and after commas
// let x = y + z
const myarray= ["volvo", "saab", "Flat"]



// for(let i=0;myarray.length>i;i++){
//     console.log(myarray[i])
// }
// let i = 0;
// while(i < myarray.length){
//     console.log(myarray[i]);
//     i++;
// }

//code indentation
//Always use 2 spaces for indentation of code blocks
function toCelsius(f){
    return (5/9)*(f-32)
}

//statement Rules
//General rules for simple statements
//Always end a simple statement with a semicolon

const cars=["Saab","Volvo","BMW"];

const person={
    firstName:"John",
    lastName:"Doe",
    eyecolour:"John",
    age:50
}
for(x of cars){
    console.log(x)
}
myString="Hello World"
for(x of myString){
    console.log(x)
}

