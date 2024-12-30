//the new Set() Method
//Pass an array to the new Set() constructor
const Letters=new Set(["a","b","c","d"])

//The add() Method()
const fruit=new Set()
fruit.add("Mango")
fruit.add("Orange")
fruit.add("Kiwi")
console.log(fruit)

//list items
let Text=""
for(x of fruit){
    Text+=x+" , "
}
console.log(Text)

//has() method return true if a specified value exist in a set
console.log(fruit.has("Orange"))
console.log(fruit.has("cherry"))

//forEach() method 
//the forEach() method invoke a function for each Set element
let txt=""
Letters.forEach(function(value){
    txt+=value
})
console.log(txt)

//values()
const myIterator=Letters.values()
console.log(myIterator)

let Txt=""
for(const entry of myIterator){
    Txt+=entry
}
console.log(Txt)

//keys() method return an iterator object with the values in a set
console.log(Letters.keys())

//entries() method return an iterator[value,value] pairs set
console.log(Letters.entries())