//for each
const numbers=[45,4,9,16,25]
let txt="";
numbers.forEach(myfunction)
function myfunction(value,index,array){
    return txt+=value+"<br>"
}
console.log(txt)

//reduce() method run a function on each arrau element to produce a single number
let sum=numbers.reduce(myReduction)
function myReduction(total,index,value,array){
    return total+value
}
console.log(sum)

//every() method checks if all array values pass a test
let allOver18=numbers.every(allOver)
function allOver(value){
    return value>18

}
console.log(allOver18)

//some() checks if some array values pass a test
myArray=[45,4,9,16,25]
someOver19=myArray.some(myArrayFunc)
function myArrayFunc(value){
    return value>18
}
console.log(someOver19)

//from() return an array object from any object from any object with a lenght property or any iterable
myArr=Array.from("ABCDEFG")
console.log(myArr)

//Array.keys() method returns an array iterator object with Object keys of an array
fruits=["Banana","Orange","Apple","Mango"]
// keys=fruits.keys()
// for(let x of keys){
//     text +=x+","
// }
// console.log(text)

// f=fruits.entries();
// for (let x of f){

// }
