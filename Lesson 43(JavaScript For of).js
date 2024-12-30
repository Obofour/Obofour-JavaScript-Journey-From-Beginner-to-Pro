//Looping over an Array
const cars=["BMW","Volvo","Mini"]
let txt=""
for(let x of cars){
    txt+=x
}
console.log(txt)
let text=""
for(let x in cars){
    text+=cars[x]
}
console.log(text)

//Looping over a string
language="JavaScript"
let Txt=""
for(let x of language){
    Txt+=x
}
console.log(Txt)