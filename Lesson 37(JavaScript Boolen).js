let x=0
let y=-0
let z=""
let u=null
let v=NaN
let objectBool=new Boolean(false)
console.log(Boolean(x)) //Return False
console.log(Boolean(y))//Return False
console.log(Boolean(z))
console.log(Boolean(u))
console.log(Boolean(v))
console.log(Boolean(objectBool))

let a=new Boolean(false)
let b=Boolean(false)
console.log(a==b) //a and b are equal

let c=new Boolean(false)
let d=Boolean(false)
console.log(a===b) //a and b are not equal

console.log(a==c)//comparing two object returns False