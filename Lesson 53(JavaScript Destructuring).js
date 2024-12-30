const person={
    firstname:"Howdy",
    lastname:"Obofour",
    age:19
}

//Destructing
//the order of properties dont matter
let {firstname,lastname}=person
console.log(firstname+" "+lastname)

//Destructing is not destructive

//Object default values
const Person={
    firstName:"Michael",
    lastName:"Anim Asante",
    age:18
}
let {firstName,lastName,country="Us"}=Person
console.log(firstName+" "+lastName+" "+country)

//Object Property Alias
const Candidate={
     Firstname:"Mikie",
     Lastname:"Rheignz",
     age:20
}
let {Lastname:name}=Candidate
console.log(name)

//String Destructuring
let Name="W3Schools"
let[a1,a2,a3,a4,a5]=Name
console.log(a1)

//Array Destructuring
const fruit=["Bananas","Oranges","Apples","Mangos"]

//Destructuring
let [fruit1,fruit2]=fruit

//Skipping Array value
let[Fruit1,,,Fruit2]=fruit

console.log(fruit1)
console.log(Fruit1,Fruit2)

//Array Position Values
myfruit=["Bananas","Oranges","Apples","Mangos"]
let{[0]:myfruit1,[1]:myfruitfruit2}=myfruit
console.log(myfruit1,myfruitfruit2)

//The Rest Property
const number=[10,20,30,40,50]
const[a,b,...rest]=number
console.log(a)

//Destructuring Maps
const Shopfruits=new Map([
    ["apples",500],
    ["bananas",300],
    ["Oranges",200]
])

//Destructing
let text="";
for(const [key,value] of Shopfruits){
    text+=key+" is "+value+" ,"
}
console.log(text)

//Swapping JavaScript
let Prenom="Howdy"
let Nom="Obofour"
//Destructing
// [Prenom,Nom]=[Nom,Prenom]
// console.log(Prenom," ",Nom)