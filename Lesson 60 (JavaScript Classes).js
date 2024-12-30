class car{
    constructor(name,year){
        this.name=name;
        this.year=year
    }
}
const mycar1=new car("cyber truck",2024)
const mycar2=new car("Audi",2019)

console.log(mycar1.name)

//creating a class ,method name age that return car age
class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(){
        const date=new Date()
        return date.getFullYear()-this.year
    }
}
const NewCar=new Car("Ford",2014)
console.log(NewCar.age())

//creating a class and method to print fullname
class Candidate{
    constructor(firstname,secondname){
        this.firstname=firstname;
        this.secondname=secondname;
       
    }
    fullname(){
        return this.firstname+" "+this.secondname
    }
    graduatingYear(GraduatingYear){
        this.GraduatingYear=GraduatingYear
        
        let date=new Date()
        date.getFullYear()
        return date.getFullYear()
    }
}
const Male=new Candidate("Howdy","Obofour")
console.log(Male.fullname()) 
console.log(Male.graduatingYear())