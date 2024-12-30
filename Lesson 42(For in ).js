const person={fname:"John",lname:"Doe",age:25}

text=""
for(let x in person){
    text+=person[x]
}
console.log(text)


//Do not use for in over an array if the index order is important
//The index order is implemented-deoendent 

const number=[45,4,9,19,25]

txt=""
for(let x in number){
    txt+=number[x]
}
console.log(txt)

txt1=""
number.forEach(myfunction)

function myfunction(value){
    txt1+=value
}
console.log(txt1)