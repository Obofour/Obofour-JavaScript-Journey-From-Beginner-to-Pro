const Person={
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"Blue"
}
console.log(Person)


//Create Source Object
const Animal={firstName:"Dog",lastName:"Bitch"}

//Assing Source to Target
console.log(Object.assign(Person,Animal))

//Object.entries() returns an array of key/value pairs in an Object
console.log(Object.entries(Person))

for ([x,y] of Object.entries(Person)){
    console.log(x+" : "+y+" , ")
}

//fromEntries()
const fruit=[
    ["apple",300],
    ["pears",900],
    ["banana",500]
]
console.log(typeof(fruit))
console.log(Object.fromEntries(fruit))
console.log(Object.values(Person))
console.log(Object.keys(Person))

//groupBy()
const person=[
    {name:"apples",quantity:300},
    {name:"bananas",quantity:500},
    {name:"oranges",quantity:200},
    {name:"kiwi",quantity:150}
]

function myCallback({quantity}){
    return quantity>200 ?"ok":"low"
}
console.log(Object.groupBy(person,myCallback))


// Map.groupBy() returns result as a map

//for in 
for(x in person){
    console.log(person[x])
}