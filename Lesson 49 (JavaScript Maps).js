//the new Map() method 
const fruit=new Map([
    ["apples",500],
    ["banana",300],
    ["Oranges",200]
])
console.log(fruit)

//set() method : you can add element to a map the set() method
const Fruit=new Map()
Fruit.set("apples",500)
Fruit.set("banana",300)
Fruit.set("Orange",400)
console.log(Fruit)

//set() can also be used to change the existing Maps values
Fruit.set("apples",400)
console.log(Fruit)

//Map.size
//size property return the number of element in a map
console.log(Fruit.size)

//Map.delete
console.log(Fruit.delete("apples"))
console.log(Fruit)

//Map.clear
console.log(Fruit.clear())
console.log(Fruit)

//Map.has
console.log(fruit.has("apples"))
console.log(fruit.delete("apples"))

//forEach()
console.log(fruit)
let text=""
fruit.forEach(function(value,key){
    text +=key+'='+value+" "
})
console.log(text)

//entries
let Text=""
for(const x of fruit.entries()){
    text +=x
}

//keys
let txt=""
for(const x of fruit.keys()){
    txt+=x
}
console.log(txt)

//values
let Txt=""
for (const x of fruit.values()){
    Txt+=x
}
console.log(Txt)

//Create an Array
const groupFruit=[
    {name:"apples",quantity:300},
    {name:"banana",quantity:500},
    {name:"orange",quantity:200},
    {name:"kiwi",quantity:150},
]
//Callback function to Group Element
function myCallabck({quantity}){
    return quantity>200?"ok":"low"
}
//group by Quantity
const result=Map.groupBy(fruits,myCallabck)

//Display result
