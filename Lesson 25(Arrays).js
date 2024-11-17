//An Array is a special variable which can hold more than one value
const car=["Saab","Volvo","BMW"]//array
const myCars=[
    "Saab",
    "Volvo",
    "BMW"
]//Multiple line

myGarage=[]//providing the element
myGarage[0]="Saab"
myGarage[1]="Volvo"
myGarage[2]="BMW"

//the new keyword
Cars= new Array("camry","Toyota","Vibe")
Cars[2]="Opel"//Changing element 

//Converting an Array to a string
conversion=Cars.toString()

//Arrays are Objects
Person={
    firsname:"John",
    lastname:"Doe",
    age:46}//object

Candidate=["John","Doe",46]

//Adding Element
//when adding a new element we use the push() method

//Differences Between Arrays and object
//In javaScript arrays use numbered  indexes
//In Javascript object use named indexed

// You can Use
const point=new Array()
const Point=[]
console.log(point)
console.log(Point)

//How to recognise an array
console.log(typeof(Cars))//using typeof function
console.log(Array.isArray(myGarage))//using Array.isArray()
console.log(Cars instanceof Array)//Using Instance operator


//Print Output
console.log(car)//Access Full array
console.log(myCars)
console.log(myGarage)
console.log(Cars)
console.log(Cars[0])//Acess Array Element
console.log(Cars)
console.log(conversion) //Converting an Array to a string
console.log(typeof(Person))
console.log(typeof(Candidate))//Array is a special type of Object
console.log(car.length)//return the number of element
console.log(car.sort())//Sort the array
console.log(myGarage[0])//Accessing the first Element
console.log(myGarage[myGarage.length -1])// Accessing Last array Element
console.log(myGarage.push("Lexus"))
console.log(myGarage)

