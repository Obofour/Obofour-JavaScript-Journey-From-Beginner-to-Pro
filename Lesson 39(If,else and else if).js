//if to specify a block of code to be executed, if a specidfied condition is True
//else if te same condition is false 
//else if ,if the first condition is false
//switch to specify many alternative blocks of code to ba executed

//Example of if statement
hour=10
if(hour<18){
    greeting="Good Day"
}
console.log(greeting)

//Example of Else statement
time=5
if (time<10){
    say="Good morning"
}
else{
    say="Good Evening"
}
console.log(say)

//else if
let seconds=60
if(seconds<30){
    minute="Below half"
}
else if(seconds==60){
    minute="A minute checked"
}
else{
    minute="above half"
}
console.log(minute)
