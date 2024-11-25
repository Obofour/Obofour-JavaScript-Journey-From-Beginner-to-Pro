//comparison Operators

// == equal to
//=== equal value and equal type
// != not equal
// !== not equal type 
// > greater than
//< less than
// >= greater than or equal to
// <=less than or equal to

//Logical Operators
//&& and
// || or 
// ! not

// conditional(Ternary) Operator
//variablename=(condition)?value1:value2

// let age=30
// let variablename=(age<18)?"Too young":"Old enough"
// console.log(variablename)

age=18
if(isNaN(age)){
    voteable="Input is not a Number"
}
else{
    voteable=(age<18)?"Too young":"Old enough"
}
console.log(voteable)

//The Nullish coalescing Operator(??)
//The ?? operator return the  first argument if it is not nullish(null or undefined)
let myname=10
let text="missing"
let result= myname??text
console.log(result)

//The OPtional Chaining Operator(?.)
//the ?. operator return undefined if an object is null or undefined
const car={type:"flat",model:"500",color:"white"}
console.log(car?.name)
// console.log(car.name)