//Local Scope
function myfunction(){
    let carName="Volvo";
    console.log(typeof(carName)+" "+carName)
}
myfunction()

//console.log(carName)

//Global Scope
let Vechicle="Volvo"
myVechicle()

function myVechicle(){
    console.log(Vechicle)
}