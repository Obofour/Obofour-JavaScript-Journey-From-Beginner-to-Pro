//setFullYear
a=new Date()
b=new Date()
a.setFullYear(2020)
b.setFullYear(2020, 11, 3)
console.log(a)//set the year of a date object
console.log(b)

//Set month
c=new Date()
c.setMonth(11);
console.log(c)

//set Date method
//set Date() method set the day of of a date object(1-31)
d=new Date()
d.setDate(15)
console.log(d)

//can also be used to add days to a date
// f=new Date()
// f.setDate(f.getData()+50)
// console.log(f)

//setHours()
//set the hours of a date Object(0-23)
f=new Date()
f.setHours(12)
console.log(f)

//setMinutes()
let g=new Date()
g.setMinutes(30)
console.log(g)

//setSeconds()
var h=new Date()
h.setSeconds(21)
console.log(h)

//compare Date
//Exmaple compare todays date with January 14,2100

let text=""
const today=new Date()
const someday=new Date()
someday.setFullYear(2100,0,14)

if(someday>today){
    text="Today is before January 14,2100"
}
else{
    text="Today is after January 14,2100"
}
console.log(text)