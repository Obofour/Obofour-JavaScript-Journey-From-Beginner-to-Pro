//Spread(...)
firstQuater=["January","Febuary","March","April"]
SecondQuater=["June","July","August","November"]
year=[...firstQuater,...SecondQuater]
console.log(year)

//Can take only the value argument
const numbers=[45,4,9,16,25]
let txt="";
numbers.forEach(myfunction)
function myfunction(value){
    return txt+=value+","
}
console.log(txt)

//Array map()
//map() method create a new array by performing a function on each array element
//it does not execute the function for array element without values
//it map() method does not change the original array
const numbers1=[45,4,9,16,25]
numbers2=numbers1.map(mapfunction);
function mapfunction(value){
    return value*2
}
console.log(numbers2)

//Flatmap() first map all element and create a new one
myArr=[1,2,3,4,5,6,7,8] 
newArr=myArr.flatMap((x) =>[x,x*10]);
console.log(newArr)

//filter() method create a new array with array element that past a test
over18=numbers.filter(myfilter)
function myfilter(value,array,index){
    return value>18
}
console.log(over18)

//with() is the safest way to update element in an array
month=["January","Febuary","Mar","April"]
updateMonth=month.with(2,"March")
console.log(updateMonth)
// month[2]="Marcch"
// console.log(month)