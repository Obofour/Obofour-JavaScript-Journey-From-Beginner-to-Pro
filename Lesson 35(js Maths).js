//javaScript Maths allow you to perform mathematical task on number
//Maths.round() returns nearest integer
let Firstround=Math.round(4.6)
let Secondround=Math.round(4.5)
let Thirdround=Math.round(4.4)
console.log(Firstround)
console.log(Secondround)
console.log(Thirdround)

//Math.ceil() return the value of x rounded up to its nearest integer
var FirstCiel=Math.ceil(4.5) 
var SecondCiel=Math.ceil(4.6) 
var ThirdCiel=Math.ceil(4.4)
console.log(FirstCiel)
console.log(SecondCiel)
console.log(ThirdCiel) 

//Math.floor() returns te value of x rounded down to its nearest integer
let floorOne=Math.floor(5.3)
var floortwo=Math.floor(5.9)
console.log(floorOne)
console.log(floortwo)

//Math.trunc(x)returns the integer part of x
console.log(Math.trunc(4.9))
console.log(Math.trunc(4.5))
console.log(Math.trunc(4.7))
console.log(Math.trunc(4.2))

//Math.sign return if the  x is negative,null or positive
console.log(Math.sign(-4)) 
console.log(Math.sign(4)) 
console.log(Math.sign(0)) 

//Math.pow(x,y) returns te value of x the power of y
console.log(Math.pow(4,2))

//Math.sqrt(x) return the square root of x
console.log(Math.sqrt(64))
console.log(Math.sqrt(16))

//Math.abs(x) returns the absolute(positive) value of x
console.log(Math.abs(-4.7))

//Math.sin() return the sine(a value between -1 and 1) of the angle(given in radians)
//Angle in radians =Angle in Degree*PI/180

console.log(Math.sin(90*Math.PI/180))

//Math.cos() return the cosine(a value between -1 and 1) of the angle(given in radians)
//Angle in radians =Angle in Degree*PI/180
console.log(Math.cos(Math.cos(90*Math.PI/180)))

//Math.min() and Math.max() can be used to find the lowest or highest value in a list argument
console.log(Math.min(0,150,30,20,-8,-200))
console.log(Math.max(0,150,30,20,-8,-200))

//Math.random() return a random number between 0 and 1
console.log(Math.random())

//Maths.log() returns the natural logarithm of x
console.log(Math.log(1)) 
console.log(Math.log(100)) 
console.log(Math.log(1000))
// console.log(Math.log(5))

//Math.log2() return the base 2 log of x
console.log(Math.log2(4))
console.log(Math.log2(8))

// //Math.log10() return the base 10 log of x
console.log(Math.log10(100))