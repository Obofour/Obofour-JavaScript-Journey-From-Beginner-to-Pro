const person={
    firstName:"John",
    lastName:"Doe",
    id:5566,
    fullname:function(){
        return this.firstName+" "+this.lastName
    }
}
console.log(person.fullname())

//this Alone
let x=this
console.log(x)

"use strict"
y=this
console.log(y)

"use strict"
function myfunction(){
    return this
}
console.log(myfunction())

const person1={
    fullname:function(){
        return this.firstName+" "+this.lastName
    }
}

//call() and apply() methods are predefined javascript method they can both call object method eith another object as argument

//the example below cal
const person2={
    firstName:"john",
    lastName:"Doe",
}
console.log(person1.fullname.call(person2))


const Person={
    firstName:"John",
    lastName:"Doe",
    fullName:function(){
        return this.firstName+" "+this.lastName
    }
}
const Member={
    firstName:"Hege",
    lastName:"Nelson"
}
let fullName=Person.fullName.bind(Member)
// console.log(Person.fullName.bind(Member))
console.log(fullName())

