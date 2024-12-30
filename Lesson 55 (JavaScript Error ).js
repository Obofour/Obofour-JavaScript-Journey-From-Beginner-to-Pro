//delibrately misspelled "alert" as add alert to produce error
try {
    addlert("Welcome Guest")
}
catch(err){
    console.log(err.message)
    console.log(err.name)

}

//JacaScript Try And Catch

//try statement allows you to define a block of code to br tested for error while its being executed.
//catch statement alloew you to define a block of code to be executed,if an error occurs in the try block

//syntax
//try{
// Block of code to try
//}
//catch(err){
//Block of code to handle error
//}

//The Throw statement allow you to create a cunstom error
//Technically you can throw an exeception(throw an error)
//The exeception can be a JavaScript String, a number, a Boolean or an Object

//invalid example
//Range Error
//A RangeError is thrown if you see a number that is outside the range of legal values

let num=1
try{
    num.toPrecision(500)
}
catch(err){
    console.log(err.name)
}

//Reference Error
//A ReferenceError is thrown if you use (reference) a variable that has not been declared

let x=5
try{
    x=y+1
}
catch(err){
    console.log(err.name)
}

//Syntax Error is thrown if you eveluate code with a syntax error
try{
    eval("alert('Hello)")
}
catch(err){
    console.log(err.name)
}

//Type error
//A typeError is thrown if an operand or argument is incompatible with the ttype expected by an operator or function
let Num=1
try{
    num.toUpperCase()
}
catch(err){
    console.log(err.name)
    console.log(err.message)
}

//URI(Uniform Resource Identifier) Erro
try{
    decodeURI("%%%")
}
catch(err){
    console.log(err.name)
    console.log(err.message)
}
