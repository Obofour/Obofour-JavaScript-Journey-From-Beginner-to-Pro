//sort() an array alphabetically
const Fruit=["Banana","Orange","Apple","Mango"]
console.log(Fruit.sort())//Ascending Order

//reverse() method reverses the element in an array
console.log(Fruit.reverse())//Descending Order

//toSorted() is a safe way to sort an array without altering the Original array
//difference between toSorted() and sort() the first method create a bew array,keep the original array unchanged,whike the last method alter the originalthe original
month=["January","Febuary","March","April"]
sorted=month.toSorted()
reversed=month.toReversed()
console.log(sorted) 
console.log(reversed) 

//Numeric sort
//default sort function sort values as a string
const point=[40,100,1,5,25,10]
console.log(point.sort(function(a,b){return a-b}))
console.log(point.sort(function(a,b){return b-a}))//compare function

//the compare function is to define an alternative sort order
//syntax: function(a,b){return a-b}

//sorting an array in random order
console.log(point.sort(function(a,b){return 0.5-Math.random()}))

//Fishers Yate Method
for(let i=point.length -1;i>0;i --) {
    let j= Math.floor(Math.random()*(i+1));
    let k=point[i];
    point[i]=point[j]
    point[j]=k
}
console.log(point)

//Find the Lowest/Higest Array value
//in javaScript there is no in-built function for finding the max and min in an array
//To do this
//Step 1:sort the array and read the first and last element
//Step 2:Use Math.min() or Maths.max()
//write a home made function

//Reading from sort
console.log(point.sort(function(a,b){return a-b}))
console.log(point.sort(function(a,b){return b-a}))

function myArrayMin(arr){
    return Math.min.apply(null,arr)
}
function myArrayMax(arr){
    return Math.max.apply(null,arr)
}
console.log(myArrayMin(point))//find the lowest number
console.log(myArrayMax(point))//find the highest number

//sorting Object
const cars=[
    {type:"Volvo",year:2016},
    {type:"Saab",year:2001},
    {type:"BMW",year:2010}
]
console.log(cars.sort(function(a,b){return a.year - b.year}))