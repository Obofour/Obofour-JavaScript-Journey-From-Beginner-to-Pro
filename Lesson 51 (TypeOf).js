//typeOf 
console.log(typeof("Obofour"))
console.log(typeof(12))
console.log(typeof(true))
console.log(typeof(BigInt(64)))
console.log(typeof(13e5))
console.log(typeof(Symbol()))

//Complex Data Types
console.log(typeof({name:"John"}))
console.log(typeof([1,2,3,4]))
console.log(typeof(new Map()))
console.log(typeof(new Set()))

//How to recognize an Array
const Fruits=["Apples","Banana","Oranges"]
console.log(Array.isArray(Fruits))

//instanceOf Operator
const time=new Date()
console.log(time instanceof Date) 

//create a Map
const fruit=new Map([
    ["apples",500],
    ["banana",300],
    ["oranges",200]
])
console.log(fruit instanceof Map)

//create a set
const myfruit=new Set(["apples","banana","oranges"])
console.log(myfruit instanceof Set)

//undefined Variables
console.log(typeof car)
let emptyCar=""
console.log(typeof(emptyCar))

let person={firstname:"John",secondname:"Doe",age:50,eyecolor:"blue"}
person=null
console.log(typeof(person))