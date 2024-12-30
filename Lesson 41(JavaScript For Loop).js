//syntax 
//for(expression 1;expression 2;expression 3){
// block of to be executed
//}

//expression 1 is executed(one time)before the execution of the code block
//expression 2 defines the condition for executing the code block
//expression 3 (every time) after the the code block has been changed

// example
for(let i=0;i<5;i++){
    text +="The number is"+i+"<br>"
}

//Expression 1 sets a variable before the loop start(let i=0)
//Expression 2 defines the condition for the the loop to run(i must be less than 5)
//Expression 3 increase a value(i++) each time the code block in the loop been executed

//Expression 1
//expression one is Optional and you can initiate many values in expression one(seperated by commas)

//example
cars=["camry","volvo","benz"]
for(let i=0,len=cars.length,text="";i <len;i++){
    text+=cars[i]+"<br>"
}
console.log(text)
//And you can Omit expression 1(like when your values are set before the loop start)

let i=2;
let len=cars.length
let text=""
for(;i<len;i++){
    text +=cars[i]+"<br>"
}

//Expression 2
//Expression is Optional.if expression 2 returns true,the loop start over again,if it returns false the loop ends
//if you omit expression 2,you must provide a break inside inside the loop,Otherwise the looop will never end.This crash the brower

//Expression3
//Expression 3 can do anything like negative increment(i--),positive increment(i=i+15),or anything else
//Expression 3 can also be omitted (like when you increase your values inside the loop)

// let i=0;
// let len=cars.length
// let text=""
// for(;i<len;){
// text+=cars[i]+"<br>"
//i++
// }

//Loop Scope(  using var in loops)

// var i=5
//for(var i=0;i<10,i++){
// some code
// } 

//using let
//let i=5
//for(let i=0;len=cars.lenght,i++){
// some code
// }

//using var the variable in the loop redeclares the outside the loop
//when let is used to declare the i variable in a loop, the i variable will only be within the loop