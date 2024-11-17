//Array
fruit=["Banana","Orange","Orange","Apple","mango"]
//lenght
console.log(fruit.length)

//tostring
console.log(fruit.toString())//convert array to string

//Array at()
console.log(fruit.at(2))//return index
console.log(fruit[3])//return index

//Array join()
console.log(fruit.join("*"))//joins all array into a string,it behaves just like toString(),but in addition you can specify the seperator

//Popping and Pushing
//pop() remove the last element from an array
console.log(fruit.pop())
console.log(fruit)

//push() add a new element to an array
console.log(fruit.push("mango"))
console.log(fruit)

//Shifting Element
//Shifting is equivalent to popping
//removes the first array element and "shifts"  all other element to a lower index
fruit.shift()
console.log(fruit)

//unshift()
//unshift() method add a new element to an array(at the beginning)
fruit.unshift('Lemon')
console.log(fruit)

//Changing Element
fruit[0]="Kiwi"
console.log(fruit)

//length
//the length property provides an easy way to append a new element to an array
fruit[fruit.length]="Banana"
console.log(fruit)

//using delete 
//using delete leaves undefined holes in your array,use shift or pop
// delete fruit[0]
// console.log(fruit)

//concatenation
const myGirls=["Ama","Adwoa","Yaa"]
const myBoys=["Kwame","Kwabena","Yaw"]
const myPet=["Parrot","Cat","Dog"]
myChildren=myGirls.concat(myBoys)
livingThings=myGirls.concat(myBoys,myPet)
console.log(myChildren)
console.log(livingThings)
console.log(livingThings.concat("Peter"))

//copyWithin
//copies array element to another position
console.log(fruit.copyWithin(2,0)) 
console.log(fruit.copyWithin(2,0,4))

//Flattening an array
//flat() method create a new array with sub array concatenated to a specific depth
const myArray=[[1,2],[3,4],[5,6]];
const newArray=[1,2,3,4,5,6,7,8]
console.log(myArray.flat())
console.log(newArray.flatMap(x=>[x,x*10]))//map all element of an array and then create a new array by flattening the array

//Splicing and slicing
//the splice method add new item to the array
//the slice ,slice out a piece of of an array

vegetables=["Onion","Pepper","Garlic","Garden-Egg"]
vegetables.splice(2,0,"Okro","Tomato")  //Adding element with splice
// console.log(vegetables)
vegetables.splice(2,0)//removing with splice
console.log(vegetables) 

//Array slice

myvegetables=["Onion","Pepper","Garlic","Garden-Egg"]
slice=vegetables.slice(1)//slice out a piece of an array into a new array
console.log(slice)
secondSlice=vegetables.slice(1,3)
console.log(secondSlice)//select method that start the the argument and up to (but excluding) that end argument
newSlice=vegetables.slice(2)
console.log(newSlice)

