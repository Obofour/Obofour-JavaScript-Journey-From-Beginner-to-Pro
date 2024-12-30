function Person(name,age,last,eye){
this.name=name;
this.age=age;
this.last=last;
this.eye=eye;
this.nationality="Ghanaian";
}

const Mother=new Person("Osaa",40,"Afia","black")
const Father=new Person("Kwaku",42,"Asante","black")
console.log(Mother.name)
console.log(Mother.last)
console.log(Father.name)
console.log(Father.nationality)

//The Prototype property allow Adding properties allows you to add new ,method to object  
Person.prototype.contry="Ghana"
console.log(Mother.contry)

console.log(typeof(Person))

export default Person