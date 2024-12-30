const letter=new Set(["a","b","c"])
console.log(typeof(letter))
console.log(letter)

//create a new Set and add values
const Alphabet=new Set()
Alphabet.add("a")
Alphabet.add("b")
Alphabet.add("c")
Alphabet.add("d")
console.log(Alphabet)

//create a variable and add variables
const Letters=new Set()
const a="a"
const b="b"
const c="c"
const d="d"

Letters.add(a)
Letters.add(b)
Letters.add(c)
Letters.add(d)
console.log(Letters)

//Listing the Element
let text=""
for(const x of Letters){
    text+=x+" , "
}
console.log(text)

//set are also Object