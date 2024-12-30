const fruit=new Map([
    ["apples",500],
    ["banana",300],
    ["Oranges",200]
])
//Map.get()
console.log(fruit.get("apples"))

//Map.set()
fruit.set("apples",700)
console.log(fruit)
//Map.set() change existing map values

//Map.size()
console.log(fruit.size)

//Map.delete
console.log(fruit.delete("apples"))
console.log(fruit)

//Map.clear
console.log(fruit.clear()) 
const Fruit=new Map([
    ["apples",500],
    ["banana",300],
    ["Oranges",200]
])

//Map.has()
console.log(Fruit.has("apples"))

//Map.foreach()
let text=""
Fruit.forEach(function(value,key){
    text+=key+" = "+value+" , "
})
console.log(text)

// Map.entries()
let txt=""
for(const x of Fruit.entries()){
    txt+=x+" , "
}
console.log(txt)

//Map.keys
console.log(Fruit.keys())
let Text=""

//Values
for(x of Fruit.values()){
    Text+=x+" , "
}
console.log(Text)

//Object as keys
 const apples={name:"apples"}
 const banana={name:"banana"}
 const oranges={name:"orange"}

 //create a Map
 const fruits=new Map()

 //Add the Object to the Map
 fruits.set(apples,500)
 fruits.set(banana,300)
 fruits.set(oranges,200)

 console.log(fruits)
 console.log(fruits.values())
 console.log(fruits.keys())

//Map.groupBy()
const Fruits=[
    {name:"apples",quantity:300},
    {name:"bananas",quantity:500},
    {name:"oranges",quantity:200},
    {name:"kiwi",quantity:150}
]
function myCallback({quantity}){
    return quantity>200?"ok":"low"
}
const result=Map.groupBy(Fruits,myCallback)
console.log(result)