//indexOf() method searches an array for an element value and return its position
const Fruit=["Apple","Orange","Mango"]
position=Fruit.indexOf("Mango")//return -1 when not found 
console.log(Fruit)
console.log(position)

//LastIndexOf() is the same as Array.indexOf(),but retuen the position of te the last occyrence of the specified element
console.log(Fruit.lastIndexOf("Apple"))//array.lastIndexOf(item,start)

//Array include()
//This allow us to check if teh an element is present in an array
console.log(Fruit.includes("Orange"))//return a bool

//Array find()
//find() method return the value of the first array element that passes a test function

numbers=[4,9,16,25,29]
console.log(numbers.sort((a,b)=>a-b))
let first=numbers.find(myFunction);
function myFunction(value,index,array){
    return value>18
}
console.log(first)

//findIndex() method returns te index of the first array element passes a test function
second=numbers.findIndex(myArrayFunction)
function myArrayFunction(value,index,array){
    return value>18
}
console.log(second)

//findLast()
//method start from the end od an array and return the value of the third element
const temp=[27,28,30,40,42,35,30]
let high=temp.findLast(x =>x>40)
console.log(high)

//const findLastIndex()
// const tempe=[27,28,30,40,42,35,30]
// let pos=tempe.findLastindex(x =>x>40)
// console.log(pos)
