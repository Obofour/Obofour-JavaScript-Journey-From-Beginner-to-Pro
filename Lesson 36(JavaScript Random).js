console.log(Math.random())
// Math.random() used with Math.floor() can be used to return random integer

guess=Math.floor(Math.random()*10)//Returns a random integer from 0 to 9
Guess=Math.floor(Math.random())//Return a random integer from 0 to 10
Tohundred=Math.floor(Math.random()*101)+1//Return a random integer from 0 to 10
console.log(guess)
console.log(Guess)
console.log(Tohundred)

// Proper Random function
// This javascript function function always return a random number between min(included) and max(excluded)
function getRndInteger(min,max){
    return Math.floor(Math.random() * (max-min)+min)
}

function randomInteger(max,min){
    return Math.floor(Math.random()*4)

}
console.log(randomInteger())