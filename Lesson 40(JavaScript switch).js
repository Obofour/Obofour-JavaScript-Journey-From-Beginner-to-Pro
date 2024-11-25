//switch statement is used to perform different action based on different condition
switch(new Date().getDay()){
    case 0:
        day="Monday";
    break
    case 1:
        day="Tuesday";
    case 2:
        day="Wednesday";
    case 3:
        day="Thursday";
    case 4:
        day="Friday";
    case 5:
        day="Saturday";
    case 6:
        day="Sunday"
    
}
console.log(day)

//when JavaScript reach a break keyword,it breaksk out of the switch block
//This will stop inside the switch block.
//it is not neccessary to break the last case in a switch block
//if you dont break ,the next case will be executed even if the eveluation does not match the case

//the default keyword
switch(new Date().getDate()){
    case 6:
        text="Today is Saturday"
        break
    case 0:
        text="Today is Saturday"
        break
    default:
        text="Looking forword to the weekend"
}
//if today is not Saturday(6) nor Sunday(0) write default message
console.log(text)

//default case does not have to be the last case
switch(new Date().getDate()){
    default:
        text1="Looking forword to the weekend"
        break
    case 6:
        text1="Today is Saturday"
        break
    case 0:
        text1="Today is Saturday"
}
console.log(text1)
// if default is not the last case dont forget to break it as shown above

//common code block
//sometimes you will want different case to use the same code
switch(new Date().getDate()){
    case 4:
    case 5:
        txt="Soon it is weekend";
        break
    case 0:
    case 6:
        txt="It is weekend"
        break
    default:
        txt="Looking forward to the weekend"   
}
//case 4 and  case 5 uses the same output
//case 0 and case 6 uses the same output
console.log(txt)
let TodaysDate=new Date()
TodaysDate.getDay()
console.log(TodaysDate)

//Strict comparism
let x="0"
switch(x){
    case 0:
        text2="Off";
        break
    case 1:
        text2="On"
        break
    default:
        text2="No value found"
}
console.log(text2)