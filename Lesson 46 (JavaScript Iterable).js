//iterating over a string

let Name="Obofour"
txt=""

for(x of Name){
    txt+=x+","
}
console.log(txt)

//iterating over an Array
const letters=["a","b","c"]
Txt=""
for (x of letters){
    Txt+=x+" ,"
}
console.log(Txt)

//iterating over a set
const NewSet=new Set(["a","b","c"])
text=""
for(x of NewSet){
    text+=x+" ,"
}
console.log(text)

//looping Over a Map
const fruit=new Map([    ["apples",500],
    ["bananas",300],
    ["Oranges",200]
]
)
let Text=""
for(const x of fruit){
Text+=x+" ,"
}
console.log(Text)

//next()
function mynumbers(){
    let n=0;
    return{ 
        next:function(){
            n+=10;
            return {value:n,done:false}
        }
    }
}
//create Iterable
const n=mynumbers()
n.next();
n.next();
n.next()
console.log(n.next.value)