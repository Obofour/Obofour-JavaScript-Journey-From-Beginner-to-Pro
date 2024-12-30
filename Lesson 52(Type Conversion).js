//converting String to Number
console.log(typeof(Number("3.14")))
console.log(typeof(Number(Math.PI)))
console.log(typeof(Number(" ")))
console.log(typeof(Number("")))

console.log(typeof(Number("99 88")))
console.log(typeof(Number("John")))

let x=12
//converting Number to string or toString()
console.log(typeof(String(x)))
console.log(typeof(String(123)))
console.log(typeof(String(12+100)))
console.log(typeof(x.toString()))

//converting Date to number
d=new Date()
console.log(typeof(Number(d)))

//converting Date to string
console.log(typeof(String(Date())))

//converting Boolean to Numbers
console.log(typeof(String(false)))