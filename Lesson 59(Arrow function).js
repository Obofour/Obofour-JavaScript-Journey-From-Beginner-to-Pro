let hello= function(){
    return "Hello world"
}
console.log(hello())

//with arrow
hello=()=>{
    return "Hello World"
}
console.log(hello())

Hello = () =>"Good Afternoon"
console.log(Hello())

Greeting= (val) =>"Hello "+val
console.log(Greeting("Universe"))

//without parenthesis
greet=val=>"hello "+val
console.log(greet("world"))

//What about this
const HELLO=function(){
    console.log(this)
}

//The windows object call the function
window.addEventListener()